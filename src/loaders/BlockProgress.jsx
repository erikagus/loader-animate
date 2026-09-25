const CELLS = 10;

// The fill is revealed by sliding a clipping window right while its text slides left by the same amount.
const css = `
.la-progress{position:relative;display:inline-block;font:var(--size)/1 monospace;color:var(--color);white-space:nowrap}
.la-progress>.la-track{opacity:.35}
.la-progress>.la-fill{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;animation:la-progress-window var(--dur) steps(${CELLS},end) infinite}
.la-progress>.la-fill>span{display:block;animation:la-progress-text var(--dur) steps(${CELLS},end) infinite}
@keyframes la-progress-window{
  0%{transform:translateX(-100%)}
  90%,100%{transform:translateX(0)}
}
@keyframes la-progress-text{
  0%{transform:translateX(100%)}
  90%,100%{transform:translateX(0)}
}`;

export default function BlockProgress({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-progress"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${2.2 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-track" aria-hidden="true">{"░".repeat(CELLS)}</span>
      <span className="la-fill" aria-hidden="true">
        <span>{"█".repeat(CELLS)}</span>
      </span>
    </span>
  );
}
