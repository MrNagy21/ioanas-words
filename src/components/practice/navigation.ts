/** Browser history for adult menus. Storage keys and child data are untouched. */
type Workspace = {
  childId: string | null;
  utility: "library" | "settings" | null;
  editor: "new" | "edit" | null;
};
type Profile = {
  childId: string;
  screen: string;
  goalId?: string;
  pronunciation?: {
    page: string;
    goalId?: string;
    correctsId?: string;
    rating: number | null;
  };
};
export type PracticeLocation = {
  wordWheelWorkspace?: Workspace;
  wordWheelProfile?: Profile | null;
};
function snapshot(): PracticeLocation {
  const state = window.history.state;
  return {
    wordWheelWorkspace: state?.wordWheelWorkspace,
    wordWheelProfile: state?.wordWheelProfile,
  };
}
export function pushPracticeLocation(patch: PracticeLocation) {
  const current = window.history.state ?? {};
  window.history.pushState(
    {
      ...current,
      ...patch,
      wordWheelTrail: [...(current.wordWheelTrail ?? []), snapshot()],
    },
    "",
  );
}
export function replacePracticeLocation(patch: PracticeLocation) {
  window.history.replaceState({ ...window.history.state, ...patch }, "");
}
/** Return to the existing parent entry; never push a duplicate parent. */
export function returnToPracticeLocation(
  matches: (location: PracticeLocation) => boolean,
  fallback: PracticeLocation,
) {
  const trail: PracticeLocation[] = window.history.state?.wordWheelTrail ?? [];
  for (let index = trail.length - 1; index >= 0; index--) {
    if (matches(trail[index])) {
      window.history.go(index - trail.length);
      return;
    }
  }
  replacePracticeLocation(fallback);
  window.dispatchEvent(
    new PopStateEvent("popstate", { state: window.history.state }),
  );
}
export function isProfileLocation(
  location: PracticeLocation,
  childId: string,
  screen: string,
) {
  return (
    location.wordWheelProfile?.childId === childId &&
    location.wordWheelProfile.screen === screen &&
    !location.wordWheelWorkspace?.utility &&
    !location.wordWheelWorkspace?.editor
  );
}
