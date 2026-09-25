const css = `
.la-pendulum{position:relative;display:inline-block;width:3.8em;height:3em;font:var(--size)/1 monospace;color:var(--color)}
.la-pendulum>.la-pivot{position:absolute;top:0;left:50%;width:.9em;height:2px;margin-left:-.45em;background:currentColor;opacity:.5}
.la-pendulum>.la-arm{position:absolute;top:0;left:50%;width:0;height:2.3em;transform-origin:50% 0;animation:la-pendulum var(--dur) ease-in-out infinite alternate}
.la-pendulum>.la-arm::before{content:"";position:absolute;top:0;left:-.5px;width:1px;height:100%;background:currentColor;opacity:.5}
.la-pendulum>.la-arm::after{content:"●";position:absolute;top:100%;left:0;transform:translate(-50%,-50%)}
@keyframes la-pendulum{
  from{transform:rotate(-38deg)}
  to{transform:rotate(38deg)}
}`;

export default function Pendulum({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-pendulum"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.1 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-pivot" aria-hidden="true" />
      <span className="la-arm" aria-hidden="true" />
    </span>
  );
}
