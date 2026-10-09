// A short arc chases itself around a ring: each dot on the ring brightens and grows for a
// moment as the "head" passes it, then fades, so a glowing arc with a trailing tail circles.
const DOTS = 16;
const RADIUS = 1.3; // em, distance from center

const positions = Array.from({ length: DOTS }, (_, i) => {
  const angle = (i / DOTS) * Math.PI * 2;
  return {
    x: (Math.sin(angle) * RADIUS).toFixed(3),
    y: (-Math.cos(angle) * RADIUS).toFixed(3),
  };
});

const css = `
.la-arc-snake{position:relative;display:inline-block;width:3.2em;height:3.2em;font:var(--size)/1 monospace;color:var(--color)}
.la-arc-snake>span{position:absolute;top:50%;left:50%;font-size:.5em;animation:la-arc-snake var(--dur) linear infinite}
@keyframes la-arc-snake{
  0%{opacity:.12;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) scale(.5)}
  12%{opacity:1;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) scale(1.25)}
  30%,100%{opacity:.12;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) scale(.5)}
}`;

export default function ArcSnake({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-arc-snake"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.6 / speed}s` }}
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
