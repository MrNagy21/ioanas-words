import assert from "node:assert/strict";
import { getExcludedTargetsSummary } from "@/game/wheel-setup";
import {
  createSavedWheelSetup,
  getActiveWheelSetup,
  getSavedWheelSetupsForTarget,
  isSavedWheelSetupNameTaken,
  loadWheelSetupStore,
  saveActiveWheelSetup,
  updateSavedWheelSetup,
  WHEEL_SETUP_SCHEMA_VERSION,
  WHEEL_SETUP_STORAGE_KEY,
  type WheelSetupConfig,
} from "@/game/wheel-setup-storage";

const targetKey = "ro:letter:f";

installMockWindow();

const v1Config = {
  mode: "starts-with",
  wheelWordCount: 6,
  wordSelectionMode: "all",
  selectedWordIds: [],
} as const;

window.localStorage.setItem(
  WHEEL_SETUP_STORAGE_KEY,
  JSON.stringify({
    schemaVersion: 1,
    activeConfigsByTargetKey: {
      [targetKey]: v1Config,
    },
    savedSetups: [
      {
        id: "saved-v1",
        targetKey,
        name: "Config veche",
        config: {
          ...v1Config,
          mode: "starts-with-or-contains",
          selectedWordIds: ["ro-f-fata", "ro-f-fustă"],
          wordSelectionMode: "custom",
        },
        createdAt: "2026-05-19T10:00:00.000Z",
        updatedAt: "2026-05-19T10:00:00.000Z",
      },
    ],
  }),
);

assert.deepEqual(loadWheelSetupStore().activeConfigsByTargetKey[targetKey], {
  ...v1Config,
  excludedTargetKeys: [],
});
assert.deepEqual(getActiveWheelSetup(targetKey)?.excludedTargetKeys, []);

const migratedSavedSetup = getSavedWheelSetupsForTarget(targetKey)[0];

assert.equal(migratedSavedSetup?.name, "Config veche");
assert.deepEqual(migratedSavedSetup?.config.excludedTargetKeys, []);
assert.deepEqual(migratedSavedSetup?.config.selectedWordIds, [
  "ro-f-fata",
  "ro-f-fustă",
]);

window.localStorage.setItem(
  WHEEL_SETUP_STORAGE_KEY,
  JSON.stringify({
    schemaVersion: WHEEL_SETUP_SCHEMA_VERSION,
    activeConfigsByTargetKey: {
      [targetKey]: {
        ...v1Config,
        excludedTargetKeys: [
          "letter:r",
          "missing:key",
          "sequence:ghe",
          "letter:r",
          123,
        ],
      },
    },
    savedSetups: [
      {
        id: "saved-v2",
        targetKey,
        name: "Fără R",
        config: {
          ...v1Config,
          excludedTargetKeys: ["letter:r", "letter:nope", "sequence:ghe"],
        },
        createdAt: "2026-05-20T10:00:00.000Z",
        updatedAt: "2026-05-20T10:00:00.000Z",
      },
    ],
  }),
);

assert.deepEqual(getActiveWheelSetup(targetKey)?.excludedTargetKeys, [
  "letter:r",
  "sequence:ghe",
]);
assert.deepEqual(
  getSavedWheelSetupsForTarget(targetKey)[0]?.config.excludedTargetKeys,
  ["letter:r", "sequence:ghe"],
);

const newConfig: WheelSetupConfig = {
  mode: "starts-with",
  excludedTargetKeys: ["letter:r"],
  wheelWordCount: 6,
  wordSelectionMode: "all",
  selectedWordIds: [],
};

saveActiveWheelSetup(targetKey, newConfig);
assert.deepEqual(getActiveWheelSetup(targetKey)?.excludedTargetKeys, [
  "letter:r",
]);

const savedSetup = createSavedWheelSetup({
  config: {
    ...newConfig,
    excludedTargetKeys: ["letter:r", "sequence:ghe"],
  },
  name: "Fără R și GHE",
  targetKey,
});

assert.deepEqual(savedSetup.config.excludedTargetKeys, [
  "letter:r",
  "sequence:ghe",
]);
assert.equal(
  getExcludedTargetsSummary({
    excludedTargetKeys: savedSetup.config.excludedTargetKeys,
    locale: "ro",
  }),
  "Fără R, GHE",
);
assert.equal(
  getExcludedTargetsSummary({ excludedTargetKeys: [], locale: "ro" }),
  null,
);

const setupToUpdate = getSavedWheelSetupsForTarget(targetKey).find(
  (setup) => setup.id === "saved-v2",
);

assert.ok(setupToUpdate);

const originalCreatedAt = setupToUpdate.createdAt;
const originalUpdatedAt = setupToUpdate.updatedAt;
const updatedSetup = updateSavedWheelSetup(setupToUpdate.id, {
  config: {
    ...newConfig,
    excludedTargetKeys: ["letter:r"],
    wheelWordCount: 4,
  },
  name: "Fără R actualizat",
});

assert.ok(updatedSetup);
assert.equal(updatedSetup.id, setupToUpdate.id);
assert.equal(updatedSetup.name, "Fără R actualizat");
assert.equal(updatedSetup.targetKey, targetKey);
assert.equal(updatedSetup.createdAt, originalCreatedAt);
assert.notEqual(updatedSetup.updatedAt, originalUpdatedAt);
assert.deepEqual(updatedSetup.config, {
  ...newConfig,
  excludedTargetKeys: ["letter:r"],
  wheelWordCount: 4,
});
assert.equal(getSavedWheelSetupsForTarget(targetKey).length, 2);
assert.equal(getSavedWheelSetupsForTarget(targetKey)[0]?.id, setupToUpdate.id);

const missingUpdate = updateSavedWheelSetup("missing-setup", {
  config: newConfig,
  name: "Nu există",
});

assert.equal(missingUpdate, null);
assert.equal(getSavedWheelSetupsForTarget(targetKey).length, 2);

const storedPayload = JSON.parse(
  window.localStorage.getItem(WHEEL_SETUP_STORAGE_KEY) ?? "{}",
) as {
  schemaVersion?: unknown;
};

assert.equal(storedPayload.schemaVersion, WHEEL_SETUP_SCHEMA_VERSION);

assert.equal(
  isSavedWheelSetupNameTaken({
    name: " fără   r actualizat ",
    targetKey,
  }),
  true,
);
assert.equal(
  isSavedWheelSetupNameTaken({
    excludeSetupId: setupToUpdate.id,
    name: "Fără R actualizat",
    targetKey,
  }),
  false,
);
assert.equal(
  isSavedWheelSetupNameTaken({
    name: "Fără R actualizat",
    targetKey: "ro:letter:g",
  }),
  false,
);

function installMockWindow() {
  const storage = new MemoryStorage();

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      localStorage: storage,
    },
  });
}

class MemoryStorage implements Storage {
  private readonly values = new Map<string, string>();

  get length() {
    return this.values.size;
  }

  clear() {
    this.values.clear();
  }

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  key(index: number) {
    return [...this.values.keys()][index] ?? null;
  }

  removeItem(key: string) {
    this.values.delete(key);
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
}
