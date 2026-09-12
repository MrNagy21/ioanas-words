import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WordWheelShell } from "../../src/components/word-wheel-shell";
import {
  getDerivedWordPoolsForTarget,
  getGameplayTargetFromRouteSegment,
} from "../../src/content/loaders";

// Exercise the real component with fresh server-like props, without a dev server.
const root = createRoot(document.getElementById("root")!);
function renderTarget(route = "d") {
  const target = getGameplayTargetFromRouteSegment("ro", route)!;
  const content = structuredClone({
    target,
    wordPools: getDerivedWordPoolsForTarget("ro", target),
  });
  root.render(
    <StrictMode>
      <WordWheelShell
        letters={[]}
        locale="ro"
        practiceTargets={[]}
        selectedContent={content}
      />
    </StrictMode>,
  );
}

Object.assign(window, { renderTarget });
renderTarget();
