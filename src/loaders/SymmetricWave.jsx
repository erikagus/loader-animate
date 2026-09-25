const CHARS = ["█", "▓", "▒", "░"];
const BARS = 7;

const css = `
.la-wave{display:inline-flex;align-items:center;gap:.12em;font:var(--size)/1 monospace;color:var(--color)}
.la-wave>span{display:inline-block;animation:la-wave var(--dur) ease-in-out infinite;animation-delay:calc(var(--d)*.1s)}
@keyframes la-wave{
  0%,100%{transform:scaleY(.25);opacity:.4}
  50%{transform:scaleY(1);opacity:1}
}`;

export default function SymmetricWave({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  const mid = Math.floor(BARS / 2);
  return (
    <span
      role="status"
      aria-label={label}
      className="la-wave"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.2 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: BARS }, (_, i) => {
        const d = Math.abs(i - mid);
        return (
          <span key={i} aria-hidden="true" style={{ "--d": d }}>
            {CHARS[Math.min(d, CHARS.length - 1)]}
          </span>
        );
      })}
    </span>
  );
}
