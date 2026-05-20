"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  getSelectableExclusionTargets,
  type ExclusionTarget,
} from "@/content/exclusions";
import type { ContentWord, GameplayContent } from "@/content/types";
import {
  DEFAULT_WHEEL_WORD_COUNT,
  getBoundedWheelWordCount,
  MAX_WHEEL_WORD_COUNT,
  type WordInclusionMode,
} from "@/game/word-selection";
import {
  createDefaultWheelSetupConfig,
  getExcludedTargetsSummary,
  getAvailableWordCountForMode,
  getModeOption,
  getModeWords,
  getModeWordCounts,
  getSelectedWordStatusLabel,
  getSelectedWords,
  getTargetKindLabel,
  getTargetRouteSegment,
  getTargetStorageKey,
  getWheelSetupEmptyStateKind,
  getValidWordIdsForMode,
  getWordCountLabel,
  resolveWheelSetupConfig,
  wheelSetupModeOptions,
} from "@/game/wheel-setup";
import {
  createSavedWheelSetup,
  deleteSavedWheelSetup,
  getActiveWheelSetup,
  getSavedWheelSetupsForTarget,
  isSavedWheelSetupNameTaken,
  saveActiveWheelSetup,
  updateSavedWheelSetup,
  type SavedWheelSetup,
  type WheelSetupConfig,
  type WheelWordSelectionMode,
} from "@/game/wheel-setup-storage";
import type { SupportedLocale } from "@/i18n/locales";

type WheelSetupScreenProps = Readonly<{
  locale: SupportedLocale;
  content: GameplayContent;
}>;

type SetupScreenMode = "chooser" | "editor";

type SetupChoice =
  | Readonly<{ kind: "default" }>
  | Readonly<{ kind: "saved"; setupId: string }>;

type SetupEditorContext =
  | Readonly<{ kind: "new" }>
  | Readonly<{ kind: "active"; originalConfig: WheelSetupConfig }>
  | Readonly<{
      kind: "editing-saved";
      setupId: string;
      originalName: string;
      originalConfig: WheelSetupConfig;
    }>;

type SaveFeedback = Readonly<{
  kind: "error" | "success";
  message: string;
}> | null;

type SetupWizardStep = "rules" | "exclusions" | "words" | "finish";

const setupWizardSteps = [
  {
    id: "rules",
    number: 1,
    label: "Reguli",
    title: "Alege regulile",
  },
  {
    id: "exclusions",
    number: 2,
    label: "Evită",
    title: "Evită litere/sunete",
  },
  {
    id: "words",
    number: 3,
    label: "Cuvinte",
    title: "Alege cuvintele",
  },
  {
    id: "finish",
    number: 4,
    label: "Final",
    title: "Alege numărul",
  },
] as const satisfies readonly {
  id: SetupWizardStep;
  label: string;
  number: number;
  title: string;
}[];

export function WheelSetupScreen({ content, locale }: WheelSetupScreenProps) {
  const router = useRouter();
  const targetKindLabel = getTargetKindLabel(content.target);
  const targetLabel = content.target.label;
  const routeSegment = getTargetRouteSegment(locale, content.target);
  const playHref = `/${locale}/play/${routeSegment}`;
  const targetStorageKey = getTargetStorageKey(locale, content.target);
  const defaultConfig = useMemo(
    () => createDefaultWheelSetupConfig({ content, locale }),
    [content, locale],
  );
  const [isHydrated, setIsHydrated] = useState(false);
  const [screenMode, setScreenMode] = useState<SetupScreenMode>("editor");
  const [savedSetups, setSavedSetups] = useState<readonly SavedWheelSetup[]>(
    [],
  );
  const [selectedChoice, setSelectedChoice] = useState<SetupChoice>({
    kind: "default",
  });
  const [draftConfig, setDraftConfig] =
    useState<WheelSetupConfig>(defaultConfig);
  const [editorContext, setEditorContext] = useState<SetupEditorContext>({
    kind: "new",
  });
  const [saveName, setSaveName] = useState("");
  const [saveFeedback, setSaveFeedback] = useState<SaveFeedback>(null);
  const [pendingDeleteSetup, setPendingDeleteSetup] =
    useState<SavedWheelSetup | null>(null);
  const modeWordCounts = useMemo(
    () =>
      getModeWordCounts({
        content,
        excludedTargetKeys: draftConfig.excludedTargetKeys,
        locale,
      }),
    [content, draftConfig.excludedTargetKeys, locale],
  );
  const baseModeWordCounts = useMemo(
    () =>
      getModeWordCounts({
        content,
        locale,
      }),
    [content, locale],
  );
  const draftModeWords = useMemo(
    () =>
      getModeWords({
        content,
        excludedTargetKeys: draftConfig.excludedTargetKeys,
        locale,
        mode: draftConfig.mode,
      }),
    [content, draftConfig.excludedTargetKeys, draftConfig.mode, locale],
  );
  const exclusionTargets = useMemo(
    () =>
      getSelectableExclusionTargets({
        activeTarget: content.target,
        locale,
      }),
    [content.target, locale],
  );
  const selectedWordIds = draftConfig.selectedWordIds;
  const selectedWords = useMemo(
    () => getSelectedWords(draftModeWords, selectedWordIds),
    [draftModeWords, selectedWordIds],
  );
  const availableWordCount = getAvailableWordCountForMode({
    content,
    excludedTargetKeys: draftConfig.excludedTargetKeys,
    locale,
    mode: draftConfig.mode,
    selectedWordIds,
    wordSelectionMode: draftConfig.wordSelectionMode,
  });
  const boundedWheelWordCount =
    getBoundedWheelWordCount(draftConfig.wheelWordCount, availableWordCount) ||
    0;
  const countControlAvailableWordCount =
    draftConfig.wordSelectionMode === "custom" && selectedWordIds.length === 0
      ? modeWordCounts[draftConfig.mode]
      : availableWordCount;
  const countControlWordCount =
    getBoundedWheelWordCount(
      draftConfig.wheelWordCount,
      countControlAvailableWordCount,
    ) || 0;
  const maxWheelWordCount = Math.min(
    countControlAvailableWordCount,
    MAX_WHEEL_WORD_COUNT,
  );
  const canStart = availableWordCount > 0 && boundedWheelWordCount > 0;
  const activeModeOption = getModeOption(draftConfig.mode);
  const hasUnsavedEditorChanges =
    editorContext.kind === "editing-saved" &&
    (saveName.trim() !== editorContext.originalName ||
      !areSetupConfigsEqual(draftConfig, editorContext.originalConfig));

  useEffect(() => {
    const hydrateTimer = window.setTimeout(() => {
      const saved = getSavedWheelSetupsForTarget(targetStorageKey);
      const activeConfig = getActiveWheelSetup(targetStorageKey);
      const urlSearchParams = new URLSearchParams(window.location.search);
      const isFromPlay = urlSearchParams.get("from") === "play";
      const activeDraft =
        isFromPlay && activeConfig
          ? resolveWheelSetupConfig({ config: activeConfig, content, locale })
          : null;
      const matchingSavedSetup = activeDraft
        ? saved.find((setup) => areSetupConfigsEqual(setup.config, activeDraft))
        : null;
      const initialDraft = activeDraft ?? defaultConfig;
      const initialEditorContext: SetupEditorContext = matchingSavedSetup
        ? {
            kind: "editing-saved",
            setupId: matchingSavedSetup.id,
            originalName: matchingSavedSetup.name,
            originalConfig: resolveWheelSetupConfig({
              config: matchingSavedSetup.config,
              content,
              locale,
            }),
          }
        : activeDraft
          ? { kind: "active", originalConfig: activeDraft }
          : { kind: "new" };

      setSavedSetups(saved);
      setDraftConfig(initialDraft);
      setEditorContext(initialEditorContext);
      setSaveName(matchingSavedSetup?.name ?? "");
      setSaveFeedback(null);
      setScreenMode(!isFromPlay && saved.length > 0 ? "chooser" : "editor");
      setSelectedChoice(
        matchingSavedSetup
          ? { kind: "saved", setupId: matchingSavedSetup.id }
          : { kind: "default" },
      );
      setIsHydrated(true);
    }, 0);

    return () => {
      window.clearTimeout(hydrateTimer);
    };
  }, [content, defaultConfig, locale, targetStorageKey]);

  function refreshSavedSetups() {
    const saved = getSavedWheelSetupsForTarget(targetStorageKey);

    setSavedSetups(saved);

    if (saved.length === 0) {
      setSelectedChoice({ kind: "default" });
    }
  }

  function normalizeDraftConfig(config: WheelSetupConfig): WheelSetupConfig {
    return resolveWheelSetupConfig({ config, content, locale });
  }

  function applyConfig(config: WheelSetupConfig) {
    const nextConfig = normalizeDraftConfig(config);

    saveActiveWheelSetup(targetStorageKey, nextConfig);
    router.push(playHref);
  }

  function startSelectedChoice() {
    const config = getSelectedChoiceConfig();

    if (config) {
      applyConfig(config);
    }
  }

  function editSelectedChoice() {
    setSaveFeedback(null);

    if (selectedChoice.kind === "saved") {
      const setup = savedSetups.find(
        (savedSetup) => savedSetup.id === selectedChoice.setupId,
      );

      if (!setup) {
        return;
      }

      beginEditingSavedSetup(setup);
      return;
    }

    setDraftConfig(normalizeDraftConfig(defaultConfig));
    setEditorContext({ kind: "new" });
    setSaveName("");
    setScreenMode("editor");
  }

  function getSelectedChoiceConfig() {
    if (selectedChoice.kind === "default") {
      return defaultConfig;
    }

    return (
      savedSetups.find((setup) => setup.id === selectedChoice.setupId)
        ?.config ?? null
    );
  }

  function createNewSetup() {
    setSaveFeedback(null);
    setDraftConfig(defaultConfig);
    setEditorContext({ kind: "new" });
    setSaveName("");
    setScreenMode("editor");
  }

  function loadSavedSetup(setup: SavedWheelSetup) {
    beginEditingSavedSetup(setup);
  }

  function beginEditingSavedSetup(setup: SavedWheelSetup) {
    const normalizedConfig = normalizeDraftConfig(setup.config);

    setSaveFeedback(null);
    setDraftConfig(normalizedConfig);
    setEditorContext({
      kind: "editing-saved",
      setupId: setup.id,
      originalName: setup.name,
      originalConfig: normalizedConfig,
    });
    setSaveName(setup.name);
    setSelectedChoice({ kind: "saved", setupId: setup.id });
    setScreenMode("editor");
  }

  function confirmDeleteSetup() {
    if (!pendingDeleteSetup) {
      return;
    }

    deleteSavedWheelSetup(pendingDeleteSetup.id);
    setSaveFeedback(null);
    setPendingDeleteSetup(null);
    setSelectedChoice({ kind: "default" });
    refreshSavedSetups();
  }

  function updateDraftMode(nextMode: WordInclusionMode) {
    setSaveFeedback(null);
    setDraftConfig((currentConfig) => {
      const nextSelectedWordIds = getValidWordIdsForMode({
        content,
        excludedTargetKeys: currentConfig.excludedTargetKeys,
        locale,
        mode: nextMode,
        wordIds: currentConfig.selectedWordIds,
      });
      const nextWordSelectionMode =
        currentConfig.wordSelectionMode === "custom" &&
        nextSelectedWordIds.length > 0
          ? "custom"
          : "all";
      const nextAvailableWordCount = getAvailableWordCountForMode({
        content,
        excludedTargetKeys: currentConfig.excludedTargetKeys,
        locale,
        mode: nextMode,
        selectedWordIds: nextSelectedWordIds,
        wordSelectionMode: nextWordSelectionMode,
      });

      return {
        mode: nextMode,
        excludedTargetKeys: currentConfig.excludedTargetKeys,
        wheelWordCount:
          getBoundedWheelWordCount(
            currentConfig.wheelWordCount,
            nextAvailableWordCount,
          ) || DEFAULT_WHEEL_WORD_COUNT,
        wordSelectionMode: nextWordSelectionMode,
        selectedWordIds:
          nextWordSelectionMode === "custom" ? nextSelectedWordIds : [],
      };
    });
  }

  function updateDraftExclusions(nextExcludedTargetKeys: readonly string[]) {
    setSaveFeedback(null);
    setDraftConfig((currentConfig) =>
      normalizeDraftConfig({
        ...currentConfig,
        excludedTargetKeys: nextExcludedTargetKeys,
      }),
    );
  }

  function updateDraftWordCount(nextWordCount: number) {
    if (countControlAvailableWordCount === 0) {
      return;
    }

    setSaveFeedback(null);
    setDraftConfig((currentConfig) => ({
      ...currentConfig,
      wheelWordCount: getBoundedWheelWordCount(
        nextWordCount,
        countControlAvailableWordCount,
      ),
    }));
  }

  function setWordSource(wordSelectionMode: WheelWordSelectionMode) {
    setSaveFeedback(null);
    setDraftConfig((currentConfig) => ({
      ...currentConfig,
      wordSelectionMode,
      selectedWordIds:
        wordSelectionMode === "all" ? [] : currentConfig.selectedWordIds,
    }));
  }

  function updateSelectedWordIds(wordIds: readonly string[]) {
    setSaveFeedback(null);
    const nextWordIds = getValidWordIdsForMode({
      content,
      excludedTargetKeys: draftConfig.excludedTargetKeys,
      locale,
      mode: draftConfig.mode,
      wordIds,
    });
    const nextWordSelectionMode =
      nextWordIds.length > 0 ? "custom" : "all";
    const nextAvailableWordCount =
      nextWordSelectionMode === "custom"
        ? nextWordIds.length
        : modeWordCounts[draftConfig.mode];

    setDraftConfig((currentConfig) => ({
      ...currentConfig,
      wordSelectionMode: nextWordSelectionMode,
      selectedWordIds: nextWordIds,
      wheelWordCount:
        getBoundedWheelWordCount(
          Math.min(DEFAULT_WHEEL_WORD_COUNT, nextAvailableWordCount),
          nextAvailableWordCount,
        ) || DEFAULT_WHEEL_WORD_COUNT,
    }));
  }

  function toggleSelectedWord(wordId: string) {
    updateSelectedWordIds(
      selectedWordIds.includes(wordId)
        ? selectedWordIds.filter((selectedWordId) => selectedWordId !== wordId)
        : [...selectedWordIds, wordId],
    );
  }

  function selectDisplayedWords(wordIds: readonly string[]) {
    updateSelectedWordIds([...selectedWordIds, ...wordIds]);
  }

  function resetToAllWords() {
    setSaveFeedback(null);
    setDraftConfig((currentConfig) => ({
      ...currentConfig,
      wordSelectionMode: "all",
      selectedWordIds: [],
      wheelWordCount:
        getBoundedWheelWordCount(
          currentConfig.wheelWordCount,
          modeWordCounts[currentConfig.mode],
        ) || DEFAULT_WHEEL_WORD_COUNT,
    }));
  }

  function saveDraft({
    action,
    startAfterSave,
  }: {
    action: "save-as-new" | "update-existing";
    startAfterSave?: boolean;
  }) {
    const trimmedName = formatSavedSetupName(saveName);

    if (!trimmedName || !canStart) {
      return;
    }

    const config = normalizeDraftConfig(draftConfig);

    setSaveName(trimmedName);

    if (action === "update-existing") {
      if (editorContext.kind !== "editing-saved") {
        return;
      }

      if (
        isSavedWheelSetupNameTaken({
          excludeSetupId: editorContext.setupId,
          name: trimmedName,
          targetKey: targetStorageKey,
        })
      ) {
        setSaveFeedback({
          kind: "error",
          message: "Există deja o configurație cu acest nume.",
        });
        return;
      }

      const updatedSetup = updateSavedWheelSetup(editorContext.setupId, {
        config,
        name: trimmedName,
      });

      if (!updatedSetup) {
        refreshSavedSetups();
        setSaveFeedback({
          kind: "error",
          message: "Configurația salvată nu mai există.",
        });
        return;
      }

      setEditorContext({
        kind: "editing-saved",
        setupId: updatedSetup.id,
        originalName: updatedSetup.name,
        originalConfig: normalizeDraftConfig(updatedSetup.config),
      });
      setSelectedChoice({ kind: "saved", setupId: updatedSetup.id });
      setSaveFeedback({
        kind: "success",
        message: "Modificările au fost salvate.",
      });
    } else {
      if (
        isSavedWheelSetupNameTaken({
          name: trimmedName,
          targetKey: targetStorageKey,
        })
      ) {
        setSaveFeedback({
          kind: "error",
          message: "Există deja o configurație cu acest nume.",
        });
        return;
      }

      const savedSetup = createSavedWheelSetup({
        config,
        name: trimmedName,
        targetKey: targetStorageKey,
      });

      setEditorContext({
        kind: "editing-saved",
        setupId: savedSetup.id,
        originalName: savedSetup.name,
        originalConfig: normalizeDraftConfig(savedSetup.config),
      });
      setSelectedChoice({ kind: "saved", setupId: savedSetup.id });
      setSaveFeedback({
        kind: "success",
        message: `Configurația „${savedSetup.name}” a fost salvată.`,
      });
    }

    refreshSavedSetups();

    if (startAfterSave) {
      applyConfig(config);
    }
  }

  return (
    <section className="app-stage setup-stage" aria-labelledby="setup-title">
      <div className="setup-workspace">
        {screenMode === "chooser" ? (
          <ConfigurationChooser
            defaultConfig={defaultConfig}
            isHydrated={isHydrated}
            onCreateNew={createNewSetup}
            onDeleteSetup={setPendingDeleteSetup}
            onEditSelected={editSelectedChoice}
            onLoadSavedSetup={loadSavedSetup}
            onSelectChoice={setSelectedChoice}
            onStartSelected={startSelectedChoice}
            locale={locale}
            savedSetups={savedSetups}
            selectedChoice={selectedChoice}
            targetKindLabel={targetKindLabel}
            targetLabel={targetLabel}
          />
        ) : (
          <SetupEditor
            activeModeOption={activeModeOption}
            availableWordCount={availableWordCount}
            baseModeWordCounts={baseModeWordCounts}
            boundedWheelWordCount={boundedWheelWordCount}
            canStart={canStart}
            countControlWordCount={countControlWordCount}
            draftConfig={draftConfig}
            editorContext={editorContext}
            exclusionTargets={exclusionTargets}
            hasUnsavedEditorChanges={hasUnsavedEditorChanges}
            isHydrated={isHydrated}
            locale={locale}
            maxWheelWordCount={maxWheelWordCount}
            modeWordCounts={modeWordCounts}
            savedSetups={savedSetups}
            onBackToChooser={
              savedSetups.length > 0 ? () => setScreenMode("chooser") : null
            }
            onResetToAllWords={resetToAllWords}
            onSaveDraft={saveDraft}
            onSelectDisplayedWords={selectDisplayedWords}
            onSetSaveName={(name) => {
              setSaveFeedback(null);
              setSaveName(name);
            }}
            onSetWordSource={setWordSource}
            onStart={() => applyConfig(draftConfig)}
            onToggleSelectedWord={toggleSelectedWord}
            onUpdateDraftExclusions={updateDraftExclusions}
            onUpdateDraftMode={updateDraftMode}
            onUpdateDraftWordCount={updateDraftWordCount}
            saveName={saveName}
            saveFeedback={saveFeedback}
            selectedWords={selectedWords}
            targetKindLabel={targetKindLabel}
            targetLabel={targetLabel}
            words={draftModeWords}
          />
        )}
      </div>

      {pendingDeleteSetup ? (
        <DeleteSetupConfirmation
          onCancel={() => setPendingDeleteSetup(null)}
          onConfirm={confirmDeleteSetup}
          setup={pendingDeleteSetup}
        />
      ) : null}
    </section>
  );
}

function ConfigurationChooser({
  defaultConfig,
  isHydrated,
  onCreateNew,
  onDeleteSetup,
  onEditSelected,
  onLoadSavedSetup,
  onSelectChoice,
  onStartSelected,
  locale,
  savedSetups,
  selectedChoice,
  targetKindLabel,
  targetLabel,
}: Readonly<{
  defaultConfig: WheelSetupConfig;
  isHydrated: boolean;
  onCreateNew: () => void;
  onDeleteSetup: (setup: SavedWheelSetup) => void;
  onEditSelected: () => void;
  onLoadSavedSetup: (setup: SavedWheelSetup) => void;
  onSelectChoice: (choice: SetupChoice) => void;
  onStartSelected: () => void;
  locale: SupportedLocale;
  savedSetups: readonly SavedWheelSetup[];
  selectedChoice: SetupChoice;
  targetKindLabel: string;
  targetLabel: string;
}>) {
  const hasSelectedSavedSetup = selectedChoice.kind === "saved";

  return (
    <section className="setup-chooser" aria-label="Configurații salvate">
      <div className="setup-page-title">
        <p className="stage-label">
          {targetKindLabel} {targetLabel}
        </p>
        <h2 id="setup-title">Configurații salvate</h2>
      </div>

      <div className="setup-choice-list">
        <button
          aria-pressed={selectedChoice.kind === "default"}
          className="setup-choice"
          data-active={selectedChoice.kind === "default" ? "true" : undefined}
          onClick={() => onSelectChoice({ kind: "default" })}
          type="button"
        >
          <strong>Toate cuvintele</strong>
          <span>{getSetupSummary(defaultConfig, locale)}</span>
        </button>

        {isHydrated ? (
          savedSetups.map((setup) => (
            <div className="setup-choice-row" key={setup.id}>
              <button
                aria-pressed={
                  selectedChoice.kind === "saved" &&
                  selectedChoice.setupId === setup.id
                }
                className="setup-choice"
                data-active={
                  selectedChoice.kind === "saved" &&
                  selectedChoice.setupId === setup.id
                    ? "true"
                    : undefined
                }
                onClick={() =>
                  onSelectChoice({ kind: "saved", setupId: setup.id })
                }
                onDoubleClick={() => onLoadSavedSetup(setup)}
                type="button"
              >
                <strong>{setup.name}</strong>
                <span>{getSavedSetupSummary(setup, locale)}</span>
              </button>
              <button
                aria-label={`Șterge ${setup.name}`}
                className="setup-delete-button"
                onClick={() => onDeleteSetup(setup)}
                type="button"
              >
                Șterge
              </button>
            </div>
          ))
        ) : (
          <p className="setup-muted">Se încarcă...</p>
        )}
      </div>

      <div className="setup-chooser__actions" aria-label="Acțiuni configurare">
        <button
          className="secondary-button setup-chooser__action setup-chooser__action--edit"
          onClick={onEditSelected}
          type="button"
        >
          Editează
        </button>
        <button
          aria-label={
            hasSelectedSavedSetup
              ? "Pornește roata cu configurația aleasă"
              : "Pornește roata cu toate cuvintele"
          }
          className="spin-button setup-chooser__action setup-chooser__action--start"
          onClick={onStartSelected}
          type="button"
        >
          Pornește roata
        </button>
        <button
          className="secondary-button setup-chooser__action setup-chooser__action--new"
          onClick={onCreateNew}
          type="button"
        >
          Configurație nouă
        </button>
      </div>
    </section>
  );
}

function SetupEditor({
  activeModeOption,
  availableWordCount,
  baseModeWordCounts,
  boundedWheelWordCount,
  canStart,
  countControlWordCount,
  draftConfig,
  editorContext,
  exclusionTargets,
  hasUnsavedEditorChanges,
  isHydrated,
  locale,
  maxWheelWordCount,
  modeWordCounts,
  savedSetups,
  onBackToChooser,
  onResetToAllWords,
  onSaveDraft,
  onSelectDisplayedWords,
  onSetSaveName,
  onSetWordSource,
  onStart,
  onToggleSelectedWord,
  onUpdateDraftExclusions,
  onUpdateDraftMode,
  onUpdateDraftWordCount,
  saveName,
  saveFeedback,
  selectedWords,
  targetKindLabel,
  targetLabel,
  words,
}: Readonly<{
  activeModeOption: ReturnType<typeof getModeOption>;
  availableWordCount: number;
  baseModeWordCounts: Record<WordInclusionMode, number>;
  boundedWheelWordCount: number;
  canStart: boolean;
  countControlWordCount: number;
  draftConfig: WheelSetupConfig;
  editorContext: SetupEditorContext;
  exclusionTargets: readonly ExclusionTarget[];
  hasUnsavedEditorChanges: boolean;
  isHydrated: boolean;
  locale: SupportedLocale;
  maxWheelWordCount: number;
  modeWordCounts: Record<WordInclusionMode, number>;
  savedSetups: readonly SavedWheelSetup[];
  onBackToChooser: (() => void) | null;
  onResetToAllWords: () => void;
  onSaveDraft: (options: {
    action: "save-as-new" | "update-existing";
    startAfterSave?: boolean;
  }) => void;
  onSelectDisplayedWords: (wordIds: readonly string[]) => void;
  onSetSaveName: (name: string) => void;
  onSetWordSource: (mode: WheelWordSelectionMode) => void;
  onStart: () => void;
  onToggleSelectedWord: (wordId: string) => void;
  onUpdateDraftExclusions: (excludedTargetKeys: readonly string[]) => void;
  onUpdateDraftMode: (mode: WordInclusionMode) => void;
  onUpdateDraftWordCount: (wordCount: number) => void;
  saveName: string;
  saveFeedback: SaveFeedback;
  selectedWords: readonly ContentWord[];
  targetKindLabel: string;
  targetLabel: string;
  words: readonly ContentWord[];
}>) {
  const selectedWordIds = draftConfig.selectedWordIds;
  const sourceSummary =
    draftConfig.wordSelectionMode === "custom"
      ? `${selectedWordIds.length} ${getSelectedWordStatusLabel(
          selectedWordIds.length,
        )}`
      : "toate cuvintele";
  const [activeStep, setActiveStep] = useState<SetupWizardStep>("rules");
  const activeStepIndex = setupWizardSteps.findIndex(
    (step) => step.id === activeStep,
  );
  const activeStepDetails =
    setupWizardSteps[activeStepIndex] ?? setupWizardSteps[0];
  const exclusionSummary = getExclusionSummary(
    draftConfig.excludedTargetKeys,
    locale,
  );
  const baseWordCount = baseModeWordCounts[draftConfig.mode];
  const filteredWordCount = modeWordCounts[draftConfig.mode];
  const filteredEmptyState = getWheelSetupEmptyStateKind({
    baseWordCount,
    excludedTargetKeys: draftConfig.excludedTargetKeys,
    filteredWordCount,
  });
  const isBlockedByExclusions = filteredEmptyState === "all-excluded";
  const canContinueFromWords =
    draftConfig.wordSelectionMode === "all" || selectedWordIds.length > 0;
  const isEditingSavedSetup = editorContext.kind === "editing-saved";
  const hasActiveEditorChanges =
    editorContext.kind === "active" &&
    !areSetupConfigsEqual(draftConfig, editorContext.originalConfig);
  const hasDraftChanges = hasUnsavedEditorChanges || hasActiveEditorChanges;
  const formattedSaveName = formatSavedSetupName(saveName);
  const duplicateSetupForName = getDuplicateSavedSetupForName({
    excludeSetupId: isEditingSavedSetup ? editorContext.setupId : undefined,
    name: formattedSaveName,
    savedSetups,
  });
  const duplicateSetupForNewCopy = getDuplicateSavedSetupForName({
    name: formattedSaveName,
    savedSetups,
  });
  const nameBelongsToCurrentSetup =
    isEditingSavedSetup &&
    !duplicateSetupForName &&
    duplicateSetupForNewCopy !== null &&
    duplicateSetupForNewCopy.id === editorContext.setupId;
  const nameError = duplicateSetupForName
    ? "Există deja o configurație cu acest nume."
    : null;
  const nameHint = getSaveNameHint({
    formattedSaveName,
    nameBelongsToCurrentSetup,
    nameError,
  });
  const canSaveNamedDraft =
    Boolean(formattedSaveName) && canStart && !duplicateSetupForName;
  const canUpdateSavedSetup =
    isEditingSavedSetup && hasUnsavedEditorChanges && canSaveNamedDraft;
  const canSaveAsNewSetup = canSaveNamedDraft && !duplicateSetupForNewCopy;
  const editorContextLabel =
    editorContext.kind === "editing-saved"
      ? `Editezi: ${editorContext.originalName}`
      : editorContext.kind === "active"
        ? "Configurația activă"
        : "Configurație nouă";
  const editorContextStatus = getEditorContextStatus({
    editorContext,
    hasDraftChanges,
  });
  const cardBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    cardBodyRef.current?.scrollTo({ left: 0, top: 0 });
  }, [activeStep]);

  function goToNextStep() {
    if (activeStep === "rules") {
      setActiveStep("exclusions");
      return;
    }

    if (activeStep === "exclusions" && !isBlockedByExclusions) {
      setActiveStep("words");
      return;
    }

    if (activeStep === "words" && canContinueFromWords) {
      setActiveStep("finish");
    }
  }

  function goToPreviousStep() {
    if (activeStep === "finish") {
      setActiveStep("words");
      return;
    }

    if (activeStep === "words") {
      setActiveStep("exclusions");
      return;
    }

    if (activeStep === "exclusions") {
      setActiveStep("rules");
    }
  }

  function selectStep(step: SetupWizardStep) {
    if (
      isBlockedByExclusions &&
      (step === "words" || step === "finish")
    ) {
      return;
    }

    setActiveStep(step);
  }

  function toggleExcludedTarget(targetKey: string) {
    onUpdateDraftExclusions(
      draftConfig.excludedTargetKeys.includes(targetKey)
        ? draftConfig.excludedTargetKeys.filter((key) => key !== targetKey)
        : [...draftConfig.excludedTargetKeys, targetKey],
    );
  }

  return (
    <section
      className="setup-wizard"
      data-step={activeStep}
      aria-labelledby="setup-title"
    >
      <aside className="setup-wizard-rail" aria-label="Pași configurare">
        <div className="setup-wizard-rail__header">
          <div className="setup-page-title">
            <p className="stage-label">
              {targetKindLabel} {targetLabel}
            </p>
            <h2 id="setup-title">Setează roata</h2>
            <p className="setup-editor-context-label">{editorContextLabel}</p>
          </div>
          {onBackToChooser ? (
            <button
              className="secondary-button setup-inline-action"
              onClick={onBackToChooser}
              type="button"
            >
              Configurații salvate
            </button>
          ) : null}
        </div>

        <div className="setup-stepper">
          {setupWizardSteps.map((step, index) => {
            const isActive = step.id === activeStep;
            const isComplete = index < activeStepIndex;

            return (
              <button
                aria-current={isActive ? "step" : undefined}
                className="setup-step"
                data-active={isActive ? "true" : undefined}
                data-complete={isComplete ? "true" : undefined}
                disabled={
                  isBlockedByExclusions &&
                  (step.id === "words" || step.id === "finish")
                }
                key={step.id}
                onClick={() => selectStep(step.id)}
                type="button"
              >
                <span className="setup-step__number">{step.number}</span>
                <span>
                  <strong>{step.label}</strong>
                  <small>{step.title}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="setup-rail-summary" aria-label="Rezumat configurare">
          <span>{activeModeOption.statusLabel} {targetLabel}</span>
          <strong>
            {canStart ? boundedWheelWordCount : countControlWordCount}{" "}
            {getWordCountLabel(canStart ? boundedWheelWordCount : countControlWordCount)}
          </strong>
          {exclusionSummary ? <span>{exclusionSummary}</span> : null}
          <span>{sourceSummary}</span>
        </div>
      </aside>

      <section className="setup-wizard-card" data-step={activeStep}>
        <header className="setup-wizard-card__header">
          <p className="stage-label">
            Pasul {activeStepDetails.number} din {setupWizardSteps.length}
          </p>
          <h3>{activeStepDetails.title}</h3>
        </header>

        <div className="setup-wizard-card__body" ref={cardBodyRef}>
          {activeStep === "rules" ? (
            <div className="setup-step-panel setup-step-panel--rules">
              <section className="setup-section" aria-label="Mod cuvinte">
                <div className="setup-section-heading">
                  <h4>Mod</h4>
                  <span>{activeModeOption.statusLabel}</span>
                </div>
                <div className="setup-option-grid" role="group">
                  {wheelSetupModeOptions.map((option) => {
                    const isSelected = option.mode === draftConfig.mode;

                    return (
                      <button
                        aria-label={`${option.statusLabel} ${targetLabel}, ${
                          baseModeWordCounts[option.mode]
                        } ${getWordCountLabel(
                          baseModeWordCounts[option.mode],
                        )}`}
                        aria-pressed={isSelected}
                        className="setup-option-card"
                        data-active={isSelected ? "true" : undefined}
                        key={option.mode}
                        onClick={() => onUpdateDraftMode(option.mode)}
                        type="button"
                      >
                        <strong>{option.label}</strong>
                        <small>
                          {option.mode === "starts-with"
                            ? `${option.helperLabel} ${targetLabel}`
                            : option.helperLabel}
                        </small>
                        <span>
                          {baseModeWordCounts[option.mode]}{" "}
                          {getWordCountLabel(baseModeWordCounts[option.mode])}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

            </div>
          ) : null}

          {activeStep === "exclusions" ? (
            <ExclusionStep
              baseWordCount={baseWordCount}
              emptyState={filteredEmptyState}
              excludedTargetKeys={draftConfig.excludedTargetKeys}
              filteredWordCount={filteredWordCount}
              onClear={() => onUpdateDraftExclusions([])}
              onToggleTarget={toggleExcludedTarget}
              targetLabel={targetLabel}
              targets={exclusionTargets}
            />
          ) : null}

          {activeStep === "words" ? (
            <div className="setup-step-panel setup-step-panel--words">
              <div className="setup-source-tabs" role="group" aria-label="Sursă cuvinte">
                <button
                  aria-pressed={draftConfig.wordSelectionMode === "all"}
                  data-active={
                    draftConfig.wordSelectionMode === "all" ? "true" : undefined
                  }
                  onClick={() => onSetWordSource("all")}
                  type="button"
                >
                  Toate
                </button>
                <button
                  aria-pressed={draftConfig.wordSelectionMode === "custom"}
                  data-active={
                    draftConfig.wordSelectionMode === "custom"
                      ? "true"
                      : undefined
                  }
                  onClick={() => onSetWordSource("custom")}
                  type="button"
                >
                  Aleg manual
                </button>
              </div>
              {draftConfig.wordSelectionMode === "all" ? (
                <AllWordsStep
                  count={availableWordCount}
                  exclusionSummary={exclusionSummary}
                  modeLabel={activeModeOption.statusLabel}
                  targetLabel={targetLabel}
                  words={words}
                />
              ) : (
                <>
                  {selectedWordIds.length > 0 ? (
                    <div className="setup-selected-summary">
                      <SelectedWordTray words={selectedWords} />
                      <button
                        className="secondary-button"
                        onClick={onResetToAllWords}
                        type="button"
                      >
                        Resetează la toate cuvintele
                      </button>
                    </div>
                  ) : null}
                  <WordPicker
                    isHydrated={isHydrated}
                    onResetToAllWords={onResetToAllWords}
                    onSelectDisplayedWords={onSelectDisplayedWords}
                    onToggleSelectedWord={onToggleSelectedWord}
                    selectedWordIds={selectedWordIds}
                    targetLabel={targetLabel}
                    words={words}
                  />
                </>
              )}
            </div>
          ) : null}

          {activeStep === "finish" ? (
            <div className="setup-step-panel setup-step-panel--finish">
              <section className="setup-section" aria-label="Număr de cuvinte pe roată">
                <div className="setup-section-heading">
                  <h4>Cuvinte pe roată</h4>
                  <span>max {maxWheelWordCount}</span>
                </div>
                <div className="setup-count-card" role="group">
                  <button
                    aria-label="Mai puține cuvinte pe roată"
                    disabled={countControlWordCount <= 1}
                    onClick={() =>
                      onUpdateDraftWordCount(countControlWordCount - 1)
                    }
                    type="button"
                  >
                    -
                  </button>
                  <strong>{countControlWordCount}</strong>
                  <button
                    aria-label="Mai multe cuvinte pe roată"
                    disabled={countControlWordCount >= maxWheelWordCount}
                    onClick={() =>
                      onUpdateDraftWordCount(countControlWordCount + 1)
                    }
                    type="button"
                  >
                    +
                  </button>
                  <span>
                    {availableWordCount}{" "}
                    {getWordCountLabel(availableWordCount)} disponibile
                  </span>
                </div>
              </section>

              <section className="setup-finish-summary" aria-label="Rezumat">
                <div>
                  <span>Mod</span>
                  <strong>
                    {activeModeOption.statusLabel} {targetLabel}
                  </strong>
                </div>
                {exclusionSummary ? (
                  <div>
                    <span>Evită</span>
                    <strong>{exclusionSummary}</strong>
                  </div>
                ) : null}
                <div>
                  <span>Disponibile</span>
                  <strong>{availableWordCount}</strong>
                </div>
                <div>
                  <span>Sursă</span>
                  <strong>{sourceSummary}</strong>
                </div>
              </section>

              <section className="setup-save-panel" aria-label="Salvare configurație">
                <div className="setup-section-heading">
                  <h4>Configurație</h4>
                </div>
                <div
                  className="setup-edit-context"
                  data-dirty={hasDraftChanges ? "true" : undefined}
                >
                  <strong>{editorContextLabel}</strong>
                  <span>{editorContextStatus}</span>
                </div>
                <label
                  className="setup-word-search"
                  data-invalid={nameError ? "true" : undefined}
                >
                  <span>Nume configurație</span>
                  <input
                    aria-describedby="setup-save-name-help"
                    aria-invalid={nameError ? "true" : undefined}
                    autoComplete="off"
                    onChange={(event) => onSetSaveName(event.target.value)}
                    type="text"
                    value={saveName}
                  />
                </label>
                <p
                  className="setup-save-help"
                  data-invalid={nameError ? "true" : undefined}
                  id="setup-save-name-help"
                >
                  {nameHint}
                </p>
                {saveFeedback ? (
                  <p
                    className="setup-save-feedback"
                    data-kind={saveFeedback.kind}
                    role={saveFeedback.kind === "error" ? "alert" : "status"}
                  >
                    {saveFeedback.message}
                  </p>
                ) : null}
                <div className="setup-save-panel__actions">
                  {isEditingSavedSetup ? (
                    <>
                      <button
                        className="secondary-button"
                        disabled={!canUpdateSavedSetup}
                        onClick={() =>
                          onSaveDraft({ action: "update-existing" })
                        }
                        type="button"
                      >
                        Salvează modificările
                      </button>
                      <button
                        className="secondary-button"
                        disabled={!canSaveAsNewSetup}
                        onClick={() =>
                          onSaveDraft({ action: "save-as-new" })
                        }
                        type="button"
                      >
                        Salvează ca nouă
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="secondary-button"
                        disabled={!canSaveAsNewSetup}
                        onClick={() =>
                          onSaveDraft({ action: "save-as-new" })
                        }
                        type="button"
                      >
                        Salvează ca nouă
                      </button>
                      <button
                        className="secondary-button"
                        disabled={!canSaveAsNewSetup}
                        onClick={() =>
                          onSaveDraft({
                            action: "save-as-new",
                            startAfterSave: true,
                          })
                        }
                        type="button"
                      >
                        Salvează și pornește
                      </button>
                    </>
                  )}
                </div>
              </section>
            </div>
          ) : null}
        </div>

        <footer className="setup-wizard-card__footer">
          <button
            className="secondary-button"
            disabled={activeStep === "rules"}
            onClick={goToPreviousStep}
            type="button"
          >
            Înapoi
          </button>
          <div className="setup-wizard-card__footer-actions">
            {activeStep !== "finish" ? (
              <button
                className="spin-button"
                disabled={
                  (activeStep === "exclusions" && isBlockedByExclusions) ||
                  (activeStep === "words" && !canContinueFromWords)
                }
                onClick={goToNextStep}
                type="button"
              >
                Continuă
              </button>
            ) : null}
            {activeStep === "finish" ? (
              <button
                className="spin-button"
                disabled={!canStart}
                onClick={onStart}
                type="button"
              >
                Pornește roata
              </button>
            ) : null}
          </div>
        </footer>
      </section>
    </section>
  );
}

function ExclusionStep({
  baseWordCount,
  emptyState,
  excludedTargetKeys,
  filteredWordCount,
  onClear,
  onToggleTarget,
  targetLabel,
  targets,
}: Readonly<{
  baseWordCount: number;
  emptyState: ReturnType<typeof getWheelSetupEmptyStateKind>;
  excludedTargetKeys: readonly string[];
  filteredWordCount: number;
  onClear: () => void;
  onToggleTarget: (targetKey: string) => void;
  targetLabel: string;
  targets: readonly ExclusionTarget[];
}>) {
  const selectedTargetKeySet = useMemo(
    () => new Set(excludedTargetKeys),
    [excludedTargetKeys],
  );
  const letterTargets = targets.filter((target) => target.kind === "letter");
  const sequenceTargets = targets.filter(
    (target) => target.kind === "sequence",
  );
  const selectedSummary =
    excludedTargetKeys.length > 0
      ? `${filteredWordCount} rămân · ${
          baseWordCount - filteredWordCount
        } eliminate`
      : "Nicio țintă evitată";

  return (
    <div className="setup-step-panel setup-step-panel--exclusions">
      <section className="setup-exclusion-impact" aria-label="Impact excluderi">
        <div>
          <span>Disponibile</span>
          <strong>{baseWordCount}</strong>
        </div>
        <div data-empty={emptyState === "all-excluded" ? "true" : undefined}>
          <span>După excluderi</span>
          <strong>{filteredWordCount}</strong>
        </div>
        <div>
          <span>Stare</span>
          <strong>{selectedSummary}</strong>
        </div>
      </section>

      {emptyState === "all-excluded" ? (
        <section className="setup-exclusion-recovery" role="status">
          <strong>Nu există cuvinte pentru {targetLabel} cu aceste excluderi.</strong>
          <span>Scoate o excludere sau schimbă regula.</span>
        </section>
      ) : null}

      <p className="setup-muted">
        Alege litere sau grupuri pe care vrei să le eviți în această roată.
        Cuvintele care conțin țintele alese nu vor apărea în joc.
      </p>

      <section className="setup-section" aria-label="Litere excluse">
        <div className="setup-section-heading">
          <h4>Litere</h4>
          <span>{letterTargets.length}</span>
        </div>
        <ExclusionChipList
          onToggleTarget={onToggleTarget}
          selectedTargetKeySet={selectedTargetKeySet}
          targets={letterTargets}
        />
      </section>

      <section className="setup-section" aria-label="Grupuri excluse">
        <div className="setup-section-heading">
          <h4>Grupuri</h4>
          <span>{sequenceTargets.length}</span>
        </div>
        <ExclusionChipList
          onToggleTarget={onToggleTarget}
          selectedTargetKeySet={selectedTargetKeySet}
          targets={sequenceTargets}
        />
      </section>

      {excludedTargetKeys.length > 0 ? (
        <button
          className="secondary-button setup-exclusion-clear"
          onClick={onClear}
          type="button"
        >
          Șterge excluderile
        </button>
      ) : null}
    </div>
  );
}

function ExclusionChipList({
  onToggleTarget,
  selectedTargetKeySet,
  targets,
}: Readonly<{
  onToggleTarget: (targetKey: string) => void;
  selectedTargetKeySet: ReadonlySet<string>;
  targets: readonly ExclusionTarget[];
}>) {
  return (
    <div className="setup-exclusion-chip-grid" role="group">
      {targets.map((target) => {
        const isSelected = selectedTargetKeySet.has(target.key);

        return (
          <button
            aria-pressed={isSelected}
            className="setup-exclusion-chip"
            data-active={isSelected ? "true" : undefined}
            key={target.key}
            onClick={() => onToggleTarget(target.key)}
            type="button"
          >
            {target.label}
          </button>
        );
      })}
    </div>
  );
}

function WordPicker({
  isHydrated,
  isMobile = false,
  onResetToAllWords,
  onSelectDisplayedWords,
  onToggleSelectedWord,
  selectedWordIds,
  targetLabel,
  words,
}: Readonly<{
  isHydrated: boolean;
  isMobile?: boolean;
  onResetToAllWords: () => void;
  onSelectDisplayedWords: (wordIds: readonly string[]) => void;
  onToggleSelectedWord: (wordId: string) => void;
  selectedWordIds: readonly string[];
  targetLabel: string;
  words: readonly ContentWord[];
}>) {
  const [wordSearch, setWordSearch] = useState("");
  const selectedWordIdSet = useMemo(
    () => new Set(selectedWordIds),
    [selectedWordIds],
  );
  const filteredWords = useMemo(() => {
    const normalizedSearch = wordSearch.trim().toLocaleLowerCase("ro-RO");

    if (!normalizedSearch) {
      return words;
    }

    return words.filter((word) =>
      word.display.toLocaleLowerCase("ro-RO").includes(normalizedSearch),
    );
  }, [wordSearch, words]);
  const filteredWordIds = filteredWords.map((word) => word.id);
  let emptyMessage = "Se încarcă...";

  if (wordSearch) {
    emptyMessage = "Nu sunt rezultate.";
  } else if (isHydrated) {
    emptyMessage = "Nu sunt cuvinte disponibile.";
  }

  return (
    <section
      className={isMobile ? "setup-word-picker is-mobile" : "setup-word-picker"}
      aria-label={`Cuvinte pentru ${targetLabel}`}
    >
      <div className="setup-word-picker__header">
        <div>
          <p className="stage-label">Cuvinte</p>
          <h3>
            {selectedWordIds.length}{" "}
            {getSelectedWordStatusLabel(selectedWordIds.length)}
          </h3>
        </div>
        {selectedWordIds.length > 0 ? (
          <button
            className="secondary-button"
            onClick={onResetToAllWords}
            type="button"
          >
            Resetează la toate cuvintele
          </button>
        ) : null}
      </div>

      <div className="setup-word-tools">
        <label className="setup-word-search">
          <span>Caută</span>
          <input
            autoComplete="off"
            onChange={(event) => setWordSearch(event.target.value)}
            type="search"
            value={wordSearch}
          />
        </label>
        <div className="setup-word-tools__actions">
          <button
            className="secondary-button"
            disabled={filteredWordIds.length === 0}
            onClick={() => onSelectDisplayedWords(filteredWordIds)}
            type="button"
          >
            Alege afișate
          </button>
        </div>
      </div>

      <div className="setup-word-list" role="group">
        {isHydrated && filteredWords.length > 0 ? (
          filteredWords.map((word) => (
            <label className="setup-word-row" key={word.id}>
              <input
                checked={selectedWordIdSet.has(word.id)}
                onChange={() => onToggleSelectedWord(word.id)}
                type="checkbox"
              />
              <span className="setup-word-row__thumb" aria-hidden="true">
                {hasReadyImage(word) ? (
                  <Image
                    alt=""
                    height={40}
                    src={word.image}
                    unoptimized
                    width={40}
                  />
                ) : (
                  getWordInitial(word)
                )}
              </span>
              <span className="setup-word-row__text">{word.display}</span>
            </label>
          ))
        ) : (
          <div className="setup-picker-empty">{emptyMessage}</div>
        )}
      </div>
    </section>
  );
}

function AllWordsStep({
  count,
  exclusionSummary,
  modeLabel,
  targetLabel,
  words,
}: Readonly<{
  count: number;
  exclusionSummary: string | null;
  modeLabel: string;
  targetLabel: string;
  words: readonly ContentWord[];
}>) {
  return (
    <section className="setup-all-words" aria-label="Toate cuvintele">
      <div className="setup-all-words__hero">
        <div>
          <p className="stage-label">Sursă</p>
          <h3>Toate cuvintele</h3>
        </div>
        <strong>{count}</strong>
      </div>
      <p className="setup-muted">
        Roata va folosi lista completă pentru {modeLabel.toLocaleLowerCase(
          "ro-RO",
        )}{" "}
        {targetLabel}
        {exclusionSummary ? `, ${exclusionSummary.toLocaleLowerCase("ro-RO")}` : ""}.
        Poți continua sau poți alege manual cuvintele.
      </p>
      <div className="setup-preview-list" aria-label="Previzualizare cuvinte">
        {words.slice(0, 8).map((word) => (
          <span key={word.id}>
            {hasReadyImage(word) ? (
              <Image alt="" height={28} src={word.image} unoptimized width={28} />
            ) : (
              <span aria-hidden="true">{getWordInitial(word)}</span>
            )}
            {word.display}
          </span>
        ))}
      </div>
    </section>
  );
}

function SelectedWordTray({ words }: Readonly<{ words: readonly ContentWord[] }>) {
  if (words.length === 0) {
    return <p className="setup-muted">Nu ai ales încă niciun cuvânt.</p>;
  }

  return (
    <div className="selected-word-tray" aria-label="Cuvinte alese">
      {words.slice(0, 10).map((word) => (
        <span key={word.id}>{word.display}</span>
      ))}
      {words.length > 10 ? <span>+{words.length - 10}</span> : null}
    </div>
  );
}

function DeleteSetupConfirmation({
  onCancel,
  onConfirm,
  setup,
}: Readonly<{
  onCancel: () => void;
  onConfirm: () => void;
  setup: SavedWheelSetup;
}>) {
  return (
    <div className="result-backdrop" role="presentation">
      <section
        aria-labelledby="delete-setup-title"
        aria-modal="true"
        className="delete-confirmation"
        role="dialog"
      >
        <div>
          <p className="stage-label">Ștergere</p>
          <h2 id="delete-setup-title">Ștergi această configurație?</h2>
        </div>
        <strong className="delete-confirmation__name">{setup.name}</strong>
        <p className="setup-muted">
          Se șterge doar configurația salvată în acest browser. Cuvintele și
          imaginile rămân neschimbate.
        </p>
        <div className="setup-modal__actions">
          <button className="secondary-button" onClick={onCancel} type="button">
            Anulează
          </button>
          <button className="spin-button" onClick={onConfirm} type="button">
            Șterge
          </button>
        </div>
      </section>
    </div>
  );
}

function getSetupSummary(config: WheelSetupConfig, locale: SupportedLocale) {
  return formatSummaryParts([
    getExclusionSummary(config.excludedTargetKeys, locale),
    getModeOption(config.mode).label,
    `${config.wheelWordCount} pe roată`,
    "toate cuvintele",
  ]);
}

function getSavedSetupSummary(setup: SavedWheelSetup, locale: SupportedLocale) {
  const selectedStatus =
    setup.config.wordSelectionMode === "custom"
      ? `${setup.config.selectedWordIds.length} ${getSelectedWordStatusLabel(
          setup.config.selectedWordIds.length,
        )}`
      : "toate cuvintele";

  return formatSummaryParts([
    getExclusionSummary(setup.config.excludedTargetKeys, locale),
    getModeOption(setup.config.mode).label,
    `${setup.config.wheelWordCount} pe roată`,
    selectedStatus,
    formatSavedDate(setup.updatedAt),
  ]);
}

function getExclusionSummary(
  excludedTargetKeys: readonly string[],
  locale: SupportedLocale,
) {
  return getExcludedTargetsSummary({ excludedTargetKeys, locale });
}

function formatSummaryParts(parts: readonly (string | null)[]) {
  return parts.filter((part): part is string => Boolean(part)).join(" · ");
}

function formatSavedDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "salvată local";
  }

  return new Intl.DateTimeFormat("ro-RO", {
    day: "2-digit",
    month: "short",
  }).format(date);
}

function areSetupConfigsEqual(
  firstConfig: WheelSetupConfig,
  secondConfig: WheelSetupConfig,
) {
  return (
    firstConfig.mode === secondConfig.mode &&
    firstConfig.wheelWordCount === secondConfig.wheelWordCount &&
    firstConfig.wordSelectionMode === secondConfig.wordSelectionMode &&
    areStringArraysEqual(
      firstConfig.excludedTargetKeys,
      secondConfig.excludedTargetKeys,
    ) &&
    areStringArraysEqual(
      firstConfig.selectedWordIds,
      secondConfig.selectedWordIds,
    )
  );
}

function areStringArraysEqual(
  firstValues: readonly string[],
  secondValues: readonly string[],
) {
  return (
    firstValues.length === secondValues.length &&
    firstValues.every((value, index) => value === secondValues[index])
  );
}

function getEditorContextStatus({
  editorContext,
  hasDraftChanges,
}: Readonly<{
  editorContext: SetupEditorContext;
  hasDraftChanges: boolean;
}>) {
  if (editorContext.kind === "new") {
    return "Nesalvată";
  }

  if (editorContext.kind === "active") {
    return hasDraftChanges ? "Modificări neaplicate" : "Folosită acum în joc";
  }

  return hasDraftChanges ? "Modificări nesalvate" : "Salvată";
}

function getDuplicateSavedSetupForName({
  excludeSetupId,
  name,
  savedSetups,
}: Readonly<{
  excludeSetupId?: string;
  name: string;
  savedSetups: readonly SavedWheelSetup[];
}>) {
  const normalizedName = normalizeSavedSetupName(name);

  if (!normalizedName) {
    return null;
  }

  return (
    savedSetups.find(
      (setup) =>
        setup.id !== excludeSetupId &&
        normalizeSavedSetupName(setup.name) === normalizedName,
    ) ?? null
  );
}

function getSaveNameHint({
  formattedSaveName,
  nameBelongsToCurrentSetup,
  nameError,
}: Readonly<{
  formattedSaveName: string;
  nameBelongsToCurrentSetup: boolean;
  nameError: string | null;
}>) {
  if (nameError) {
    return nameError;
  }

  if (!formattedSaveName) {
    return "Alege un nume pentru salvare.";
  }

  if (nameBelongsToCurrentSetup) {
    return "Pentru o copie nouă, schimbă numele.";
  }

  return "Numele este folosit doar în acest browser.";
}

function formatSavedSetupName(name: string) {
  return name.trim().replace(/\s+/g, " ");
}

function normalizeSavedSetupName(name: string) {
  return formatSavedSetupName(name).toLocaleLowerCase("ro-RO");
}

function hasReadyImage(word: ContentWord) {
  return word.imageStatus === "ready";
}

function getWordInitial(word: ContentWord) {
  return word.display.slice(0, 1).toLocaleUpperCase("ro-RO");
}
