const BARS = 9;

const css = `
.la-heartbeat{display:inline-flex;align-items:center;gap:.1em;height:2em;font:var(--size)/1 monospace;color:var(--color)}
.la-heartbeat>span{display:inline-block;transform:scaleY(.15);animation:la-heartbeat var(--dur) ease-in-out infinite;animation-delay:calc(var(--i)*.07s)}
@keyframes la-heartbeat{
  0%{transform:scaleY(.15)}
  10%{transform:scaleY(1.4)}
  20%{transform:scaleY(.25)}
  30%{transform:scaleY(.7)}
  42%,100%{transform:scaleY(.15)}
}`;

export default function Heartbeat({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-heartbeat"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.3 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: BARS }, (_, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i }}>
          █
        </span>
      ))}
    </span>
  );
}
