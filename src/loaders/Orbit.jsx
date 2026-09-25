const TAIL = 7;

const css = `
.la-orbit{position:relative;display:inline-block;width:3.2em;height:3.2em;font:var(--size)/1 monospace;color:var(--color)}
.la-orbit::before{content:"";position:absolute;top:50%;left:50%;width:2.6em;height:2.6em;margin:-1.3em 0 0 -1.3em;border:1px solid currentColor;border-radius:50%;opacity:.2}
.la-orbit::after{content:"●";position:absolute;top:50%;left:50%;font-size:.6em;transform:translate(-50%,-50%)}
.la-orbit>.la-arm{position:absolute;top:50%;left:50%;width:0;height:0;animation:la-orbit var(--dur) linear infinite;animation-delay:calc(var(--dur)*(var(--i) - ${TAIL - 1})*.03)}
.la-orbit>.la-arm>span{position:absolute;top:0;left:0;transform:translate(1.3em,0) translate(-50%,-50%)}
@keyframes la-orbit{to{transform:rotate(360deg)}}`;

export default function Orbit({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-orbit"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.6 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: TAIL }, (_, i) => (
        <span key={i} className="la-arm" aria-hidden="true" style={{ "--i": i }}>
          <span style={{ fontSize: `${0.75 - i * 0.08}em`, opacity: 1 - i * 0.14 }}>●</span>
        </span>
      ))}
    </span>
  );
}
