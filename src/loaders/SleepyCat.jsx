// A cat napping on a brick wall, seen from behind. Only the tail sways, and three Z's drift
// up and fade, one after another. Drawn from plain CSS shapes (no SVG): circles, a clipped
// polygon for the ears, and a rounded bar for the tail.
const css = `
.la-cat{position:relative;display:inline-block;width:6em;height:5em;font:var(--size)/1 monospace;color:var(--color)}
.la-cat .la-ear{position:absolute;top:.85em;width:.9em;height:.9em;background:currentColor;clip-path:polygon(50% 0,0 100%,100% 100%)}
.la-cat .la-ear.left{left:1.7em;transform:rotate(-18deg)}
.la-cat .la-ear.right{left:3.4em;transform:rotate(18deg)}
.la-cat .la-head{position:absolute;left:1.7em;top:1.3em;width:2.6em;height:2.6em;border-radius:50%;background:currentColor}
.la-cat .la-body{position:absolute;left:1.5em;top:2.3em;width:3em;height:2.1em;border-radius:1.5em 1.5em .4em .4em;background:currentColor}
.la-cat .la-tail{position:absolute;left:3.9em;top:3em;width:1.9em;height:.55em;border-radius:.3em;background:currentColor;transform-origin:0% 50%;animation:la-cat-tail var(--dur) ease-in-out infinite}
.la-cat .la-wall{position:absolute;left:-.6em;right:-.6em;bottom:0;height:1.1em;opacity:.3;background-image:linear-gradient(currentColor 1px,transparent 1px),linear-gradient(90deg,currentColor 1px,transparent 1px),linear-gradient(90deg,currentColor 1px,transparent 1px);background-size:100% .55em,1.6em 1.1em,1.6em 1.1em;background-position:0 0,0 0,.8em .55em}
.la-cat .la-zzz{position:absolute;opacity:0;animation:la-cat-zzz calc(var(--dur)*2.2) ease-in infinite}
.la-cat .la-zzz-1{right:.9em;top:.55em;font-size:.32em}
.la-cat .la-zzz-2{right:.5em;top:.2em;font-size:.38em;animation-delay:calc(var(--dur)*2.2*-.33)}
.la-cat .la-zzz-3{right:.1em;top:-.1em;font-size:.45em;animation-delay:calc(var(--dur)*2.2*-.66)}
@keyframes la-cat-tail{
  0%,100%{transform:rotate(-8deg)}
  50%{transform:rotate(10deg)}
}
@keyframes la-cat-zzz{
  0%{opacity:0;transform:translateY(0)}
  15%{opacity:.8}
  75%{opacity:.8}
  100%{opacity:0;transform:translateY(-.9em)}
}`;

export default function SleepyCat({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-cat"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.4 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-wall" aria-hidden="true" />
      <span className="la-body" aria-hidden="true" />
      <span className="la-tail" aria-hidden="true" />
      <span className="la-ear left" aria-hidden="true" />
      <span className="la-ear right" aria-hidden="true" />
      <span className="la-head" aria-hidden="true" />
      <span className="la-zzz la-zzz-1" aria-hidden="true">z</span>
      <span className="la-zzz la-zzz-2" aria-hidden="true">z</span>
      <span className="la-zzz la-zzz-3" aria-hidden="true">Z</span>
    </span>
  );
}
