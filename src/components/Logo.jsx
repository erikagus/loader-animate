// Brand mark: a ring with a gap, filled by a conic gradient that slowly turns
// inside the fixed shape. The gradient is built from thin wedges because SVG
// has no conic gradient of its own.
const SHAPE =
  "M160 40C225 40 278 93 278 158C278 195 261 230 232 251C227 255 222 258 216 251L191 225C186 220 186 215 193 211C213 199 225 179 225 157C225 121 196 92 160 92C124 92 95 121 95 157C95 191 119 219 152 219H161C176 219 188 231 188 246C188 262 176 274 161 274C95 274 42 222 42 157C42 92 95 40 160 40Z";

const CX = 160;
const CY = 157;
const R = 200;
const STEP = 2;
const STOPS = [
  [0, 216], [45, 255], [66.5, 255], [70.2, 0], [180, 0], [230.4, 20], [270, 91], [360, 216],
];

function grey(angle) {
  for (let i = 1; i < STOPS.length; i++) {
    const [a1, v1] = STOPS[i];
    const [a0, v0] = STOPS[i - 1];
    if (angle <= a1) return Math.round(v0 + ((v1 - v0) * (angle - a0)) / (a1 - a0));
  }
  return 216;
}

const point = (deg) => {
  const rad = (deg * Math.PI) / 180;
  return `${(CX + R * Math.sin(rad)).toFixed(2)} ${(CY - R * Math.cos(rad)).toFixed(2)}`;
};

// Wedge n covers [n*STEP, (n+1)*STEP) degrees clockwise from the top. The
// gradient starts at 90deg (pointing right), so its own angle is offset by 90.
const wedges = Array.from({ length: 360 / STEP }, (_, n) => {
  const a = n * STEP;
  const v = grey((a + STEP / 2 - 90 + 360) % 360);
  const fill = `rgb(${v},${v},${v})`;
  return { d: `M${CX} ${CY}L${point(a)}L${point(a + STEP + 0.6)}Z`, fill };
});

export default function Logo({ size = 24, animate = true, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 320 320"
      role="img"
      aria-label="Loader Animate"
    >
      <defs>
        <clipPath id="logo-shape">
          <path d={SHAPE} />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-shape)">
        <g className={animate ? "logo-spin" : undefined}>
          {wedges.map((w, i) => (
            <path key={i} d={w.d} fill={w.fill} />
          ))}
        </g>
      </g>
    </svg>
  );
}
