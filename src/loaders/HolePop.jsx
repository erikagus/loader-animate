// A hole seen from a slight angle, with a ball that shoots out and drops back in.
// Every shape is text (halftone blocks) clipped to an ellipse or circle.
const fill = (char) => char.repeat(90);

const css = `
.la-hole{position:relative;display:inline-block;width:6em;height:9em;font:var(--size) monospace;color:var(--color)}
.la-hole .la-fill{position:absolute;overflow:hidden;white-space:normal;word-break:break-all;line-height:.75em}
.la-hole .la-rim,.la-hole .la-pit{left:-.6em;bottom:-.6em;width:7.2em;height:3em}
.la-hole .la-rim{clip-path:ellipse(3em .9em at 3.6em 1.5em);opacity:.5}
.la-hole .la-pit{clip-path:ellipse(2.65em .675em at 3.6em 1.725em)}
.la-hole .la-stage{position:absolute;top:0;left:0;width:6em;height:8.1em;overflow:hidden}
.la-hole .la-ball{position:absolute;top:8.1em;left:1.5em;width:3em;height:3em;transform-origin:50% 100%;animation:la-hole var(--dur) infinite}
.la-hole .la-ball .la-fill{top:-.6em;left:-.6em;width:4.2em;height:4.2em;clip-path:circle(1.5em at 2.1em 2.1em)}
.la-hole .la-ball .la-shade{-webkit-mask-image:radial-gradient(ellipse .6em .38em at 1.56em 1.41em,transparent 85%,#000 100%);mask-image:radial-gradient(ellipse .6em .38em at 1.56em 1.41em,transparent 85%,#000 100%)}
@keyframes la-hole{
  0%{transform:translateY(0) scale(1,1);animation-timing-function:cubic-bezier(.1,.6,.3,1)}
  8%{transform:translateY(-2.4em) scale(.88,1.14);animation-timing-function:ease-out}
  45%{transform:translateY(-7.9em) scale(1,1);animation-timing-function:ease-in}
  82%{transform:translateY(-2.4em) scale(.9,1.12);animation-timing-function:ease-in}
  90%,100%{transform:translateY(0) scale(1,1)}
}`;

export default function HolePop({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-hole"
      style={{ "--size": `${size * 0.5}px`, "--color": color, "--dur": `${1.8 / speed}s` }}
    >
      <style>{css}</style>
      <span className="la-fill la-rim" aria-hidden="true">{fill("▒")}</span>
      <span className="la-fill la-pit" aria-hidden="true">{fill("█")}</span>
      <span className="la-stage" aria-hidden="true">
        <span className="la-ball">
          <span className="la-fill">{fill("░")}</span>
          <span className="la-fill la-shade">{fill("▓")}</span>
        </span>
      </span>
    </span>
  );
}
