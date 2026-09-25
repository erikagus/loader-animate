const CHARS = ["█", "▓", "▒", "░"];

const css = `
.la-snake{position:relative;display:inline-block;width:2.6em;height:2.3em;font:var(--size)/1 monospace;color:var(--color)}
.la-snake>span{position:absolute;top:0;left:0;width:.8em;height:.7em;overflow:hidden;text-align:center;line-height:.7;animation:la-snake var(--dur) linear infinite;animation-delay:calc(var(--dur)*(var(--i) - ${CHARS.length - 1})*.125)}
@keyframes la-snake{
  0%{transform:translate(0,0)}
  25%{transform:translate(1.8em,0)}
  50%{transform:translate(1.8em,1.6em)}
  75%{transform:translate(0,1.6em)}
  100%{transform:translate(0,0)}
}`;

export default function SquareSnake({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-snake"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.6 / speed}s` }}
    >
      <style>{css}</style>
      {CHARS.map((c, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i }}>
          {c}
        </span>
      ))}
    </span>
  );
}
