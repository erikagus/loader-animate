// A round tank that fills with two layers of rolling waves. Everything is halftone text:
// the disc, the water, and the waves are text masked to a circle or a wave outline.
const fill = (char) => char.repeat(400);

// One wave period (3em wide). The tile is masked over the water text so the top edge rolls.
const WAVE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120'%3E%3Cpath d='M0 70Q75 10 150 70T300 70V120H0Z'/%3E%3C/svg%3E\")";

const css = `
.la-tide{--wave:${WAVE};position:relative;display:inline-block;width:6em;height:6em;font:var(--size) monospace;color:var(--color)}
.la-tide .la-fill{position:absolute;overflow:hidden;white-space:normal;word-break:break-all;line-height:.75em}
.la-tide .la-disk{top:-.6em;left:-.6em;width:7.2em;height:7.2em;clip-path:circle(3em at 3.6em 3.6em);opacity:.45}
.la-tide .la-tank{position:absolute;inset:.4em;clip-path:circle(50%)}
.la-tide .la-water{position:absolute;top:0;left:0;width:12em;height:7em;animation:la-tide-fill var(--dur) ease-in-out infinite}
.la-tide .la-wave{top:0;left:0;width:12em;height:7em;-webkit-mask-image:var(--wave),linear-gradient(#000,#000);mask-image:var(--wave),linear-gradient(#000,#000);-webkit-mask-repeat:repeat-x,no-repeat;mask-repeat:repeat-x,no-repeat;-webkit-mask-size:3em 1.2em,100% calc(100% - 1.15em);mask-size:3em 1.2em,100% calc(100% - 1.15em);-webkit-mask-position:0 0,0 1.15em;mask-position:0 0,0 1.15em}
.la-tide .la-wave-back{opacity:.5;animation:la-tide-roll calc(var(--dur)/2.5) linear infinite reverse}
.la-tide .la-wave-front{top:.55em;opacity:.92;animation:la-tide-roll calc(var(--dur)/3.5) linear infinite}
@keyframes la-tide-fill{
  0%{transform:translateY(5.6em);opacity:1}
  70%{transform:translateY(-.3em);opacity:1}
  88%{transform:translateY(-.3em);opacity:1}
  100%{transform:translateY(-.3em);opacity:0}
}
@keyframes la-tide-roll{to{transform:translateX(-6em)}}`;

export default function Tide({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-tide"
      style={{ "--size": `${size * 0.5}px`, "--color": color, "--dur": `${5 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-fill la-disk" aria-hidden="true">{fill("░")}</span>
      <span className="la-tank" aria-hidden="true">
        <span className="la-water">
          <span className="la-fill la-wave la-wave-back">{fill("▒")}</span>
          <span className="la-fill la-wave la-wave-front">{fill("▓")}</span>
        </span>
      </span>
    </span>
  );
}
