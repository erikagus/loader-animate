const SIZE = 3;

const css = `
.la-grid{display:inline-grid;grid-template-columns:repeat(${SIZE},.8em);gap:.2em .12em;font:var(--size)/1 monospace;color:var(--color)}
.la-grid>span{display:block;height:.7em;overflow:hidden;text-align:center;line-height:.7}
.la-grid>span::before{content:"█";animation:la-grid var(--dur) linear infinite;animation-delay:calc(var(--d)*.12s)}
@keyframes la-grid{
  0%{content:"█"}
  25%{content:"▓"}
  50%{content:"▒"}
  75%{content:"░"}
  100%{content:"█"}
}`;

export default function SquareGrid({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-grid"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.4 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: SIZE * SIZE }, (_, i) => (
        <span key={i} aria-hidden="true" style={{ "--d": Math.floor(i / SIZE) + (i % SIZE) }} />
      ))}
    </span>
  );
}
