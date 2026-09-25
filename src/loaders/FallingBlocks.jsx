const COLS = 3;
const ROWS = 3;

// One keyframe set per row so higher rows drop later, while all rows clear together at the end.
const css = `
.la-falling{position:relative;display:inline-block;overflow:hidden;width:${COLS * 0.9}em;height:${ROWS * 0.85}em;font:var(--size)/1 monospace;color:var(--color)}
.la-falling>span{position:absolute;left:calc(var(--c)*.9em);top:calc((${ROWS - 1} - var(--r))*.85em);width:.9em;height:.75em;overflow:hidden;text-align:center;line-height:.75;opacity:0;animation-duration:var(--dur);animation-timing-function:ease-in;animation-iteration-count:infinite;animation-delay:calc(var(--dur)*var(--c)*.04)}
@keyframes la-fall-0{
  0%{opacity:0;transform:translateY(-3em)}
  4%{opacity:1}
  20%{opacity:1;transform:translateY(0)}
  88%{opacity:1}
  100%{opacity:0;transform:translateY(0)}
}
@keyframes la-fall-1{
  0%,18%{opacity:0;transform:translateY(-3em)}
  22%{opacity:1}
  38%{opacity:1;transform:translateY(0)}
  88%{opacity:1}
  100%{opacity:0;transform:translateY(0)}
}
@keyframes la-fall-2{
  0%,36%{opacity:0;transform:translateY(-3em)}
  40%{opacity:1}
  56%{opacity:1;transform:translateY(0)}
  88%{opacity:1}
  100%{opacity:0;transform:translateY(0)}
}`;

export default function FallingBlocks({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      cells.push(
        <span key={`${r}-${c}`} aria-hidden="true" style={{ "--r": r, "--c": c, animationName: `la-fall-${r}` }}>
          █
        </span>
      );
    }
  }
  return (
    <span
      role="status"
      aria-label={label}
      className="la-falling"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${2.4 / speed}s` }}
    >
      <style>{css}</style>
      {cells}
    </span>
  );
}
