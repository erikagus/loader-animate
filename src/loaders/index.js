const components = import.meta.glob("./*.jsx", { eager: true, import: "default" });
const sources = import.meta.glob("./*.jsx", { eager: true, query: "?raw", import: "default" });

// To add a loader: create the .jsx file in this folder, then add one entry here.
const entries = [
  {
    name: "Bounce Ball",
    file: "BounceBall.jsx",
    description: "A ball drops, squashes on the floor and springs back up, with a shadow that follows the height.",
  },
  {
    name: "Bounce Row",
    file: "BounceRow.jsx",
    description: "Three balls bouncing one after another. Small enough to sit inside a button.",
  },
  {
    name: "Hole Pop",
    file: "HolePop.jsx",
    description: "A halftone ball shoots out of a hole in the ground, flies up and drops back in. The ball and the hole are both made of text.",
  },
  {
    name: "Tide",
    file: "Tide.jsx",
    description: "A round tank that fills with two layers of rolling waves, all drawn in halftone text.",
  },
  {
    name: "Pendulum",
    file: "Pendulum.jsx",
    description: "A ball on a string swinging back and forth, slowing at each end like a real pendulum.",
  },
  {
    name: "Newton's Cradle",
    file: "NewtonsCradle.jsx",
    description: "Five hanging balls where the outer two swing out and knock back in turn.",
  },
  {
    name: "Pulse",
    file: "Pulse.jsx",
    description: "A ring rippling outward from a center dot and fading as it grows, like a sonar ping.",
  },
  {
    name: "Typing Dots",
    file: "TypingDots.jsx",
    description: "Three dots that rise one after another, like the typing indicator in a chat.",
  },
  {
    name: "Braille Spinner",
    file: "BrailleSpinner.jsx",
    description: "The classic terminal spinner, made of ten braille characters. Works inline with text.",
  },
  {
    name: "Block Progress",
    file: "BlockProgress.jsx",
    description: "A ten-cell bar that fills one block at a time, then starts over.",
  },
  {
    name: "Heartbeat",
    file: "Heartbeat.jsx",
    description: "A row of bars where a sharp pulse travels from left to right, like an ECG line.",
  },
  {
    name: "Falling Blocks",
    file: "FallingBlocks.jsx",
    description: "Blocks drop in layers and stack into a 3 by 3 square, then clear and start again.",
  },
  {
    name: "Rolling Dice",
    file: "RollingDice.jsx",
    description: "A die that tilts while its face changes from one to six.",
  },
  {
    name: "Accordion",
    file: "AccordionLoader.jsx",
    description: "Four blocks that squeeze together and spread apart, lightest one trailing.",
  },
  {
    name: "Symmetric Wave",
    file: "SymmetricWave.jsx",
    description: "A wave that starts in the middle and moves out to both sides, fading toward the edges.",
  },
  {
    name: "Square Grid",
    file: "SquareGrid.jsx",
    description: "A 3 by 3 grid where each cell cycles through the four shades, sweeping diagonally.",
  },
  {
    name: "Conveyor Loop",
    file: "ConveyorLoop.jsx",
    description: "A short comet of blocks sliding along a straight track.",
  },
  {
    name: "Square Snake",
    file: "SquareSnake.jsx",
    description: "A four-block snake that runs around the edge of a square.",
  },
  {
    name: "Dot Ripple",
    file: "DotRipple.jsx",
    description: "A grid of dots that swell and shrink in rings, spreading out from the center like a ripple on water.",
  },
];

export const loaders = entries.map((entry) => ({
  ...entry,
  Component: components[`./${entry.file}`],
  source: sources[`./${entry.file}`],
}));
