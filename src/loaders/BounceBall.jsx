const css = `
.la-bounce{position:relative;display:inline-block;width:1.6em;height:3.4em;font:var(--size)/1 monospace;color:var(--color)}
.la-bounce>.la-ball{position:absolute;left:0;bottom:.35em;width:100%;text-align:center;transform-origin:50% 100%;animation:la-bounce var(--dur) infinite}
.la-bounce>.la-shadow{position:absolute;left:0;bottom:0;width:100%;text-align:center;font-size:.6em;opacity:.5;animation:la-shadow var(--dur) ease-in-out infinite}
@keyframes la-bounce{
  0%{transform:translateY(-2.4em);animation-timing-function:cubic-bezier(.5,0,1,.5)}
  45%{transform:translateY(0) scale(1,1);animation-timing-function:ease-out}
  50%{transform:translateY(0) scale(1.4,.6);animation-timing-function:ease-in}
  55%{transform:translateY(-.1em) scale(.9,1.15);animation-timing-function:cubic-bezier(0,.5,.5,1)}
  100%{transform:translateY(-2.4em)}
}
@keyframes la-shadow{
  0%,100%{transform:scaleX(.35);opacity:.12}
  47%,53%{transform:scaleX(1.1);opacity:.55}
}`;

export default function BounceBall({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-bounce"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-ball" aria-hidden="true">●</span>
      <span className="la-shadow" aria-hidden="true">▂▂</span>
    </span>
  );
}
