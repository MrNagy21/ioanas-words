"use client";

import { ProfilePrivacyNotice } from "@/components/legal-links";
import { AppFooter } from "@/components/app-footer";
import { Brand } from "@/components/brand";
import Image from "next/image";
import Link from "next/link";
import { BackButton } from "./back-button";
import {
  pushPracticeLocation,
  replacePracticeLocation,
  returnToPracticeLocation,
} from "./navigation";
import {
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  AVATAR_WORD_IDS,
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
import { ProfilePanel, TaskRow } from "@/components/practice/profile-panel";
import { PracticeBackups } from "@/components/practice/practice-backups";
import {
  PracticeOnboarding,
  clearOnboardingDraft,
} from "@/components/practice/practice-onboarding";
import { unlockGameSound, stopGameSounds } from "@/components/game-sound";
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
  const [utility, setUtility] = useState<"library" | "settings" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const pickerHeading = useRef<HTMLHeadingElement>(null);
  const selected = state?.profiles.find((p) => p.id === selectedId) ?? null;

  useEffect(() => {
    if (!utility) return;
    document.querySelector<HTMLElement>(".practice-shell")?.scrollTo(0, 0);
    document.querySelector<HTMLElement>(".task-page h1")?.focus();
  }, [utility]);

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
    const unlock = () => unlockGameSound();
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [state?.preferences?.sound]);

  async function changeSound(enabled: boolean) {
    if (enabled) unlockGameSound();
    else stopGameSounds();
    await save(
      (draft) => {
        draft.preferences.sound = enabled;
      },
      enabled
        ? "Sunete activate pentru roată, cuvinte și sărbătoriri."
        : "Sunet oprit.",
    );
  }

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

  function navigateWorkspace(
    childId: string | null,
    nextUtility: "library" | "settings" | null = null,
    nextEditor: "new" | "edit" | null = null,
    resetProfile = false,
  ) {
    pushPracticeLocation({
      wordWheelWorkspace: { childId, utility: nextUtility, editor: nextEditor },
      ...(resetProfile
        ? { wordWheelProfile: childId ? { childId, screen: "home" } : null }
        : {}),
    });
    setSelectedId(childId);
    setUtility(nextUtility);
    setEditor(nextEditor);
    setNotice("");
  }
  function select(id: string) {
    navigateWorkspace(id, null, null, true);
  }
  function returnToWorkspace(childId: string | null) {
    returnToPracticeLocation(
      (entry) =>
        entry.wordWheelWorkspace?.childId === childId &&
        !entry.wordWheelWorkspace.utility &&
        !entry.wordWheelWorkspace.editor,
      {
        wordWheelWorkspace: { childId, utility: null, editor: null },
        ...(childId ? {} : { wordWheelProfile: null }),
      },
    );
  }
  useEffect(() => {
    if (!window.history.state?.wordWheelWorkspace)
      replacePracticeLocation({
        wordWheelWorkspace: { childId: null, utility: null, editor: null },
      });
    const pop = () => {
      const workspace = window.history.state?.wordWheelWorkspace;
      setSelectedId(workspace?.childId ?? null);
      setUtility(workspace?.utility ?? null);
      setEditor(workspace?.editor ?? null);
      setNotice("");
    };
    pop();
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);
  useEffect(() => {
    document.querySelector<HTMLElement>(".practice-shell")?.scrollTo(0, 0);
    if (!selectedId && !editor && !utility)
      pickerHeading.current?.focus({ preventScroll: true });
    else if (!editor && !utility)
      document
        .querySelector<HTMLElement>(
          ".practice-columns:not([hidden]) .profile-panel h1",
        )
        ?.focus({ preventScroll: true });
  }, [selectedId, editor, utility]);

  const childSummaries = useMemo(() => {
    const counts = new Map<string, { words: number; medals: number }>();
    for (const child of state?.profiles ?? [])
      counts.set(child.id, { words: 0, medals: 0 });
    for (const turn of state?.turns ?? []) {
      const item = counts.get(turn.childId);
      if (item) item.words++;
    }
    for (const award of state?.awards ?? []) {
      const item = counts.get(award.childId);
      if (item) item.medals++;
    }
    return counts;
  }, [state]);

  const celebratingChild = state?.profiles.find((p) => p.id === celebratingId);
  if (state && celebratingChild)
    return (
      <ParticipationCelebration
        awards={state.awards.filter(
          (a) => a.childId === celebratingId && !a.presented,
        )}
        childName={celebratingChild.nickname}
        soundControl={{
          enabled: state.preferences.sound,
          onChange: changeSound,
          disabled: busy,
        }}
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
              replacePracticeLocation({
                wordWheelWorkspace: { childId, utility: null, editor: null },
                wordWheelProfile: childId ? { childId, screen: "home" } : null,
              });
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
            replacePracticeLocation({
              wordWheelWorkspace: { childId, utility: null, editor: null },
              wordWheelProfile: { childId, screen: "home" },
            });
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
            replacePracticeLocation({
              wordWheelWorkspace: {
                childId: wheel.childId,
                utility: null,
                editor: null,
              },
              wordWheelProfile: { childId: wheel.childId, screen: "home" },
            });
            setSelectedId(wheel.childId);
            setActiveSessionId(id);
          }
          return ok;
        }}
      />
    );
  }

  return (
    <main
      className="practice-shell practice-workspace"
      data-focused={!!selected || !!editor || !!utility}
    >
      <div className="practice-frame">
        <header className="practice-header">
          <Link
            href="/ro/practice"
            className="practice-brand"
            aria-label="Vorbini · Toți copiii"
            onClick={(event) => {
              event.preventDefault();
              returnToWorkspace(null);
            }}
          >
            <Brand />
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
        <div
          className="practice-intro"
          hidden={!!utility || !!selected || !!editor}
        >
          <h1 ref={pickerHeading} tabIndex={-1}>
            Copii
          </h1>
          <p>
            Cu cine ne jucăm astăzi? Alegeți un copil ca să pregătiți o roată.
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
            hidden={!!utility}
          >
            <aside className="practice-profiles" aria-label="Profiluri copii">
              <button
                className="spin-button"
                type="button"
                disabled={busy}
                onClick={() => navigateWorkspace(null, null, "new")}
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
                      <span className="practice-profile-copy">
                        <strong>{profile.nickname}</strong>
                        <span className="practice-profile-totals">
                          <span>
                            {childSummaries.get(profile.id)?.words ?? 0}{" "}
                            {childSummaries.get(profile.id)?.words === 1
                              ? "cuvânt exersat"
                              : "cuvinte exersate"}
                          </span>
                          <span>
                            {childSummaries.get(profile.id)?.medals ?? 0}{" "}
                            {childSummaries.get(profile.id)?.medals === 1
                              ? "medalie"
                              : "medalii"}
                          </span>
                        </span>
                        <small>
                          {profile.goals.filter((g) => g.active).length
                            ? `Urmărim: ${profile.goals
                                .filter((g) => g.active)
                                .map((g) => g.label)
                                .join(", ")}`
                            : "Sunetele se adaugă când începeți o roată"}
                        </small>
                        {state.sessions.some(
                          (session) =>
                            session.childId === profile.id && !session.endedAt,
                        ) && (
                          <small className="practice-resume-hint">
                            O roată vă așteaptă · Reia exersarea
                          </small>
                        )}
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
              {editor && (
                <BackButton
                  className="task-back"
                  onClick={() =>
                    returnToWorkspace(editor === "edit" ? selectedId : null)
                  }
                >
                  {editor === "edit" ? "Setările profilului" : "Toți copiii"}
                </BackButton>
              )}
              {editor ? (
                <ProfileEditor
                  key={editor + (selected?.id ?? "new")}
                  profile={editor === "edit" ? selected : null}
                  avatars={avatars}
                  busy={busy}
                  revision={state.revision}
                  onCancel={() =>
                    returnToWorkspace(editor === "edit" ? selectedId : null)
                  }
                  onSave={async (input, baseRevision) => {
                    const before = new Set(state.profiles.map((p) => p.id));
                    const ok = await save(
                      (draft) => saveProfile(draft, input),
                      "Profil salvat pe acest dispozitiv.",
                      baseRevision,
                    );
                    if (ok) {
                      const current = await readPracticeState();
                      if (input.id) returnToWorkspace(input.id);
                      else {
                        const created = current.profiles.find(
                          (p) => !before.has(p.id),
                        );
                        if (created) {
                          replacePracticeLocation({
                            wordWheelWorkspace: {
                              childId: created.id,
                              utility: null,
                              editor: null,
                            },
                            wordWheelProfile: {
                              childId: created.id,
                              screen: "home",
                            },
                          });
                          setSelectedId(created.id);
                          setEditor(null);
                          setUtility(null);
                        }
                      }
                    }
                  }}
                />
              ) : selected ? (
                <ProfilePanel
                  key={selected.id}
                  child={selected}
                  state={state}
                  avatars={avatars}
                  busy={busy}
                  onSave={save}
                  onBack={() => returnToWorkspace(null)}
                  onEdit={() => navigateWorkspace(selectedId, null, "edit")}
                  onPrepare={() => setPreparingId(selected.id)}
                  onResume={(id) => setActiveSessionId(id)}
                  onPrepared={
                    prepared?.childId === selected.id
                      ? () => setPreviewOpen(true)
                      : undefined
                  }
                  onLibrary={() => navigateWorkspace(selectedId, "library")}
                  onBackup={() => navigateWorkspace(selectedId, "settings")}
                  onCelebrateNow={() => setCelebratingId(selected.id)}
                  onNavigate={() => setNotice("")}
                />
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
        {state && utility && (
          <BackButton
            className="task-back"
            onClick={() => returnToWorkspace(selectedId)}
          >
            {selected
              ? utility === "settings"
                ? "Setările profilului"
                : "Înapoi la profil"
              : "Toți copiii"}
          </BackButton>
        )}
        {state && !selected && !editor && !utility && (
          <nav className="task-menu" aria-label="Instrumente pentru adult">
            <TaskRow
              title="Roțile mele"
              description={`${state.configurations.length} configurații pentru orice copil`}
              onClick={() => navigateWorkspace(null, "library")}
            />
            <TaskRow
              title="Date și setări"
              description="Copii de siguranță, restaurare și sunet"
              onClick={() => navigateWorkspace(null, "settings")}
            />
          </nav>
        )}
        {state && utility === "library" && (
          <section className="practice-library task-page">
            <h1 tabIndex={-1}>Roțile mele salvate</h1>
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
          </section>
        )}
        {state && utility === "settings" && (
          <PracticeBackups
            initialScope={selected?.id}
            state={state}
            onRestored={() => {
              setNotice("Copia a fost restaurată.");
              setSelectedId(null);
              setUtility(null);
              setPrepared(null);
              setPreviewOpen(false);
              void refresh();
            }}
          />
        )}
        {state && utility === "settings" && (
          <label className="practice-sound-setting">
            <input
              type="checkbox"
              checked={state.preferences?.sound ?? false}
              disabled={busy}
              onChange={(event) => {
                void changeSound(event.target.checked);
              }}
            />
            Sunete pentru roată, cuvinte și sărbătoriri
          </label>
        )}
        <AppFooter newTab />
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
      {!profile && <ProfilePrivacyNotice />}
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
