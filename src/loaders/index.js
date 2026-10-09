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
  {
    name: "Arc Snake",
    file: "ArcSnake.jsx",
    description: "A short glowing arc chases itself around a ring, fading into a trailing tail.",
  },
  {
    name: "Ripple Rings",
    file: "RippleRings.jsx",
    description: "Three rings spreading outward from the center, staggered and fading as they grow.",
  },
  {
    name: "Clock Hand",
    file: "ClockHand.jsx",
    description: "A faint ring of twelve ticks with a hand sweeping around the center, like a clock missing its numbers.",
  },
  {
    name: "Eclipse",
    file: "Eclipse.jsx",
    description: "Two dots trade places on a line, the back one shrinking and dimming as it passes behind the front one.",
  },
  {
    name: "Slide Grid",
    file: "SlideGrid.jsx",
    description: "Three dots hold three corners of a square and slide clockwise in turn, so the empty corner travels around.",
  },
  {
    name: "Circular Dots",
    file: "CircularDots.jsx",
    description: "Eight dots on a ring, brightness stepping from one to the next like a spinning wheel.",
  },
  {
    name: "Sleepy Cat",
    file: "SleepyCat.jsx",
    description: "A cat napping on a brick wall. Its tail sways and three Zs drift up and fade.",
  },
];

export const loaders = entries.map((entry) => ({
  ...entry,
  Component: components[`./${entry.file}`],
  source: sources[`./${entry.file}`],
}));
