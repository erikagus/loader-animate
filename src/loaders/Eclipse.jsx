// Two dots trade places on a shared line. The back dot shrinks and dims as it nears the
// middle, reading as if it passes behind the front one, then it reappears on the far side.
const css = `
.la-eclipse{position:relative;display:inline-block;width:3em;height:1.6em;font:var(--size)/1 monospace;color:var(--color)}
.la-eclipse>.la-pos{position:absolute;top:50%;left:50%;width:0;height:0;animation:la-eclipse-x var(--dur) ease-in-out infinite;animation-delay:calc(var(--dur) * var(--phase, 0))}
.la-eclipse>.la-pos>span{position:absolute;top:50%;left:50%;display:inline-block;font-size:.6em;transform:translate(-50%,-50%)}
.la-eclipse>.la-front{z-index:2}
.la-eclipse>.la-back{z-index:1}
.la-eclipse>.la-back>span{animation:la-eclipse-depth var(--dur) ease-in-out infinite;animation-delay:calc(var(--dur) * var(--phase, 0))}
@keyframes la-eclipse-x{
  0%{transform:translateX(-1.1em)}
  50%{transform:translateX(1.1em)}
  100%{transform:translateX(-1.1em)}
}
@keyframes la-eclipse-depth{
  0%,100%{opacity:1;transform:translate(-50%,-50%) scale(1)}
  25%,75%{opacity:.35;transform:translate(-50%,-50%) scale(.55)}
  50%{opacity:1;transform:translate(-50%,-50%) scale(1)}
}`;

export default function Eclipse({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-eclipse"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.8 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-pos la-back" aria-hidden="true" style={{ "--phase": -0.5 }}>
        <span>●</span>
      </span>
      <span className="la-pos la-front" aria-hidden="true">
        <span>●</span>
      </span>
    </span>
  );
}
