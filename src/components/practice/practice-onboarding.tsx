"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Medal } from "./medal";
import type { AvatarOption } from "./profile-workspace";
import type { PreparedPractice } from "./prepare-practice";
import {
  saveGoal,
  saveProfile,
  type LocalPracticeState,
} from "@/practice/model";
import type { ContentWord, GameplayTarget } from "@/content/types";
import {
  buildPracticeContent,
  preparePracticeWords,
} from "@/practice/preparation";
import {
  createDefaultWheelSetupConfig,
  getModeWords,
} from "@/game/wheel-setup";
import { attributePracticeGoals } from "@/content/sound-mapping";

const DRAFT_KEY = "word-wheel.onboarding.v2";
const LABELS =
  "A Ă Â B C D E F G H I Î J K L M N O P Q R S Ș T Ț U V W X Y Z CE CI GE GI CHE CHI GHE GHI".split(
    " ",
  );
const COMMON = ["S", "Ș", "R", "L", "F", "V", "T", "Ț"];
const PAGES = ["Bun venit", "Copil", "Sunet", "Cuvinte", "Joacă"];
type Draft = {
  step: number;
  childId: string;
  targetId: string;
  wordIds: string[];
};

export function clearOnboardingDraft() {
  try {
    sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* Optional per-tab recovery. */
  }
}
function readDraft(
  state: LocalPracticeState,
  targets: GameplayTarget[],
  words: ContentWord[],
): Draft | null {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw || raw.length > 10000) return null;
    const d = JSON.parse(raw);
    if (
      d.version !== 2 ||
      !Number.isInteger(d.step) ||
      d.step < 0 ||
      d.step > 4 ||
      typeof d.childId !== "string" ||
      !state.profiles.some((p) => p.id === d.childId) ||
      !targets.some((t) => t.id === d.targetId) ||
      !Array.isArray(d.wordIds) ||
      d.wordIds.length > 8 ||
      !d.wordIds.every((id: unknown) => typeof id === "string") ||
      new Set(d.wordIds).size !== d.wordIds.length
    )
      return null;
    if (d.step >= 3) {
      const target = targets.find((t) => t.id === d.targetId)!;
      const content = buildPracticeContent(target, words);
      const config = createDefaultWheelSetupConfig({ content, locale: "ro" });
      const ids = new Set(
        getModeWords({ content, locale: "ro", mode: config.mode }).map(
          (w) => w.id,
        ),
      );
      if (!d.wordIds.length || d.wordIds.some((id: string) => !ids.has(id)))
        return { ...d, step: 3, wordIds: [] };
    }
    return d;
  } catch {
    return null;
  }
}

export function PracticeOnboarding({
  state,
  avatars,
  words,
  targets,
  initialChildId,
  busy,
  error,
  onSave,
  onExit,
  onStart,
  onResume,
}: {
  state: LocalPracticeState;
  avatars: AvatarOption[];
  words: ContentWord[];
  targets: GameplayTarget[];
  initialChildId: string | null;
  busy: boolean;
  error: string | null;
  onSave: (
    command: (draft: LocalPracticeState) => void,
    success: string,
  ) => Promise<boolean>;
  onExit: (childId: string | null) => void;
  onStart: (prepared: PreparedPractice) => Promise<boolean>;
  onResume: (sessionId: string, childId: string) => Promise<boolean>;
}) {
  const [restored] = useState(() => readDraft(state, targets, words));
  const [step, setStep] = useState(restored?.step ?? 0);
  const [childId, setChildId] = useState(
    restored?.childId ?? initialChildId ?? "",
  );
  const child = state.profiles.find((p) => p.id === childId);
  const page = step > 1 && !child ? 1 : step;
  const [creating, setCreating] = useState(!state.profiles.length);
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(avatars[0].id);
  const [goal, setGoal] = useState(
    child?.goals.find((g) => g.active)?.label ?? "",
  );
  const [targetId, setTargetId] = useState(
    restored?.targetId ??
      targets.find((t) => t.label === child?.goals.find((g) => g.active)?.label)
        ?.id ??
      targets.find((t) => t.label === "S")!.id,
  );
  const target = targets.find((t) => t.id === targetId) ?? targets[0];
  function makeWheel(ids?: string[], forTarget = target): PreparedPractice {
    const content = buildPracticeContent(forTarget, words);
    const base = createDefaultWheelSetupConfig({ content, locale: "ro" });
    const eligible = getModeWords({ content, locale: "ro", mode: base.mode });
    const cached = ids?.map((id) => eligible.find((w) => w.id === id));
    const selected =
      cached?.length && cached.every(Boolean)
        ? (cached as ContentWord[])
        : preparePracticeWords(content, { ...base, wheelWordCount: 8 });
    return {
      childId,
      target: forTarget,
      words: selected,
      config: {
        ...base,
        wheelWordCount: selected.length,
        wordSelectionMode: "custom",
        selectedWordIds: selected.map((w) => w.id),
      },
    };
  }
  const [prepared, setPrepared] = useState<PreparedPractice | null>(() =>
    restored && restored.step >= 3 ? makeWheel(restored.wordIds) : null,
  );
  const heading = useRef<HTMLHeadingElement>(null);
  const scroller = useRef<HTMLElement>(null);
  const submitting = useRef(false);
  const navigation = useRef({ busy, prepared });
  useEffect(() => {
    navigation.current = { busy, prepared };
  }, [busy, prepared]);
  function go(next: number) {
    window.history.pushState(
      { ...window.history.state, wordWheelGuide: next },
      "",
    );
    setStep(next);
  }
  useEffect(() => {
    window.history.replaceState(
      { ...window.history.state, wordWheelGuide: restored?.step ?? 0 },
      "",
    );
    const back = (event: PopStateEvent) => {
      const next = event.state?.wordWheelGuide;
      if (
        navigation.current.busy ||
        !Number.isInteger(next) ||
        next < 0 ||
        next > 4
      )
        return;
      setStep(next >= 3 && !navigation.current.prepared ? 2 : next);
    };
    window.addEventListener("popstate", back);
    return () => window.removeEventListener("popstate", back);
  }, [restored]);
  const active = state.sessions.find(
    (s) => s.childId === childId && !s.endedAt,
  );
  const chosenAvatar =
    avatars.find((a) => a.id === child?.avatar) ?? avatars[0];
  const hasTurns = state.turns.some((t) => t.childId === childId);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
    heading.current?.focus({ preventScroll: true });
  }, [page]);
  useEffect(() => {
    try {
      sessionStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({
          version: 2,
          step: page,
          childId,
          targetId,
          wordIds:
            prepared?.target.id === targetId
              ? prepared.words.map((w) => w.id)
              : [],
        }),
      );
    } catch {
      /* Canonical saved profiles remain usable without this cache. */
    }
  }, [page, childId, targetId, prepared]);

  async function move(next: number) {
    if (
      await onSave((d) => {
        d.preferences.onboardingCompleted = false;
        d.preferences.onboardingStep = next;
      }, "")
    )
      go(next);
  }
  function chooseChild(id: string) {
    const selected = state.profiles.find((p) => p.id === id)!;
    setChildId(id);
    setGoal(selected.goals.find((g) => g.active)?.label ?? "");
    const match = targets.find(
      (t) => t.label === selected.goals.find((g) => g.active)?.label,
    );
    if (match) setTargetId(match.id);
    setPrepared(null);
  }
  async function chooseSound(skip = false) {
    if (!child) return;
    const label = skip ? "" : goal;
    if (
      await onSave((d) => {
        if (label)
          saveGoal(
            d,
            child.id,
            label,
            child.goals.find((g) => g.label === label)?.pace ?? "standard",
          );
        d.preferences.onboardingCompleted = false;
        d.preferences.onboardingStep = 3;
      }, "")
    ) {
      const match = targets.find((t) => t.label === label);
      if (match) setTargetId(match.id);
      setPrepared(makeWheel(undefined, match ?? target));
      go(3);
    }
  }
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (busy || submitting.current || disabled) return;
    submitting.current = true;
    try {
      if (page === 0) await move(1);
      if (page === 1) {
        if (active && !creating && child) {
          if (await onResume(active.id, child.id)) clearOnboardingDraft();
          return;
        }
        let id = childId;
        if (
          await onSave((d) => {
            if (creating) {
              saveProfile(d, { nickname, avatar });
              id = d.profiles[d.profiles.length - 1].id;
            } else if (!d.profiles.some((p) => p.id === id))
              throw new Error("Alege un copil pentru această joacă.");
            d.preferences.onboardingCompleted = false;
            d.preferences.onboardingStep = 2;
          }, "")
        ) {
          setChildId(id);
          setCreating(false);
          setPrepared(null);
          go(2);
        }
      }
      if (page === 2 && goal) await chooseSound();
      if (page === 3) {
        const wheel =
          prepared?.childId === childId && prepared.target.id === targetId
            ? prepared
            : makeWheel();
        if (
          wheel.words.length &&
          (await onSave((d) => {
            d.preferences.onboardingStep = 4;
          }, ""))
        ) {
          setPrepared(wheel);
          go(4);
        }
      }
      if (page === 4 && child && prepared) {
        const ok = active
          ? await onResume(active.id, child.id)
          : await onStart({ ...prepared, childId: child.id });
        if (ok) clearOnboardingDraft();
      }
    } finally {
      submitting.current = false;
    }
  }
  const wheel =
    page >= 3
      ? prepared?.childId === childId && prepared.target.id === targetId
        ? prepared
        : null
      : null;
  const unknown =
    wheel &&
    child &&
    wheel.words.some((w) =>
      attributePracticeGoals(
        w.id,
        child.goals.filter((g) => g.active),
      ).some((g) => g.matched === null),
    );
  const matchingGoals =
    child?.goals
      .filter(
        (g) =>
          g.active &&
          wheel?.words.some(
            (w) => attributePracticeGoals(w.id, [g])[0]?.matched === true,
          ),
      )
      .map((g) => g.label) ?? [];
  const primary = [
    "Pregătim prima joacă",
    creating
      ? "Creează profilul"
      : active
        ? "Reluăm roata începută"
        : `Continuă${child ? ` cu ${child.nickname}` : ""}`,
    goal ? `Continuă cu ${goal}` : "Alege un sunet",
    "Roata e gata",
    active ? "Reluăm roata începută" : "Să începem joaca",
  ][page];
  const disabled =
    busy ||
    (page === 1 && (creating ? !nickname.trim() : !child)) ||
    (page === 2 && !goal) ||
    (page >= 3 && !wheel?.words.length);

  return (
    <main className="onboarding-shell" ref={scroller}>
      <form className="onboarding-frame" onSubmit={submit}>
        <header className="onboarding-header">
          <span className="onboarding-brand">
            Roata cuvintelor<span aria-hidden="true">.</span>
          </span>
          <button
            className="quiet-button"
            type="button"
            disabled={busy}
            onClick={() => onExit(child?.id ?? null)}
          >
            Merg la profiluri
          </button>
        </header>
        <nav
          className="onboarding-progress"
          aria-label={`Pregătirea primei roți: pasul ${page + 1} din 5, ${PAGES[page]}`}
        >
          <div className="onboarding-bars" aria-hidden="true">
            {PAGES.map((label, i) => (
              <span key={label} data-done={i <= page} />
            ))}
          </div>
          <div className="onboarding-wayfinding">
            {page > 0 ? (
              <button
                type="button"
                className="quiet-button"
                disabled={busy}
                onClick={() => void move(page - 1)}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 12H4m6-6-6 6 6 6" />
                </svg>{" "}
                Înapoi
              </button>
            ) : (
              <span />
            )}
            <span>{page + 1} din 5</span>
          </div>
        </nav>
        <section
          className={`onboarding-page onboarding-page-${page}`}
          aria-labelledby="onboarding-title"
        >
          {page === 0 && (
            <div className="onboarding-animal-scene" aria-hidden="true">
              {avatars.slice(0, 3).map((a) => (
                <span key={a.id}>
                  <Image
                    src={a.image}
                    alt=""
                    width={160}
                    height={160}
                    unoptimized
                  />
                </span>
              ))}
            </div>
          )}
          {page === 4 && (
            <div className="onboarding-handover" aria-hidden="true">
              <Image
                src={chosenAvatar.image}
                alt=""
                width={112}
                height={112}
                unoptimized
              />
              <Medal size={72} />
            </div>
          )}
          <div className="onboarding-copy">
            <h1 ref={heading} id="onboarding-title" tabIndex={-1}>
              {
                [
                  <>
                    O roată mică.
                    <br />
                    Un început frumos.
                  </>,
                  "Cu cine ne jucăm?",
                  `Ce exersăm${child ? ` cu ${child.nickname}` : ""}?`,
                  "Câteva cuvinte, pentru început.",
                  "Acum e rândul copilului.",
                ][page]
              }
            </h1>
            <p>
              {
                [
                  "Tu pregătești cuvintele. Copilul învârte roata, exersează și adună medalii. Hai să pregătim prima joacă împreună.",
                  creating
                    ? "O poreclă și un animal preferat. Atât ne trebuie pentru primul profil."
                    : "Alege copilul pentru care pregătim roata.",
                  "Alege un sunet la care vreți să lucrați. Poți adăuga altele mai târziu.",
                  `Privește cuvintele de pe roata pentru ${child?.nickname ?? "copil"}.`,
                  `Roata pentru ${child?.nickname ?? "copil"} este pregătită. Voi dați ritmul, fără grabă.`,
                ][page]
              }
            </p>
          </div>
          {page === 0 && (
            <p className="onboarding-reassurance">
              Fără cont. Profilurile se păstrează în acest browser.
            </p>
          )}
          {page === 1 && (
            <fieldset className="onboarding-fields" disabled={busy}>
              {creating ? (
                <>
                  <label className="onboarding-name">
                    Cum îi spunem în joc?
                    <input
                      autoComplete="off"
                      enterKeyHint="next"
                      maxLength={40}
                      placeholder="De exemplu, Alex"
                      required
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </label>
                  <fieldset className="onboarding-avatar-picker">
                    <legend>Alege un prieten de joacă</legend>
                    <div>
                      {avatars.map((a) => (
                        <label key={a.id}>
                          <input
                            type="radio"
                            name="onboarding-avatar"
                            value={a.id}
                            checked={avatar === a.id}
                            onChange={() => setAvatar(a.id)}
                          />
                          <span>
                            <Image
                              src={a.image}
                              alt=""
                              width={72}
                              height={72}
                              unoptimized
                            />
                            <strong>{a.label}</strong>
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  {state.profiles.length > 0 && (
                    <button
                      type="button"
                      className="quiet-button"
                      onClick={() => setCreating(false)}
                    >
                      Aleg un profil existent
                    </button>
                  )}
                </>
              ) : (
                <>
                  <div className="onboarding-child-picker">
                    {state.profiles.map((p) => (
                      <label key={p.id}>
                        <input
                          type="radio"
                          name="onboarding-child"
                          checked={childId === p.id}
                          onChange={() => chooseChild(p.id)}
                        />
                        <span>
                          <Image
                            src={avatars.find((a) => a.id === p.avatar)!.image}
                            alt=""
                            width={56}
                            height={56}
                            unoptimized
                          />
                          <strong>{p.nickname}</strong>
                        </span>
                      </label>
                    ))}
                  </div>
                  {active && (
                    <p className="onboarding-small">
                      Ai deja o roată începută pentru {child?.nickname}. Poți
                      continua de unde ați rămas.
                    </p>
                  )}
                  <button
                    className="quiet-button"
                    type="button"
                    onClick={() => {
                      setCreating(true);
                      setNickname("");
                      setGoal("");
                    }}
                  >
                    Adaugă alt copil
                  </button>
                </>
              )}
            </fieldset>
          )}
          {page === 2 && (
            <fieldset className="onboarding-fields" disabled={busy}>
              <legend className="sr-only">Sunetul de exersat</legend>
              <div className="onboarding-sounds">
                {COMMON.map((label) => (
                  <label key={label}>
                    <input
                      type="radio"
                      name="onboarding-sound"
                      checked={goal === label}
                      onChange={() => setGoal(label)}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              <label className="onboarding-other-sound">
                Alt sunet sau grup
                <select
                  value={COMMON.includes(goal) ? "" : goal}
                  onChange={(e) => setGoal(e.target.value)}
                >
                  <option value="">Alege din listă</option>
                  {LABELS.filter((g) => !COMMON.includes(g)).map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                className="quiet-button"
                onClick={() => void chooseSound(true)}
              >
                Aleg sunetul mai târziu
              </button>
            </fieldset>
          )}
          {page === 3 && (
            <div className="onboarding-wheel-setup">
              <label>
                Roata de început
                <select
                  disabled={busy}
                  value={targetId}
                  onChange={(e) => {
                    setTargetId(e.target.value);
                    setPrepared(
                      makeWheel(
                        undefined,
                        targets.find((t) => t.id === e.target.value)!,
                      ),
                    );
                  }}
                >
                  {targets.map((t) => (
                    <option key={t.id} value={t.id}>
                      Cuvinte cu {t.label}
                    </option>
                  ))}
                </select>
              </label>
              <ul className="onboarding-words">
                {wheel?.words.map((w) => (
                  <li key={w.id}>
                    <Image
                      src={w.image}
                      alt=""
                      width={80}
                      height={80}
                      unoptimized
                    />
                    <span>{w.display}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="quiet-button"
                disabled={busy}
                onClick={() => setPrepared(makeWheel())}
              >
                Alege alte cuvinte
              </button>
            </div>
          )}
          {page === 4 && child && (
            <div className="onboarding-play-notes">
              <ol>
                <li>
                  <strong>Învârte și exersați cuvântul.</strong>
                  <span>Apoi păstrează-l pe roată sau scoate-l.</span>
                </li>
                <li>
                  <strong>
                    {hasTurns
                      ? "Fiecare cuvânt închis contează."
                      : "Primul cuvânt aduce prima medalie."}
                  </strong>
                  <span>
                    Medaliile răsplătesc exersarea, nu pronunția corectă.
                  </span>
                </li>
              </ol>
              {matchingGoals.length > 0 && (
                <p className="onboarding-small">
                  Roata poate contribui la sunetele {matchingGoals.join(", ")},
                  pentru cuvintele verificate.
                </p>
              )}
              {!unknown &&
                child.goals.some((g) => g.active) &&
                !matchingGoals.length && (
                  <p className="onboarding-small">
                    Această roată contează pentru exersarea generală, fără
                    cuvinte verificate pentru sunetele alese.
                  </p>
                )}
              {unknown && (
                <p className="onboarding-small">
                  Numărăm cuvintele exersate. Totalurile pe sunete așteaptă
                  verificarea listei.
                </p>
              )}
              {active && (
                <p className="onboarding-small">
                  Există deja o roată începută pentru acest copil. Reluăm acea
                  roată, cu istoricul păstrat.
                </p>
              )}
            </div>
          )}
        </section>
        <footer className="onboarding-actions">
          {page === 3 && (
            <p className="onboarding-wheel-hint">
              Poți pregăti și salva roți personalizate din profil, după această
              primă joacă.
            </p>
          )}
          {error && (
            <p className="onboarding-error" role="alert">
              {error} Încearcă din nou; nu am trecut la pasul următor.
            </p>
          )}
          <button
            className="spin-button onboarding-next"
            type="submit"
            disabled={disabled}
          >
            <span>{busy ? "Se salvează…" : primary}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M4 12h15m-6-6 6 6-6 6" />
            </svg>
          </button>
          {page === 0 && (
            <Link className="quiet-link" href="/ro/demo">
              Vreau întâi să încerc jocul
            </Link>
          )}
        </footer>
      </form>
    </main>
  );
}
