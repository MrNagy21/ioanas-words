import {
  MAX_BACKUP_BYTES,
  parsePracticeBackup,
  type PracticeBackup,
} from "@/storage/practice-backup";

const ITERATIONS = 600_000;
const encoder = new TextEncoder();
const CONTEXT = encoder.encode("word-wheel-backup:1");

function encode(bytes: Uint8Array) {
  let binary = "";
  for (let index = 0; index < bytes.length; index += 8192)
    binary += String.fromCharCode(...bytes.subarray(index, index + 8192));
  return btoa(binary);
}
function decode(value: unknown, max: number) {
  if (
    typeof value !== "string" ||
    value.length > Math.ceil((max * 4) / 3) + 4 ||
    !/^[A-Za-z0-9+/]*={0,2}$/.test(value)
  )
    throw new Error("Format de copie neacceptat.");
  const binary = atob(value);
  if (binary.length > max) throw new Error("Fișierul este prea mare.");
  return Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
}
async function key(password: string, salt: Uint8Array<ArrayBuffer>) {
  if (password.length < 8 || password.length > 1024)
    throw new Error("Folosiți o parolă de cel puțin 8 caractere.");
  const material = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", iterations: ITERATIONS, salt },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function encryptPracticeBackup(
  backup: PracticeBackup,
  password: string,
) {
  const checked = parsePracticeBackup(JSON.stringify(backup));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv, additionalData: CONTEXT },
    await key(password, salt),
    encoder.encode(JSON.stringify(checked)),
  );
  return JSON.stringify({
    format: "word-wheel-encrypted",
    version: 1,
    iterations: ITERATIONS,
    salt: encode(salt),
    iv: encode(iv),
    data: encode(new Uint8Array(encrypted)),
  });
}

export async function decryptPracticeBackup(
  raw: string,
  password: string,
): Promise<PracticeBackup> {
  if (encoder.encode(raw).byteLength > MAX_BACKUP_BYTES * 1.4 + 4096)
    throw new Error("Fișierul este prea mare.");
  const value = JSON.parse(raw);
  if (
    !value ||
    value.format !== "word-wheel-encrypted" ||
    value.version !== 1 ||
    value.iterations !== ITERATIONS
  )
    throw new Error("Fișierul nu este o copie protejată Word Wheel acceptată.");
  const salt = decode(value.salt, 16);
  const iv = decode(value.iv, 12);
  const data = decode(value.data, MAX_BACKUP_BYTES + 16);
  if (salt.length !== 16 || iv.length !== 12 || data.length < 16)
    throw new Error("Copia este incompletă.");
  let decrypted: ArrayBuffer;
  try {
    decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv, additionalData: CONTEXT },
      await key(password, salt),
      data,
    );
  } catch {
    throw new Error(
      "Parola nu este corectă sau copia este deteriorată. Datele locale nu au fost modificate.",
    );
  }
  return parsePracticeBackup(
    new TextDecoder("utf-8", { fatal: true }).decode(decrypted),
  );
}
