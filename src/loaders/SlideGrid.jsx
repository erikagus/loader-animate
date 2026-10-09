// Three dots sit at three corners of a square, leaving one corner empty. Each dot slides
// clockwise into the next corner in turn, so the empty spot travels around the square.
const CORNERS = [
  [-0.6, -0.6], // top-left
  [0.6, -0.6], // top-right
  [0.6, 0.6], // bottom-right
  [-0.6, 0.6], // bottom-left
];
const DOTS = 3;

const css = `
.la-slide{position:relative;display:inline-block;width:2.6em;height:2.6em;font:var(--size)/1 monospace;color:var(--color)}
.la-slide>span{position:absolute;top:50%;left:50%;font-size:.6em;animation:la-slide var(--dur) ease-in-out infinite}
@keyframes la-slide{
  0%{transform:translate(calc(-50% + ${CORNERS[0][0]}em),calc(-50% + ${CORNERS[0][1]}em))}
  25%{transform:translate(calc(-50% + ${CORNERS[1][0]}em),calc(-50% + ${CORNERS[1][1]}em))}
  50%{transform:translate(calc(-50% + ${CORNERS[2][0]}em),calc(-50% + ${CORNERS[2][1]}em))}
  75%{transform:translate(calc(-50% + ${CORNERS[3][0]}em),calc(-50% + ${CORNERS[3][1]}em))}
  100%{transform:translate(calc(-50% + ${CORNERS[0][0]}em),calc(-50% + ${CORNERS[0][1]}em))}
}`;

export default function SlideGrid({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-slide"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.6 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: DOTS }, (_, i) => (
        <span key={i} aria-hidden="true" style={{ animationDelay: `calc(var(--dur) * -${(i / 4).toFixed(4)})` }}>
          ●
        </span>
      ))}
    </span>
  );
}
