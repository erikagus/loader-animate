const DOTS = 3;

const css = `
.la-typing{display:inline-flex;align-items:center;gap:.3em;height:1.6em;font:var(--size)/1 monospace;color:var(--color)}
.la-typing>span{display:inline-block;font-size:.8em;animation:la-typing var(--dur) ease-in-out infinite;animation-delay:calc(var(--i)*.15s)}
@keyframes la-typing{
  0%,60%,100%{transform:translateY(0);opacity:.3}
  30%{transform:translateY(-.5em);opacity:1}
}`;

export default function TypingDots({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-typing"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.2 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: DOTS }, (_, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i }}>
          ●
        </span>
      ))}
    </span>
  );
}
