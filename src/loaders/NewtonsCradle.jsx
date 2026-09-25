const BALLS = 5;

const css = `
.la-cradle{position:relative;display:inline-block;width:8em;height:3em;font:var(--size)/1 monospace;color:var(--color)}
.la-cradle>.la-rail{position:absolute;top:0;left:1.5em;width:${BALLS}em;height:2px;background:currentColor;opacity:.5}
.la-cradle>.la-arm{position:absolute;top:0;left:calc(1.5em + var(--i)*1em);width:1em;height:2.3em;transform-origin:50% 0;text-align:center;animation-duration:var(--dur);animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.la-cradle>.la-arm::before{content:"";position:absolute;top:0;left:50%;width:1px;height:100%;background:currentColor;opacity:.5}
.la-cradle>.la-arm::after{content:"●";position:absolute;top:100%;left:50%;transform:translate(-50%,-50%)}
@keyframes la-cradle-l{
  0%{transform:rotate(38deg);animation-timing-function:ease-in}
  25%{transform:rotate(0)}
  75%{transform:rotate(0);animation-timing-function:ease-out}
  100%{transform:rotate(38deg)}
}
@keyframes la-cradle-r{
  0%,25%{transform:rotate(0);animation-timing-function:ease-out}
  50%{transform:rotate(-38deg);animation-timing-function:ease-in}
  75%,100%{transform:rotate(0)}
}`;

export default function NewtonsCradle({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-cradle"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.6 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-rail" aria-hidden="true" />
      {Array.from({ length: BALLS }, (_, i) => {
        const swing = i === 0 ? "la-cradle-l" : i === BALLS - 1 ? "la-cradle-r" : "none";
        return <span key={i} className="la-arm" aria-hidden="true" style={{ "--i": i, animationName: swing }} />;
      })}
    </span>
  );
}
