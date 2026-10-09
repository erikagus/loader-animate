// Eight fixed dots on a ring. Brightness steps from one dot to the next around the circle,
// like a classic spinning-wheel indicator.
const DOTS = 8;
const RADIUS = 1.2; // em

const positions = Array.from({ length: DOTS }, (_, i) => {
  const angle = (i / DOTS) * Math.PI * 2;
  return {
    x: (Math.sin(angle) * RADIUS).toFixed(3),
    y: (-Math.cos(angle) * RADIUS).toFixed(3),
  };
});

const css = `
.la-circular-dots{position:relative;display:inline-block;width:3em;height:3em;font:var(--size)/1 monospace;color:var(--color)}
.la-circular-dots>span{position:absolute;top:50%;left:50%;font-size:.5em;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y)));animation:la-circular-dots var(--dur) steps(${DOTS}) infinite}
@keyframes la-circular-dots{
  0%{opacity:1}
  100%{opacity:.15}
}`;

export default function CircularDots({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-circular-dots"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.2 / speed}s` }}
    >
      <style>{css}</style>
      {positions.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ "--x": `${p.x}em`, "--y": `${p.y}em`, animationDelay: `calc(var(--dur) * -${(i / DOTS).toFixed(4)})` }}
        >
          ●
        </span>
      ))}
    </span>
  );
}
