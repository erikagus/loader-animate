// A faint ring of twelve tick marks with a hand that sweeps around the center, like a clock
// with only its second hand moving.
const TICKS = 12;
const RADIUS = 1.3; // em

const ticks = Array.from({ length: TICKS }, (_, i) => {
  const angle = (i / TICKS) * Math.PI * 2;
  return {
    x: (Math.sin(angle) * RADIUS).toFixed(3),
    y: (-Math.cos(angle) * RADIUS).toFixed(3),
  };
});

const css = `
.la-clock{position:relative;display:inline-block;width:3.2em;height:3.2em;font:var(--size)/1 monospace;color:var(--color)}
.la-clock>.la-tick{position:absolute;top:50%;left:50%;font-size:.4em;opacity:.35}
.la-clock>.la-hand{position:absolute;top:50%;left:50%;width:2px;height:1.1em;margin:-1.1em -1px 0 -1px;background:currentColor;transform-origin:50% 100%;animation:la-clock-spin var(--dur) linear infinite}
.la-clock>.la-center{position:absolute;top:50%;left:50%;font-size:.4em;transform:translate(-50%,-50%)}
@keyframes la-clock-spin{to{transform:rotate(360deg)}}`;

export default function ClockHand({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-clock"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${2.4 / speed}s` }}
    >
      <style>{css}</style>
      {ticks.map((t, i) => (
        <span
          key={i}
          className="la-tick"
          aria-hidden="true"
          style={{ transform: `translate(calc(-50% + ${t.x}em), calc(-50% + ${t.y}em))` }}
        >
          ·
        </span>
      ))}
      <span className="la-hand" aria-hidden="true" />
      <span className="la-center" aria-hidden="true">●</span>
    </span>
  );
}
