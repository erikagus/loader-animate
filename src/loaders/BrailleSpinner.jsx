const FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

// Each frame becomes one keyframe step; step-end holds a frame until the next one.
const keyframes = FRAMES.map((f, i) => `${(i / FRAMES.length) * 100}%{content:"${f}"}`).join("");

const css = `
.la-braille{display:inline-block;min-width:1em;text-align:center;font:var(--size)/1 monospace;color:var(--color)}
.la-braille::before{content:"${FRAMES[0]}";animation:la-braille var(--dur) step-end infinite}
@keyframes la-braille{${keyframes}}`;

export default function BrailleSpinner({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-braille"
      style={{ "--size": `${size * 1.5}px`, "--color": color, "--dur": `${0.8 / speed}s` }}
    >
      <style>{css}</style>
    </span>
  );
}
