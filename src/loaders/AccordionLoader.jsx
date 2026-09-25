const CHARS = ["█", "▓", "▒", "░"];

const css = `
.la-accordion{position:relative;display:inline-block;width:2.6em;height:1em;font:var(--size)/1 monospace;color:var(--color)}
.la-accordion>span{position:absolute;top:0;left:0;animation:la-accordion var(--dur) ease-in-out infinite alternate;animation-delay:calc(var(--i)*.1s)}
@keyframes la-accordion{
  from{transform:translateX(calc(var(--j)*.65em))}
  to{transform:translateX(calc(var(--j)*.15em))}
}`;

export default function AccordionLoader({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-accordion"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1 / speed}s` }}
    >
      <style>{css}</style>
      {CHARS.map((c, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i, "--j": CHARS.length - 1 - i }}>
          {c}
        </span>
      ))}
    </span>
  );
}
