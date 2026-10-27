"use client";

import Image from "next/image";
import { BackButton } from "./back-button";
import {
  pushPracticeLocation,
  returnToPracticeLocation,
  isProfileLocation,
} from "./navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { AvatarOption } from "./profile-workspace";
import { PracticeProgress } from "./practice-progress";
import { PronunciationPanel } from "./pronunciation-panel";
import {
  removeProfile,
  saveGoal,
  type ChildProfile,
  type LocalPracticeState,
} from "@/practice/model";
import { goalProgress } from "@/practice/rewards";
import { PRONUNCIATION_LABELS } from "@/practice/observations";

export type SavePractice = (
  command: (draft: LocalPracticeState) => void,
  message: string,
) => Promise<boolean>;
type Screen =
  | "home"
  | "sounds"
  | "add-sound"
  | "sound"
  | "verified"
  | "pronunciation"
  | "activity"
  | "awards"
  | "settings";
const SCREENS: Screen[] = [
  "home",
  "sounds",
  "add-sound",
  "sound",
  "verified",
  "pronunciation",
  "activity",
  "awards",
  "settings",
];
const LETTERS =
  "A Ă Â B C D E F G H I Î J K L M N O P Q R S Ș T Ț U V W X Y Z".split(" ");
const GROUPS = "CE CI GE GI CHE CHI GHE GHI".split(" ");

export function TaskRow({
  title,
  description,
  onClick,
  leading,
}: {
  title: string;
  description: string;
  onClick: () => void;
  leading?: ReactNode;
}) {
  return (
    <button type="button" className="task-row" onClick={onClick}>
      {leading && (
        <span className="task-row-leading" aria-hidden="true">
          {leading}
        </span>
      )}
      <span className="task-row-copy">
        <strong>{title}</strong>
        <span>{description}</span>
      </span>
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="m9 5 7 7-7 7" />
      </svg>
    </button>
  );
}

export function ProfilePanel({
  child,
  state,
  avatars,
  busy,
  onSave,
  onBack,
  onEdit,
  onPrepare,
  onResume,
  onPrepared,
  onLibrary,
  onBackup,
  onCelebrateNow,
  onNavigate,
}: {
  child: ChildProfile;
  state: LocalPracticeState;
  avatars: AvatarOption[];
  busy: boolean;
  onSave: SavePractice;
  onBack: () => void;
  onEdit: () => void;
  onPrepare: () => void;
  onResume: (id: string) => void;
  onPrepared?: () => void;
  onLibrary: () => void;
  onBackup: () => void;
  onCelebrateNow: () => void;
  onNavigate: () => void;
}) {
  const [location, setLocation] = useState<{ screen: Screen; goalId?: string }>(
    () => {
      const saved =
        typeof window !== "undefined"
          ? window.history.state?.wordWheelProfile
          : null;
      return saved?.childId === child.id && SCREENS.includes(saved.screen)
        ? saved
        : { screen: "home" };
    },
  );
  const [confirmDelete, setConfirmDelete] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { screen, goalId } = location;
  const goal = child.goals.find((g) => g.id === goalId);
  function navigate(next: Screen, id?: string) {
    onNavigate();
    const nextLocation = { screen: next, goalId: id };
    pushPracticeLocation({
      wordWheelProfile: { ...nextLocation, childId: child.id },
    });
    setLocation(nextLocation);
    setConfirmDelete(false);
  }
  useEffect(() => {
    if (window.history.state?.wordWheelProfile?.childId !== child.id) {
      window.history.replaceState(
        {
          ...window.history.state,
          wordWheelProfile: { childId: child.id, screen: "home" },
        },
        "",
      );
    }
    const pop = () => {
      const next = window.history.state?.wordWheelProfile;
      setLocation(
        next?.childId === child.id && SCREENS.includes(next.screen)
          ? next
          : { screen: "home" },
      );
      setConfirmDelete(false);
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, [child.id]);
  useEffect(() => {
    document.querySelector<HTMLElement>(".practice-shell")?.scrollTo(0, 0);
    titleRef.current?.focus({ preventScroll: true });
  }, [screen, goalId]);
  const active = child.goals.filter((g) => g.active);
  const turns = state.turns.filter((t) => t.childId === child.id);
  const awards = state.awards.filter((a) => a.childId === child.id);
  const observations = state.observations.filter((o) => o.childId === child.id);
  const session = state.sessions.find(
    (s) => s.childId === child.id && !s.endedAt,
  );
  const avatar = avatars.find((a) => a.id === child.avatar);
  const titles: Record<Screen, string> = {
    home: child.nickname,
    sounds: "Sunete urmărite",
    "add-sound": "Adaugă un sunet",
    sound: `Sunetul ${goal?.label ?? "ales"}`,
    verified: `Sunet și poziții · ${goal?.label ?? ""}`,
    pronunciation: "Pronunție",
    activity: "Activitate",
    awards: "Medalii",
    settings: "Setările profilului",
  };
  const parent =
    screen === "add-sound" || screen === "sound"
      ? "sounds"
      : screen === "verified"
        ? "sound"
        : "home";
  return (
    <div className="profile-panel" data-screen={screen}>
      <BackButton
        className="task-back"
        onClick={() => {
          onNavigate();
          if (screen === "home") onBack();
          else
            returnToPracticeLocation(
              (entry) =>
                isProfileLocation(entry, child.id, parent) &&
                (parent !== "sound" ||
                  entry.wordWheelProfile?.goalId === goalId),
              {
                wordWheelProfile: { childId: child.id, screen: parent, goalId },
              },
            );
        }}
      >
        {screen === "home"
          ? "Toți copiii"
          : parent === "home"
            ? "Înapoi la profil"
            : parent === "sounds"
              ? "Sunete urmărite"
              : `Înapoi la ${goal?.label ?? "sunet"}`}
      </BackButton>
      {screen !== "pronunciation" && (
        <header
          className={`task-heading ${screen === "home" ? "task-profile-heading" : ""}`}
        >
          {screen === "home" && avatar && (
            <Image
              src={avatar.image}
              alt={avatar.alt}
              width={64}
              height={64}
              unoptimized
            />
          )}
          <div>
            <h1 ref={titleRef} tabIndex={-1}>
              {titles[screen]}
            </h1>
            {screen !== "home" && <p>{child.nickname}</p>}
            {screen === "home" && (
              <p>
                {turns.length}{" "}
                {turns.length === 1 ? "cuvânt exersat" : "cuvinte exersate"} ·{" "}
                {awards.length} {awards.length === 1 ? "medalie" : "medalii"}
              </p>
            )}
          </div>
        </header>
      )}
      {screen === "home" && (
        <>
          <div className="task-start">
            <button
              type="button"
              className="spin-button"
              onClick={() => (session ? onResume(session.id) : onPrepare())}
            >
              {session ? "Reia exersarea" : "Pregătește o roată"}
            </button>
            {onPrepared && (
              <button
                type="button"
                className="quiet-button"
                onClick={onPrepared}
              >
                Revino la roata pregătită
              </button>
            )}
          </div>
          <nav className="task-menu" aria-label="Meniul profilului">
            <TaskRow
              title="Sunete urmărite"
              description={
                active.length
                  ? `${active.map((g) => g.label).join(" · ")} · Alegeți un sunet pentru detalii`
                  : "Se adaugă când începeți o roată. Puteți adăuga și aici."
              }
              onClick={() => navigate("sounds")}
            />
            <TaskRow
              title="Pronunție"
              description={
                observations.length
                  ? "Notați cum a mers și vedeți observațiile anterioare"
                  : "Notați cum pronunță copilul fiecare sunet"
              }
              onClick={() => navigate("pronunciation")}
            />
            <TaskRow
              title="Activitate"
              description="Cuvintele și rundele exersate împreună"
              onClick={() => navigate("activity")}
            />
            <TaskRow
              title="Medalii"
              description="Recompensele adunate prin joacă"
              onClick={() => navigate("awards")}
            />
            <TaskRow
              title="Roțile mele"
              description="Folosiți o configurație salvată"
              onClick={onLibrary}
            />
            <TaskRow
              title="Setările profilului"
              description="Nume, personaj și copie de siguranță"
              onClick={() => navigate("settings")}
            />
          </nav>
        </>
      )}
      {screen === "sounds" && (
        <>
          <p className="task-intro">
            Sunetul roții se adaugă automat când începeți exersarea.
          </p>
          <button
            className="secondary-button task-full"
            type="button"
            onClick={() => navigate("add-sound")}
          >
            Adaugă un sunet
          </button>
          <div className="task-menu">
            {child.goals.map((g) => {
              const p = goalProgress(state, child.id, g);
              return (
                <TaskRow
                  key={g.id}
                  title={g.label}
                  leading={g.label}
                  description={
                    g.active
                      ? `${p.current} ${p.current === 1 ? "cuvânt exersat" : "cuvinte exersate"} · Încă ${Math.max(0, p.next - p.current)} până la medalie`
                      : "Arhivat · Istoricul este păstrat"
                  }
                  onClick={() => navigate("sound", g.id)}
                />
              );
            })}
          </div>
          {!child.goals.length && (
            <p className="task-empty">
              Adăugați un sunet pentru a nota pronunția sau pregătiți prima
              roată din profil.
            </p>
          )}
        </>
      )}
      {screen === "add-sound" && (
        <SoundPicker
          child={child}
          busy={busy}
          onSave={async (label) => {
            const ok = await onSave(
              (d) => saveGoal(d, child.id, label),
              `Sunetul ${label} este urmărit.`,
            );
            if (ok) navigate("sounds");
            return ok;
          }}
        />
      )}
      {(screen === "sound" || screen === "verified") && !goal && (
        <p>Acest sunet nu mai este în profil. Reveniți la lista de sunete.</p>
      )}
      {screen === "sound" && goal && (
        <>
          <SoundProgress state={state} child={child} goalId={goal.id} />
          <nav className="task-menu">
            <TaskRow
              title="Notează pronunția"
              description={(() => {
                const last = observations
                  .filter((o) => o.goalId === goal.id)
                  .at(-1);
                return last
                  ? `Ultima observație: ${PRONUNCIATION_LABELS[last.rating]}`
                  : "Nu există încă o observație pentru acest sunet";
              })()}
              onClick={() => navigate("pronunciation", goal.id)}
            />
            <TaskRow
              title="Sunet și poziții verificate"
              description="Detalii despre prezența sunetului în cuvinte"
              onClick={() => navigate("verified", goal.id)}
            />
          </nav>
          <section className="task-setting-section">
            <h2>
              {goal.active ? "Pauză de la acest sunet?" : "Reluăm acest sunet?"}
            </h2>
            <p>
              {goal.active
                ? "Îl puteți arhiva. Cuvintele, observațiile și medaliile rămân aici."
                : "Reactivarea păstrează toate cuvintele, observațiile și medaliile."}
            </p>
            <button
              className="secondary-button"
              type="button"
              disabled={busy}
              onClick={async () => {
                const ok = await onSave(
                  (d) => {
                    const g = d.profiles
                      .find((p) => p.id === child.id)
                      ?.goals.find((g) => g.id === goal.id);
                    if (g) g.active = !goal.active;
                  },
                  goal.active
                    ? "Sunet arhivat. Istoricul este păstrat."
                    : "Sunet reactivat.",
                );
                if (ok) navigate("sounds");
              }}
            >
              {goal.active ? "Arhivează sunetul" : "Reactivează sunetul"}
            </button>
          </section>
        </>
      )}
      {screen === "verified" && goal && (
        <VerifiedSound state={state} child={child} goalId={goal.id} />
      )}
      {screen === "pronunciation" && (
        <PronunciationPanel
          key={goalId ?? "all"}
          state={state}
          child={child}
          initialGoalId={goalId}
          busy={busy}
          onSave={onSave}
          onCelebrateNow={onCelebrateNow}
          onAddSound={() => navigate("add-sound")}
          onNavigate={onNavigate}
        />
      )}
      {(screen === "activity" || screen === "awards") && (
        <PracticeProgress
          key={screen}
          state={state}
          child={child}
          view={screen}
        />
      )}
      {screen === "settings" && (
        <>
          <nav className="task-menu">
            <TaskRow
              title="Nume și personaj"
              description="Schimbați numele din joc sau prietenul de joacă"
              onClick={onEdit}
            />
            <TaskRow
              title="Copie de siguranță"
              description="Salvați profilul într-un fișier protejat cu parolă"
              onClick={onBackup}
            />
          </nav>
          <p className="task-intro">
            Datele rămân în acest browser. O copie de siguranță vă ajută să le
            păstrați sau să le mutați pe alt dispozitiv.
          </p>
          <section className="task-setting-section">
            {confirmDelete ? (
              <div role="group" aria-label="Confirmă ștergerea profilului">
                <h2>Ștergeți profilul {child.nickname}?</h2>
                <p>
                  Se șterg sunetele, cuvintele, observațiile și medaliile
                  acestui copil. Celelalte profiluri și roțile salvate rămân.
                </p>
                <div className="practice-form-actions">
                  <button
                    type="button"
                    className="practice-danger"
                    disabled={busy}
                    onClick={async () => {
                      if (
                        await onSave(
                          (d) => removeProfile(d, child.id),
                          "Profil șters.",
                        )
                      )
                        onBack();
                    }}
                  >
                    Da, șterge profilul
                  </button>
                  <button
                    type="button"
                    className="secondary-button"
                    disabled={busy}
                    onClick={() => setConfirmDelete(false)}
                  >
                    Anulează
                  </button>
                </div>
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
          </section>
        </>
      )}
    </div>
  );
}

function SoundPicker({
  child,
  busy,
  onSave,
}: {
  child: ChildProfile;
  busy: boolean;
  onSave: (label: string) => Promise<boolean>;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [category, setCategory] = useState("Litere");
  const archived = child.goals.find((g) => g.label === selected && !g.active);
  return (
    <form
      className="sound-picker"
      onSubmit={(e) => {
        e.preventDefault();
        if (selected) void onSave(selected);
      }}
    >
      <p className="task-intro">
        Ce sunet vreți să urmăriți? Alegeți o literă sau un grup.
      </p>
      <div className="task-segments" aria-label="Tip de sunet">
        {["Litere", "Grupuri de litere"].map((label) => (
          <button
            type="button"
            key={label}
            aria-pressed={category === label}
            onClick={() => {
              setCategory(label);
              setSelected(null);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {[
        ["Litere", LETTERS],
        ["Grupuri de litere", GROUPS],
      ]
        .filter(([title]) => title === category)
        .map(([title, labels]) => (
          <fieldset key={title as string}>
            <legend>{title}</legend>
            <div className="sound-picker-grid">
              {(labels as string[]).map((label) => {
                const active = child.goals.some(
                  (g) => g.active && g.label === label,
                );
                return (
                  <label
                    key={label}
                    data-selected={selected === label}
                    data-tracked={active}
                  >
                    <input
                      type="radio"
                      name="sound"
                      value={label}
                      disabled={busy || active}
                      checked={selected === label}
                      onChange={() => setSelected(label)}
                    />
                    <span>{label}</span>
                    {active && (
                      <svg
                        viewBox="0 0 16 16"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="m3 8 3 3 7-7" />
                      </svg>
                    )}
                    <span className="sr-only">
                      {active ? "deja urmărit" : ""}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      <div className="task-actions">
        <button
          className="spin-button"
          type="submit"
          disabled={busy || !selected}
        >
          {busy
            ? "Se salvează…"
            : selected
              ? `${archived ? "Reactivează" : "Adaugă"} ${selected}`
              : "Alegeți un sunet"}
        </button>
      </div>
    </form>
  );
}

function SoundProgress({
  state,
  child,
  goalId,
}: {
  state: LocalPracticeState;
  child: ChildProfile;
  goalId: string;
}) {
  const goal = child.goals.find((g) => g.id === goalId)!;
  const p = goalProgress(state, child.id, goal);
  return (
    <section className="task-sound-progress">
      <h2>
        {p.current} {p.current === 1 ? "cuvânt exersat" : "cuvinte exersate"}{" "}
        pentru {goal.label}
      </h2>
      <label>
        Încă {Math.max(0, p.next - p.current)} până la următoarea medalie
        <progress
          value={Math.max(0, p.current - p.previous)}
          max={Math.max(1, p.next - p.previous)}
        />
      </label>
      <p>
        Numărăm fiecare cuvânt închis în roata {goal.label}, inclusiv
        repetările, și potrivirile verificate din alte roți. Medaliile
        răsplătesc participarea.
      </p>
    </section>
  );
}
function VerifiedSound({
  state,
  child,
  goalId,
}: {
  state: LocalPracticeState;
  child: ChildProfile;
  goalId: string;
}) {
  const turns = state.turns.filter((t) => t.childId === child.id);
  const reviewed = turns.flatMap((t) =>
    t.goals.filter((g) => g.goalId === goalId && g.matched === true),
  );
  const unknown = turns.filter((t) =>
    t.goals.some((g) => g.goalId === goalId && g.matched === null),
  ).length;
  return (
    <section className="task-setting-section">
      <p>
        Aceste date folosesc doar cuvintele cu sunet verificat. Sunt separate de
        participarea la roată.
      </p>
      <p>
        {reviewed.length} cuvinte cu sunet verificat.{" "}
        {unknown > 0 && `${unknown} cuvinte așteaptă verificarea sunetului.`}
      </p>
      {reviewed.length > 0 && (
        <>
          <dl className="verified-position-list">
            {[
              ["Început", "initial"],
              ["Mijloc", "medial"],
              ["Final", "final"],
            ].map(([label, position]) => (
              <div key={position}>
                <dt>{label}</dt>
                <dd>
                  {
                    reviewed.filter((g) =>
                      g.positions.includes(
                        position as "initial" | "medial" | "final",
                      ),
                    ).length
                  }
                </dd>
              </div>
            ))}
          </dl>
          <p>
            Poziție necunoscută:{" "}
            {reviewed.filter((g) => !g.positions.length).length}. Pozițiile se
            pot suprapune.
          </p>
        </>
      )}
    </section>
  );
}
