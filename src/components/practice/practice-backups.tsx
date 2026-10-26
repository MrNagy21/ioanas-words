"use client";

import { useState, useRef, type FormEvent } from "react";
import {
  decryptPracticeBackup,
  encryptPracticeBackup,
} from "@/storage/encrypted-backup";
import {
  snapshotPracticeBackup,
  restorePracticeBackup,
} from "@/storage/backup-actions";
import { readPracticeState } from "@/storage/practice-store";
import type { LocalPracticeState } from "@/practice/model";
import type { PracticeBackup } from "@/storage/practice-backup";

export function PracticeBackups({
  state,
  onRestored,
  initialScope,
}: {
  state: LocalPracticeState;
  onRestored: () => void;
  initialScope?: string;
}) {
  const [scope, setScope] = useState(initialScope ?? "all");
  const fileInput = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [importPassword, setImportPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<{
    backup: PracticeBackup;
    revision: number;
  } | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [operation, setOperation] = useState<
    "export" | "import" | "restore" | null
  >(null);
  const busy = operation !== null;
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState("");
  async function exportBackup(event?: FormEvent) {
    event?.preventDefault();
    if (password !== confirmation) {
      setError(
        "Parolele sunt diferite. Scrieți aceeași parolă în ambele câmpuri.",
      );
      return;
    }
    setOperation("export");
    setError(null);
    setNotice("");
    try {
      const backup = await snapshotPracticeBackup(
        scope === "all" ? undefined : scope,
      );
      const encrypted = await encryptPracticeBackup(backup, password);
      const url = URL.createObjectURL(
        new Blob([encrypted], { type: "application/octet-stream" }),
      );
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `word-wheel-${backup.scope}-${new Date().toISOString().slice(0, 10)}.wwbackup`;
      anchor.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setPassword("");
      setConfirmation("");
      setNotice(
        "Copia este pregătită pentru descărcare. Păstrați fișierul și parola, veți avea nevoie de ambele pentru recuperare.",
      );
    } catch (reason) {
      setError(message(reason));
    } finally {
      setOperation(null);
    }
  }
  async function openBackup(event: FormEvent) {
    event.preventDefault();
    if (!file) return;
    setOperation("import");
    setError(null);
    setPreview(null);
    setConfirmed(false);
    try {
      if (file.size > 7_004_096) throw new Error("Fișierul este prea mare.");
      const backup = await decryptPracticeBackup(
        await file.text(),
        importPassword,
      );
      const current = await readPracticeState();
      setPreview({ backup, revision: current.revision });
      setImportPassword("");
    } catch (reason) {
      setError(message(reason));
    } finally {
      setOperation(null);
    }
  }
  async function restore() {
    if (!preview || !confirmed) return;
    setOperation("restore");
    setError(null);
    try {
      const result = await restorePracticeBackup(
        preview.backup,
        preview.revision,
      );
      setNotice(
        result.warning ??
          "Copia a fost restaurată. Datele alese au fost înlocuite cu cele din fișier. Istoricul nu s-a adunat de două ori.",
      );
      setPreview(null);
      setConfirmed(false);
      setFile(null);
      if (fileInput.current) fileInput.current.value = "";
      setScope("all");
      onRestored();
    } catch (reason) {
      setError(message(reason));
    } finally {
      setOperation(null);
    }
  }
  return (
    <section className="practice-backups task-page">
      <h1 tabIndex={-1}>Date și copii de siguranță</h1>
      <p>
        Păstrați o copie a profilurilor și medaliilor, pentru orice
        eventualitate. O puteți folosi și ca să mutați datele pe alt dispozitiv.
      </p>
      <p>
        Doar cine are fișierul și parola îl poate deschide. Parola nu se
        salvează în aplicație și nu o putem recupera dacă o pierdeți.
      </p>
      {error && (
        <p role="alert" className="practice-alert">
          {error}
        </p>
      )}
      {notice && <p role="status">{notice}</p>}
      <div className="practice-backup-columns">
        <form className="practice-backup-form" onSubmit={exportBackup}>
          <h2>Salvează o copie</h2>
          <label>
            Ce include copia
            <select
              aria-label="Ce include copia"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
            >
              <option value="all">Toată aplicația</option>
              {state.profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  Doar {p.nickname}
                </option>
              ))}
            </select>
          </label>
          <label>
            Parola copiei
            <input
              type="password"
              autoComplete="new-password"
              value={password}
              minLength={8}
              maxLength={1024}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="practice-password-help">
            Alegeți o parolă de cel puțin 8 caractere și păstrați-o separat de
            fișier.
          </p>
          <label>
            Repetă parola
            <input
              type="password"
              autoComplete="new-password"
              value={confirmation}
              minLength={8}
              maxLength={1024}
              required
              onChange={(e) => setConfirmation(e.target.value)}
            />
          </label>
          <button className="secondary-button" type="submit" disabled={busy}>
            {operation === "export"
              ? "Pregătim copia..."
              : "Descarcă copia protejată"}
          </button>
        </form>
        <form className="practice-backup-form" onSubmit={openBackup}>
          <h2>Recuperează dintr-o copie</h2>
          <label>
            Fișier de siguranță (.wwbackup)
            <input
              type="file"
              ref={fileInput}
              accept=".wwbackup,application/octet-stream,application/json"
              onChange={(e) => {
                setFile(e.target.files?.[0] ?? null);
                setPreview(null);
                setConfirmed(false);
              }}
            />
          </label>
          <label>
            Parola fișierului
            <input
              type="password"
              autoComplete="off"
              value={importPassword}
              minLength={8}
              maxLength={1024}
              required
              onChange={(e) => setImportPassword(e.target.value)}
            />
          </label>
          <button
            className="secondary-button"
            disabled={busy || !file}
            type="submit"
          >
            {operation === "import"
              ? "Verificăm fișierul..."
              : "Verifică fișierul"}
          </button>
        </form>
      </div>
      {preview && (
        <section
          className="practice-restore-preview"
          aria-labelledby="restore-title"
        >
          <h2 id="restore-title">Ce veți recupera</h2>
          <p>
            {preview.backup.scope === "all"
              ? "Această copie înlocuiește toate datele locale ale aplicației."
              : `Această copie înlocuiește doar profilul „${preview.backup.data.profiles[0].nickname}” dacă există deja, sau îl adaugă. Celelalte profiluri și roți rămân.`}
          </p>
          <p>
            {preview.backup.data.profiles.length}{" "}
            {preview.backup.data.profiles.length === 1 ? "profil" : "profiluri"}{" "}
            · {preview.backup.data.turns.length}{" "}
            {preview.backup.data.turns.length === 1
              ? "participare"
              : "participări"}{" "}
            · {preview.backup.data.awards.length}{" "}
            {preview.backup.data.awards.length === 1 ? "medalie" : "medalii"} ·{" "}
            {preview.backup.data.configurations.length}{" "}
            {preview.backup.data.configurations.length === 1
              ? "roată salvată"
              : "roți salvate"}
          </p>
          <p>
            Copie creată la{" "}
            {new Date(preview.backup.exportedAt).toLocaleString("ro-RO")}.
          </p>
          <p>
            Vreți să păstrați și datele de acum? Descărcați mai întâi o copie
            din formularul de mai sus, apoi verificați din nou fișierul ales.
          </p>
          <label className="practice-restore-confirm">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            Am înțeles ce date se înlocuiesc. Istoricul din cele două copii nu
            se combină.
          </label>
          <div className="practice-form-actions">
            <button
              className="practice-danger"
              type="button"
              disabled={busy || !confirmed}
              onClick={() => {
                void restore();
              }}
            >
              {operation === "restore"
                ? "Recuperăm datele..."
                : "Restaurează copia"}
            </button>
            <button
              className="secondary-button"
              type="button"
              disabled={busy}
              onClick={() => setPreview(null)}
            >
              Anulează restaurarea
            </button>
          </div>
        </section>
      )}
    </section>
  );
}
function message(reason: unknown) {
  return reason instanceof Error
    ? reason.message
    : "Copia nu poate fi procesată. Datele locale au fost păstrate.";
}
