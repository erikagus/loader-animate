const BALLS = 3;

const css = `
.la-bounce-row{display:inline-flex;align-items:flex-end;gap:.35em;height:2em;padding-top:1em;font:var(--size)/1 monospace;color:var(--color)}
.la-bounce-row>span{display:inline-block;transform-origin:50% 100%;animation:la-bounce-row var(--dur) infinite;animation-delay:calc(var(--i)*.14s)}
@keyframes la-bounce-row{
  0%{transform:translateY(-1em);animation-timing-function:cubic-bezier(.5,0,1,.5)}
  45%{transform:translateY(0) scale(1,1);animation-timing-function:ease-out}
  50%{transform:translateY(0) scale(1.35,.65);animation-timing-function:ease-in}
  55%{transform:translateY(-.05em) scale(.92,1.1);animation-timing-function:cubic-bezier(0,.5,.5,1)}
  100%{transform:translateY(-1em)}
}`;

export default function BounceRow({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-bounce-row"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${0.8 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: BALLS }, (_, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i }}>
          ●
        </span>
      ))}
    </span>
  );
}
