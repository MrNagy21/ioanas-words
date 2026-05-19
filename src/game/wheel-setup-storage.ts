import type { WordInclusionMode } from "@/game/word-selection";

export const WHEEL_SETUP_STORAGE_KEY = "word-wheel.setup.v1";
export const WHEEL_SETUP_SCHEMA_VERSION = 1;

export type WheelWordSelectionMode = "all" | "custom";

export type WheelSetupConfig = Readonly<{
  mode: WordInclusionMode;
  wheelWordCount: number;
  wordSelectionMode: WheelWordSelectionMode;
  selectedWordIds: readonly string[];
}>;

export type SavedWheelSetup = Readonly<{
  id: string;
  targetKey: string;
  name: string;
  config: WheelSetupConfig;
  createdAt: string;
  updatedAt: string;
}>;

type WheelSetupStore = Readonly<{
  schemaVersion: typeof WHEEL_SETUP_SCHEMA_VERSION;
  activeConfigsByTargetKey: Record<string, WheelSetupConfig>;
  savedSetups: SavedWheelSetup[];
}>;

const EMPTY_STORE: WheelSetupStore = {
  schemaVersion: WHEEL_SETUP_SCHEMA_VERSION,
  activeConfigsByTargetKey: {},
  savedSetups: [],
};

export function loadWheelSetupStore(): WheelSetupStore {
  if (typeof window === "undefined") {
    return EMPTY_STORE;
  }

  try {
    const storedValue = window.localStorage.getItem(WHEEL_SETUP_STORAGE_KEY);

    if (!storedValue) {
      return EMPTY_STORE;
    }

    return parseWheelSetupStore(JSON.parse(storedValue));
  } catch {
    return EMPTY_STORE;
  }
}

export function getActiveWheelSetup(targetKey: string) {
  return loadWheelSetupStore().activeConfigsByTargetKey[targetKey] ?? null;
}

export function getSavedWheelSetupsForTarget(targetKey: string) {
  return loadWheelSetupStore()
    .savedSetups.filter((setup) => setup.targetKey === targetKey)
    .sort((first, second) => second.updatedAt.localeCompare(first.updatedAt));
}

export function saveActiveWheelSetup(
  targetKey: string,
  config: WheelSetupConfig,
) {
  const store = loadWheelSetupStore();

  writeWheelSetupStore({
    ...store,
    activeConfigsByTargetKey: {
      ...store.activeConfigsByTargetKey,
      [targetKey]: config,
    },
  });
}

export function createSavedWheelSetup({
  config,
  name,
  targetKey,
}: Readonly<{
  config: WheelSetupConfig;
  name: string;
  targetKey: string;
}>) {
  const store = loadWheelSetupStore();
  const now = new Date().toISOString();
  const setup: SavedWheelSetup = {
    id: createSetupId(),
    targetKey,
    name: name.trim(),
    config,
    createdAt: now,
    updatedAt: now,
  };

  writeWheelSetupStore({
    ...store,
    savedSetups: [setup, ...store.savedSetups],
  });

  return setup;
}

export function deleteSavedWheelSetup(setupId: string) {
  const store = loadWheelSetupStore();

  writeWheelSetupStore({
    ...store,
    savedSetups: store.savedSetups.filter((setup) => setup.id !== setupId),
  });
}

function writeWheelSetupStore(store: WheelSetupStore) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(WHEEL_SETUP_STORAGE_KEY, JSON.stringify(store));
}

function parseWheelSetupStore(value: unknown): WheelSetupStore {
  if (
    !isPlainObject(value) ||
    value.schemaVersion !== WHEEL_SETUP_SCHEMA_VERSION
  ) {
    return EMPTY_STORE;
  }

  return {
    schemaVersion: WHEEL_SETUP_SCHEMA_VERSION,
    activeConfigsByTargetKey: parseActiveConfigs(
      value.activeConfigsByTargetKey,
    ),
    savedSetups: parseSavedSetups(value.savedSetups),
  };
}

function parseActiveConfigs(value: unknown) {
  if (!isPlainObject(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value).flatMap(([targetKey, config]) => {
      const parsedConfig = parseSetupConfig(config);

      return parsedConfig ? [[targetKey, parsedConfig]] : [];
    }),
  );
}

function parseSavedSetups(value: unknown): SavedWheelSetup[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((setup) => {
    if (
      !isPlainObject(setup) ||
      typeof setup.id !== "string" ||
      typeof setup.targetKey !== "string" ||
      typeof setup.name !== "string" ||
      typeof setup.createdAt !== "string" ||
      typeof setup.updatedAt !== "string"
    ) {
      return [];
    }

    const config = parseSetupConfig(setup.config);

    if (!config) {
      return [];
    }

    return [
      {
        id: setup.id,
        targetKey: setup.targetKey,
        name: setup.name,
        config,
        createdAt: setup.createdAt,
        updatedAt: setup.updatedAt,
      },
    ];
  });
}

function parseSetupConfig(value: unknown): WheelSetupConfig | null {
  if (
    !isPlainObject(value) ||
    !isWordInclusionMode(value.mode) ||
    typeof value.wheelWordCount !== "number" ||
    !Number.isFinite(value.wheelWordCount) ||
    !isWheelWordSelectionMode(value.wordSelectionMode) ||
    !Array.isArray(value.selectedWordIds)
  ) {
    return null;
  }

  return {
    mode: value.mode,
    wheelWordCount: value.wheelWordCount,
    wordSelectionMode: value.wordSelectionMode,
    selectedWordIds: dedupeStrings(value.selectedWordIds),
  };
}

function isWordInclusionMode(value: unknown): value is WordInclusionMode {
  return (
    value === "starts-with" ||
    value === "contains-only" ||
    value === "starts-with-or-contains"
  );
}

function isWheelWordSelectionMode(
  value: unknown,
): value is WheelWordSelectionMode {
  return value === "all" || value === "custom";
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function dedupeStrings(values: readonly unknown[]) {
  return [...new Set(values.filter((value) => typeof value === "string"))];
}

function createSetupId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
