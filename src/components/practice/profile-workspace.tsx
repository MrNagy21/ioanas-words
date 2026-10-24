"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { CreatorCredit } from "@/components/creator-credit";
import {
  AVATAR_WORD_IDS,
  removeProfile,
  saveGoal,
  saveProfile,
  newLocalId,
  type ChildProfile,
  type LocalPracticeState,
} from "@/practice/model";
import {
  initializePracticeStore,
  mutatePracticeState,
  readPracticeState,
  subscribePracticeChanges,
} from "@/storage/practice-store";
import type { ContentWord, GameplayTarget } from "@/content/types";
import {
  PreparePractice,
  PracticePreview,
  type PreparedPractice,
} from "@/components/practice/prepare-practice";
import {
  PracticePlayer,
  ParticipationCelebration,
} from "@/components/practice/practice-player";
import { PracticeProgress } from "@/components/practice/practice-progress";
import { PracticeBackups } from "@/components/practice/practice-backups";
import {
  PracticeOnboarding,
  clearOnboardingDraft,
} from "@/components/practice/practice-onboarding";
import { unlockCelebrationSound } from "@/components/practice/celebration-sound";
import { beginPracticeSession } from "@/practice/sessions";
import { getTargetStorageKey, getTargetRouteSegment } from "@/game/wheel-setup";
import {
  buildPracticeContent,
  preparePracticeWords,
} from "@/practice/preparation";

export type AvatarOption = {
  id: string;
  image: string;
  label: string;
  alt: string;
};
const GOAL_LABELS =
  "A Ă Â B C D E F G H I Î J K L M N O P Q R S Ș T Ț U V W X Y Z CE CI GE GI CHE CHI GHE GHI".split(
    " ",
  );

export function ProfileWorkspace({
  avatars,
  words,
  targets,
}: {
  avatars: AvatarOption[];
  words: ContentWord[];
  targets: GameplayTarget[];
}) {
  const [forceOnboarding, setForceOnboarding] = useState(false);
  const [preparingId, setPreparingId] = useState<string | null>(null);
  const [prepared, setPrepared] = useState<PreparedPractice | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [celebratingId, setCelebratingId] = useState<string | null>(null);
  const [state, setState] = useState<LocalPracticeState | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editor, setEditor] = useState<"new" | "edit" | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const pickerHeading = useRef<HTMLHeadingElement>(null);
  const selected = state?.profiles.find((p) => p.id === selectedId) ?? null;

  const refresh = useCallback(async () => {
    try {
      const current = await initializePracticeStore();
      setState((previous) =>
        !previous || current.revision >= previous.revision ? current : previous,
      );
      setError(null);
    } catch (reason) {
      setError(message(reason));
    }
  }, []);
  useEffect(() => {
    let live = true;
    initializePracticeStore()
      .then((current) => {
        if (live) {
          setState(current);
          setForceOnboarding(
            new URLSearchParams(window.location.search).get("guide") === "1",
          );
        }
      })
      .catch((reason) => {
        if (live) setError(message(reason));
      });
    const unsubscribe = subscribePracticeChanges(() => {
      void refresh();
    });
    return () => {
      live = false;
      unsubscribe();
    };
  }, [refresh]);
  useEffect(() => {
    if (!state?.preferences?.sound) return;
    const unlock = () => unlockCelebrationSound();
    window.addEventListener("pointerdown", unlock, { once: true });
    return () => window.removeEventListener("pointerdown", unlock);
  }, [state?.preferences?.sound]);

  async function save(
    command: (draft: LocalPracticeState) => void,
    success: string,
    expectedRevision = state?.revision,
  ) {
    if (!state || busy) return false;
    setBusy(true);
    setError(null);
    try {
      const updated = await mutatePracticeState(command, expectedRevision);
      setState(updated);
      setNotice(success);
      return true;
    } catch (reason) {
      setError(message(reason));
      return false;
    } finally {
      setBusy(false);
    }
  }

  function select(id: string) {
    setSelectedId(id);
    setGoalsOpen(!state?.profiles.find((p) => p.id === id)?.goals.length);
    setEditor(null);
    setConfirmDelete(false);
    setNotice("");
    window.setTimeout(() => heading.current?.focus(), 0);
  }

  const celebratingChild = state?.profiles.find((p) => p.id === celebratingId);
  if (state && celebratingChild)
    return (
      <ParticipationCelebration
        awards={state.awards.filter(
          (a) => a.childId === celebratingId && !a.presented,
        )}
        childName={celebratingChild.nickname}
        sound={state.preferences.sound}
        busy={busy}
        error={error}
        onContinue={(variant) => {
          void save((draft) => {
            for (const a of draft.awards)
              if (a.childId === celebratingId && !a.presented) {
                a.presented = true;
                a.variant = variant;
              }
          }, "Medalia este în colecție.").then((ok) => {
            if (ok) setCelebratingId(null);
          });
        }}
      />
    );
  if (state && activeSessionId)
    return (
      <PracticePlayer
        sessionId={activeSessionId}
        initialState={state}
        onExit={() => {
          setActiveSessionId(null);
          void refresh();
        }}
      />
    );
  const preparingChild = state?.profiles.find((p) => p.id === preparingId);
  if (preparingChild)
    return (
      <PreparePractice
        child={preparingChild}
        targets={targets}
        words={words}
        initialPrepared={
          prepared?.childId === preparingChild.id ? prepared : undefined
        }
        onCancel={() => setPreparingId(null)}
        onPrepared={(draft) => {
          setPrepared(draft);
          setPreparingId(null);
          setPreviewOpen(true);
        }}
      />
    );
  const previewChild = state?.profiles.find((p) => p.id === prepared?.childId);
  if (previewOpen && prepared && previewChild)
    return (
      <PracticePreview
        child={previewChild}
        prepared={prepared}
        busy={busy}
        error={error}
        onCancel={() => setPreviewOpen(false)}
        onChangeWheel={() => {
          setPreparingId(prepared.childId);
          setPreviewOpen(false);
        }}
        onEditGoals={() => {
          select(prepared.childId);
          setGoalsOpen(true);
          setPreviewOpen(false);
        }}
        onStart={() => {
          const id = newLocalId();
          void save((draft) => {
            beginPracticeSession(
              draft,
              prepared.childId,
              prepared.target,
              prepared.words,
              prepared.config,
              `Roata ${prepared.target.label}`,
              id,
            );
          }, "Exersare salvată.").then((ok) => {
            if (ok) {
              setPreviewOpen(false);
              setPrepared(null);
              setActiveSessionId(id);
            }
          });
        }}
      />
    );

  if (!state && !error)
    return (
      <main className="onboarding-shell onboarding-loading">
        <p role="status">Pregătim locul de joacă…</p>
      </main>
    );

  if (state && (forceOnboarding || !state.preferences.onboardingCompleted)) {
    const closeGuide = () => {
      clearOnboardingDraft();
      setForceOnboarding(false);
      const url = new URL(window.location.href);
      url.searchParams.delete("guide");
      window.history.replaceState(window.history.state, "", url);
    };
    return (
      <PracticeOnboarding
        state={state}
        avatars={avatars}
        words={words}
        targets={targets}
        initialChildId={selectedId}
        busy={busy}
        error={error}
        onSave={save}
        onExit={(childId) => {
          void save((d) => {
            d.preferences.onboardingCompleted = true;
          }, "").then((ok) => {
            if (ok) {
              closeGuide();
              setSelectedId(childId);
              setEditor(null);
            }
          });
        }}
        onResume={async (sessionId, childId) => {
          const ok = await save((d) => {
            d.preferences.onboardingCompleted = true;
          }, "");
          if (ok) {
            closeGuide();
            setSelectedId(childId);
            setActiveSessionId(sessionId);
          }
          return ok;
        }}
        onStart={async (wheel) => {
          const id = newLocalId();
          const ok = await save((d) => {
            beginPracticeSession(
              d,
              wheel.childId,
              wheel.target,
              wheel.words,
              wheel.config,
              `Roata ${wheel.target.label}`,
              id,
            );
            d.preferences.onboardingCompleted = true;
            d.preferences.onboardingStep = 4;
          }, "");
          if (ok) {
            closeGuide();
            setSelectedId(wheel.childId);
            setActiveSessionId(id);
          }
          return ok;
        }}
      />
    );
  }

  return (
    <main className="practice-shell">
      <div className="practice-frame">
        <header className="practice-header">
          <Link href="/ro" className="practice-brand">
            Roata cuvintelor
          </Link>
          <button
            className="quiet-button"
            type="button"
            disabled={!state || busy}
            onClick={() => {
              clearOnboardingDraft();
              void save((draft) => {
                draft.preferences.onboardingCompleted = false;
                draft.preferences.onboardingStep = 0;
              }, "");
            }}
          >
            Ajutor
          </button>
          <Link className="quiet-link" href="/ro">
            Joc fără profil
          </Link>
        </header>
        <div className="practice-intro" hidden={!!selected && !editor}>
          <h1 ref={pickerHeading} tabIndex={-1}>
            Copiii mei
          </h1>
          <p>
            Cu cine exersăm astăzi? Alegeți un profil sau adăugați un copil.
          </p>
        </div>
        {error && (
          <div className="practice-alert" role="alert">
            <p>{error}</p>
            <button
              type="button"
              className="secondary-button"
              onClick={() => {
                void refresh();
              }}
            >
              Reîncarcă datele
            </button>
            <Link href="/ro">Continuă fără profil</Link>
          </div>
        )}
        <p className="practice-sr-status" role="status">
          {busy ? "Se salvează..." : notice}
        </p>
        {!state ? (
          !error && <p role="status">Deschidem profilurile...</p>
        ) : (
          <div
            className="practice-columns"
            data-detail-open={!!selected || !!editor}
          >
            <aside className="practice-profiles" aria-label="Profiluri copii">
              <button
                className="spin-button"
                type="button"
                disabled={busy}
                onClick={() => {
                  setEditor("new");
                  setSelectedId(null);
                  setConfirmDelete(false);
                }}
              >
                Adaugă un copil
              </button>
              {state.profiles.length === 0 && (
                <div className="practice-empty">
                  <h2>Primul profil începe aici</h2>
                  <p>
                    Folosiți o poreclă sau un cod și alegeți un animal. Nu avem
                    nevoie de numele complet.
                  </p>
                </div>
              )}
              <ul className="practice-profile-list">
                {state.profiles.map((profile) => (
                  <li key={profile.id}>
                    <button
                      className="practice-profile"
                      type="button"
                      aria-pressed={profile.id === selectedId}
                      onClick={() => select(profile.id)}
                    >
                      <Avatar
                        option={avatars.find((a) => a.id === profile.avatar)}
                      />
                      <span>
                        <strong>{profile.nickname}</strong>
                        <small>
                          {profile.goals.filter((g) => g.active).length
                            ? `Sunete: ${profile.goals
                                .filter((g) => g.active)
                                .map((g) => g.label)
                                .join(", ")}`
                            : "Exersare liberă"}
                        </small>
                      </span>
                      <svg
                        className="practice-arrow"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="m9 5 7 7-7 7" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="practice-local-note">
                Profilurile rămân în acest browser. Descărcați din când în când
                o copie de siguranță, ca să nu pierdeți istoricul dacă ștergeți
                datele browserului.
              </p>
            </aside>
            <section className="practice-detail" aria-label="Profilul selectat">
              {(selected || editor) && (
                <button
                  className="quiet-button practice-change-child"
                  type="button"
                  onClick={() => {
                    setSelectedId(null);
                    setEditor(null);
                    setConfirmDelete(false);
                    window.setTimeout(() => pickerHeading.current?.focus(), 0);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="m14 6-6 6 6 6" />
                  </svg>
                  Schimbă copilul
                </button>
              )}
              {editor ? (
                <ProfileEditor
                  key={editor + (selected?.id ?? "new")}
                  profile={editor === "edit" ? selected : null}
                  avatars={avatars}
                  busy={busy}
                  revision={state.revision}
                  onCancel={() => setEditor(null)}
                  onSave={async (input, baseRevision) => {
                    const before = new Set(state.profiles.map((p) => p.id));
                    const ok = await save(
                      (draft) => saveProfile(draft, input),
                      "Profil salvat pe acest dispozitiv.",
                      baseRevision,
                    );
                    if (ok) {
                      const current = await readPracticeState();
                      setSelectedId(
                        input.id ??
                          current.profiles.find((p) => !before.has(p.id))?.id ??
                          null,
                      );
                      setEditor(null);
                      setGoalsOpen(!input.id);
                    }
                  }}
                />
              ) : selected ? (
                <>
                  <div className="practice-child-heading">
                    <Avatar
                      option={avatars.find((a) => a.id === selected.avatar)}
                    />
                    <div className="practice-child-name">
                      <h1 tabIndex={-1} ref={heading}>
                        {selected.nickname}
                      </h1>
                      <p>
                        {selected.goals.filter((goal) => goal.active).length
                          ? `Exersăm ${selected.goals
                              .filter((goal) => goal.active)
                              .map((goal) => goal.label)
                              .join(", ")}`
                          : "Un cuvânt, încă un pas înainte."}
                      </p>
                    </div>
                    <div className="practice-start-area">
                      {state.sessions.some(
                        (s) => s.childId === selected.id && !s.endedAt,
                      ) ? (
                        <button
                          type="button"
                          className="spin-button"
                          onClick={() =>
                            setActiveSessionId(
                              state.sessions.find(
                                (s) => s.childId === selected.id && !s.endedAt,
                              )!.id,
                            )
                          }
                        >
                          Reia exersarea
                        </button>
                      ) : (
                        <button
                          className="spin-button"
                          type="button"
                          onClick={() => setPreparingId(selected.id)}
                        >
                          Pregătește o roată
                        </button>
                      )}
                      {prepared?.childId === selected.id && (
                        <button
                          type="button"
                          className="secondary-button"
                          onClick={() => setPreviewOpen(true)}
                        >
                          Revino la roata pregătită
                        </button>
                      )}
                    </div>
                    <button
                      className="secondary-button"
                      type="button"
                      onClick={() => setEditor("edit")}
                    >
                      Editează profilul
                    </button>
                  </div>
                  <section
                    className="practice-goals"
                    aria-labelledby="goals-title"
                  >
                    <button
                      className="practice-goals-toggle"
                      type="button"
                      aria-expanded={goalsOpen}
                      aria-controls="practice-goal-editor"
                      onClick={() => setGoalsOpen(!goalsOpen)}
                    >
                      <span>
                        <strong id="goals-title">Sunete de exersat</strong>
                        <small>
                          {selected.goals
                            .filter((goal) => goal.active)
                            .map((goal) => goal.label)
                            .join(" · ") ||
                            "Alegeți sunetele sau începeți fără ele"}
                        </small>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div id="practice-goal-editor" hidden={!goalsOpen}>
                      <p>
                        Alegeți sunetele pe care le exersați împreună. Le puteți
                        schimba oricând.
                      </p>
                      <GoalEditor
                        busy={busy}
                        onSave={(label, pace) =>
                          save(
                            (draft) =>
                              saveGoal(draft, selected.id, label, pace),
                            "Sunet salvat.",
                          )
                        }
                      />
                      {selected.goals.length ? (
                        <ul className="practice-goal-list">
                          {selected.goals.map((goal) => (
                            <li key={goal.id}>
                              <strong>{goal.label}</strong>
                              <span>
                                {goal.active
                                  ? goal.pace === "frequent"
                                    ? "Recompense frecvente"
                                    : "Ritm standard"
                                  : "Arhivată"}
                              </span>
                              <button
                                type="button"
                                className="quiet-button"
                                disabled={busy}
                                onClick={() => {
                                  void save(
                                    (draft) => {
                                      const item = draft.profiles
                                        .find((p) => p.id === selected.id)
                                        ?.goals.find((g) => g.id === goal.id);
                                      if (item) item.active = !item.active;
                                    },
                                    goal.active
                                      ? "Țintă arhivată."
                                      : "Țintă reactivată.",
                                  );
                                }}
                              >
                                {goal.active ? "Arhivează" : "Reactivează"}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="practice-empty-line">
                          Niciun sunet ales încă. Puteți începe o roată și fără
                          această alegere.
                        </p>
                      )}
                      <p className="practice-review-note">
                        Numărăm deja cuvintele exersate. Numărarea pe sunete și
                        poziții va apărea după verificarea listei de cuvinte.
                      </p>
                    </div>
                  </section>
                  <PracticeProgress
                    key={selected.id}
                    state={state}
                    child={selected}
                    busy={busy}
                    onSave={save}
                    onCelebrateNow={() => setCelebratingId(selected.id)}
                  />
                  <div className="practice-delete-area">
                    {confirmDelete ? (
                      <div
                        role="group"
                        aria-label="Confirmă ștergerea profilului"
                      >
                        <p>
                          Ștergeți profilul „{selected.nickname}”, sunetele
                          alese, istoricul exersărilor, observațiile despre
                          pronunție și medaliile sale? Celelalte profiluri și
                          roțile salvate rămân.
                        </p>
                        <button
                          className="practice-danger"
                          type="button"
                          disabled={busy}
                          onClick={async () => {
                            if (
                              await save(
                                (draft) => removeProfile(draft, selected.id),
                                "Profil șters.",
                              )
                            ) {
                              setSelectedId(null);
                              setConfirmDelete(false);
                            }
                          }}
                        >
                          Da, șterge profilul
                        </button>
                        <button
                          className="secondary-button"
                          type="button"
                          disabled={busy}
                          onClick={() => setConfirmDelete(false)}
                        >
                          Anulează
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="quiet-button"
                        onClick={() => setConfirmDelete(true)}
                      >
                        Șterge profilul
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="practice-welcome">
                  <div className="practice-animal-line" aria-hidden="true">
                    {avatars.map((a) => (
                      <Avatar key={a.id} option={a} />
                    ))}
                  </div>
                  <h2>Fiecare copil, în ritmul lui</h2>
                  <p>
                    Aici păstrați cuvintele exersate, observațiile și medaliile
                    fiecărui copil. Alegeți un profil din listă ca să începeți.
                  </p>
                </div>
              )}
            </section>
          </div>
        )}
        {state && (
          <details className="practice-library">
            <summary>
              Roțile mele salvate · {state.configurations.length}
            </summary>
            <p>Roțile pe care le pregătiți pot fi folosite cu orice copil.</p>
            {state.configurations.length ? (
              <ul>
                {state.configurations.map((config) => {
                  const target = targets.find(
                    (t) => getTargetStorageKey("ro", t) === config.targetKey,
                  );
                  return (
                    <li key={config.id}>
                      <div>
                        <strong>{config.name}</strong>
                        <span>
                          {target?.label ?? config.targetKey} ·{" "}
                          {config.config.wheelWordCount} cuvinte
                        </span>
                      </div>
                      {target && (
                        <>
                          <Link
                            className="quiet-link"
                            href={`/ro/setup/${getTargetRouteSegment("ro", target)}`}
                          >
                            Editează roata
                          </Link>
                          {selected &&
                            !state.sessions.some(
                              (s) => s.childId === selected.id && !s.endedAt,
                            ) && (
                              <button
                                className="secondary-button"
                                type="button"
                                onClick={() => {
                                  setPrepared({
                                    childId: selected.id,
                                    target,
                                    config: config.config,
                                    words: preparePracticeWords(
                                      buildPracticeContent(target, words),
                                      config.config,
                                    ),
                                  });
                                  setPreviewOpen(true);
                                }}
                              >
                                Pregătește pentru {selected.nickname}
                              </button>
                            )}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>
                Nicio roată salvată încă. După ce alegeți cuvintele, salvați
                roata pentru a o folosi din nou, cu oricare dintre copii.
              </p>
            )}
          </details>
        )}
        {state && (
          <PracticeBackups
            state={state}
            onRestored={() => {
              setSelectedId(null);
              setPrepared(null);
              setPreviewOpen(false);
              void refresh();
            }}
          />
        )}
        <footer className="practice-footer">
          {state && (
            <label className="practice-sound-setting">
              <input
                type="checkbox"
                checked={state.preferences?.sound ?? false}
                disabled={busy}
                onChange={(event) => {
                  const sound = event.target.checked;
                  if (sound) unlockCelebrationSound();
                  void save(
                    (draft) => {
                      draft.preferences.sound = sound;
                    },
                    sound
                      ? "Sunet activat pentru sărbătoriri."
                      : "Sunet oprit.",
                  );
                }}
              />
              Sunet la sărbătoriri
            </label>
          )}
          <Link className="quiet-link" href="/ro/about?show=1">
            Prezentare și explicații
          </Link>
          <CreatorCredit locale="ro" />
        </footer>
      </div>
    </main>
  );
}

function Avatar({ option }: { option?: AvatarOption }) {
  return option ? (
    <Image
      className="practice-avatar"
      src={option.image}
      alt={option.alt}
      width={72}
      height={72}
      unoptimized
    />
  ) : null;
}
function message(reason: unknown) {
  return reason instanceof Error
    ? reason.message
    : "Nu putem salva acum. Încercați din nou.";
}

function ProfileEditor({
  profile,
  avatars,
  busy,
  revision,
  onCancel,
  onSave,
}: {
  profile: ChildProfile | null;
  avatars: AvatarOption[];
  busy: boolean;
  revision: number;
  onCancel: () => void;
  onSave: (
    input: {
      id?: string;
      nickname: string;
      avatar: string;
    },
    baseRevision: number,
  ) => Promise<void>;
}) {
  const [baseRevision] = useState(revision);
  const [nickname, setNickname] = useState(profile?.nickname ?? "");
  const [avatar, setAvatar] = useState(profile?.avatar ?? AVATAR_WORD_IDS[0]);
  function submit(event: FormEvent) {
    event.preventDefault();
    void onSave({ id: profile?.id, nickname, avatar }, baseRevision);
  }
  return (
    <form className="practice-form" onSubmit={submit}>
      <h2>{profile ? "Editează profilul" : "Adaugă un copil"}</h2>
      {baseRevision !== revision && (
        <p className="practice-alert" role="status">
          Datele s-au schimbat între timp. Păstrăm ce ai scris. Anulează și
          redeschide profilul pentru a vedea ultima versiune.
        </p>
      )}
      <label htmlFor="child-nickname">Numele din joc</label>
      <input
        id="child-nickname"
        name="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        required
        maxLength={40}
        autoComplete="off"
        autoFocus
        aria-describedby="nickname-help"
      />
      <p id="nickname-help">
        O poreclă sau un cod este suficient. De exemplu, Alex sau Copil 01.
      </p>
      <fieldset>
        <legend>Alegeți un prieten de joacă</legend>
        <div className="practice-avatar-picker">
          {avatars.map((a) => (
            <label key={a.id}>
              <input
                type="radio"
                name="avatar"
                value={a.id}
                checked={avatar === a.id}
                onChange={() => setAvatar(a.id)}
              />
              <Avatar option={a} />
              <span>{a.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="practice-form-actions">
        <button
          className="spin-button"
          disabled={busy || !nickname.trim()}
          type="submit"
        >
          {busy ? "Se salvează..." : "Salvează profilul"}
        </button>
        <button
          className="secondary-button"
          disabled={busy}
          type="button"
          onClick={onCancel}
        >
          Anulează
        </button>
      </div>
    </form>
  );
}

function GoalEditor({
  busy,
  onSave,
}: {
  busy: boolean;
  onSave: (label: string, pace: "frequent" | "standard") => Promise<boolean>;
}) {
  const [label, setLabel] = useState("S");
  const [pace, setPace] = useState<"frequent" | "standard">("standard");
  return (
    <form
      className="practice-goal-form"
      onSubmit={(event) => {
        event.preventDefault();
        void onSave(label, pace);
      }}
    >
      <label>
        Sunet sau grup
        <select value={label} onChange={(e) => setLabel(e.target.value)}>
          {GOAL_LABELS.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </label>
      <label>
        Ritmul recompenselor
        <select
          value={pace}
          onChange={(e) => setPace(e.target.value as "frequent" | "standard")}
        >
          <option value="standard">Standard</option>
          <option value="frequent">Frecvent</option>
        </select>
      </label>
      <button className="secondary-button" disabled={busy} type="submit">
        Salvează sunetul
      </button>
    </form>
  );
}
