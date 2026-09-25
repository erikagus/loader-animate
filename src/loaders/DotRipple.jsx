const SIZE = 5;
const MID = (SIZE - 1) / 2;

const css = `
.la-ripple{display:inline-grid;grid-template-columns:repeat(${SIZE},1em);gap:.1em;font:var(--size)/1 monospace;color:var(--color)}
.la-ripple>span{display:block;height:1em;text-align:center;font-size:.9em;transform:scale(.3);opacity:.25;animation:la-ripple var(--dur) ease-in-out infinite;animation-delay:calc(var(--d)*var(--dur)*.09)}
@keyframes la-ripple{
  0%,55%,100%{transform:scale(.3);opacity:.25}
  25%{transform:scale(1);opacity:1}
}`;

export default function DotRipple({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-ripple"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.6 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: SIZE * SIZE }, (_, i) => {
        const d = Math.hypot((i % SIZE) - MID, Math.floor(i / SIZE) - MID);
        return (
          <span key={i} aria-hidden="true" style={{ "--d": d.toFixed(2) }}>
            ●
          </span>
        );
      })}
    </span>
  );
}
