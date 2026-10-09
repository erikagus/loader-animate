// A center dot with a ring that expands outward from it and fades as it grows, like a sonar ping.
const css = `
.la-pulse{position:relative;display:inline-grid;place-items:center;width:3em;height:3em;font:var(--size)/1 monospace;color:var(--color)}
.la-pulse>.la-dot{grid-area:1/1;font-size:.5em;z-index:1}
.la-pulse>.la-ring{grid-area:1/1;display:grid;place-items:center;width:100%;height:100%}
.la-pulse>.la-ring>span{display:inline-block;font-size:.5em;animation:la-pulse var(--dur) ease-out infinite}
.la-pulse>.la-ring:nth-child(2)>span{animation-delay:calc(var(--dur)*-.5)}
@keyframes la-pulse{
  0%{transform:scale(1);opacity:.6}
  100%{transform:scale(4.5);opacity:0}
}`;

export default function Pulse({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-pulse"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${2 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-ring" aria-hidden="true">
        <span>●</span>
      </span>
      <span className="la-ring" aria-hidden="true">
        <span>●</span>
      </span>
      <span className="la-dot" aria-hidden="true">●</span>
    </span>
  );
}
