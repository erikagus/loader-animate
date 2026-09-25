# Loader Animate

Loading animations made from plain text characters (`█ ▓ ▒ ░ ●`) and CSS keyframes. No SVG, no canvas, no libraries besides React.

## Use a loader in your project

1. Open the gallery (`npm run dev`) and press **Copy code** on the loader you like.
2. Save it as a `.jsx` file in your project.
3. Use it:

```jsx
import BounceBall from "./BounceBall";

<BounceBall size={32} color="#22c55e" speed={1.5} />
```

Every loader is one self-contained file with its CSS inside, so nothing else needs to be installed or imported.

## Props

| Prop    | Default          | Notes                          |
| ------- | ---------------- | ------------------------------ |
| `size`  | `24`             | Font size in px                |
| `color` | `"currentColor"` | Any CSS color                  |
| `speed` | `1`              | Multiplier, `2` is twice as fast |
| `label` | `"Loading"`      | Accessible label for screen readers |

## Loaders

Bounce Ball, Bounce Row, Pendulum, Newton's Cradle, Orbit, Typing Dots, Braille Spinner, Block Progress, Heartbeat, Falling Blocks, Rolling Dice, Accordion, Symmetric Wave, Square Grid, Conveyor Loop, Square Snake.

## Add your own

Create `src/loaders/YourLoader.jsx`, then add one entry (name, file, description) in `src/loaders/index.js`. It shows up in the gallery automatically.

## Run

```bash
npm install
npm run dev
```
