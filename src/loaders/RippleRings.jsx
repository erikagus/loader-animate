// Three rings spreading outward from the center and fading as they grow, staggered so one
// is always starting as another is halfway out and another is nearly gone.
const RINGS = 3;

const css = `
.la-ripple-rings{position:relative;display:inline-grid;place-items:center;width:3em;height:3em;font:var(--size)/1 monospace;color:var(--color)}
.la-ripple-rings>.la-ring{grid-area:1/1;display:grid;place-items:center;width:100%;height:100%}
.la-ripple-rings>.la-ring>span{display:inline-block;font-size:.5em;animation:la-ripple-rings var(--dur) ease-out infinite}
@keyframes la-ripple-rings{
  0%{transform:scale(.6);opacity:.7}
  100%{transform:scale(4.5);opacity:0}
}`;

export default function RippleRings({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-ripple-rings"
      style={{ "--size": `${size}px`, "--color": color, "--dur": `${1.8 / speed}s` }}
    >
      <style>{css}</style>
      {Array.from({ length: RINGS }, (_, i) => (
        <span key={i} className="la-ring" aria-hidden="true">
          <span style={{ animationDelay: `calc(var(--dur) * -${(i / RINGS).toFixed(4)})` }}>●</span>
        </span>
      ))}
    </span>
  );
}
