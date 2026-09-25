const CHARS = ["█", "▓", "▒", "░"];
const TRACK = 8;

const css = `
.la-conveyor{position:relative;display:inline-block;width:calc(${TRACK}*1ch);height:1em;overflow:hidden;font:var(--size)/1 monospace;color:var(--color)}
.la-conveyor>span{position:absolute;top:0;left:0;animation:la-conveyor var(--dur) linear infinite;animation-delay:calc(var(--i)*.09s)}
@keyframes la-conveyor{
  from{transform:translateX(-1ch)}
  to{transform:translateX(calc(${TRACK}*1ch))}
}`;

export default function ConveyorLoop({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-conveyor"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.2 / speed}s` }}
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
