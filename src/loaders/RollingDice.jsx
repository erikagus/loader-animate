const FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const keyframes = FACES.map((f, i) => `${(i / FACES.length) * 100}%{content:"${f}"}`).join("");

const css = `
.la-dice{display:inline-block;min-width:1em;text-align:center;font:var(--size)/1 monospace;color:var(--color)}
.la-dice::before{content:"${FACES[0]}";display:inline-block;animation:la-dice-face var(--dur) step-end infinite,la-dice-tilt var(--dur) ease-in-out infinite alternate}
@keyframes la-dice-face{${keyframes}}
@keyframes la-dice-tilt{
  from{transform:rotate(-14deg)}
  to{transform:rotate(14deg)}
}`;

export default function RollingDice({ size = 24, color = "currentColor", speed = 1, label = "Loading" }) {
  return (
    <span
      role="status"
      aria-label={label}
      className="la-dice"
      style={{ "--size": `${size * 1.6}px`, "--color": color, "--dur": `${0.9 / speed}s` }}
    >
      <style>{css}</style>
    </span>
  );
}
