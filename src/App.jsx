import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { loaders } from "./loaders/index.js";

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function getInitialTheme() {
  const fromUrl = new URLSearchParams(window.location.search).get("theme");
  if (fromUrl === "light" || fromUrl === "dark") return fromUrl;
  try {
    const saved = localStorage.getItem("la-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage blocked, fall through to system preference */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Keeps a loader inside its card: the card grows with the loader's height, and a loader
// that is wider than the card is scaled down to fit instead of spilling over the text.
function Preview({ size, children }) {
  const box = useRef(null);
  const inner = useRef(null);
  const [fit, setFit] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (!box.current || !inner.current) return;
      const avail = box.current.clientWidth - 32;
      const w = inner.current.offsetWidth;
      const h = inner.current.offsetHeight;
      const scale = w > avail ? avail / w : 1;
      setFit((prev) =>
        prev && prev.scale === scale && prev.w === w && prev.h === h ? prev : { scale, w, h }
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(box.current);
    return () => observer.disconnect();
  }, [size]);

  return (
    <div className="preview" ref={box}>
      <div className="fit" style={fit ? { width: fit.w * fit.scale, height: fit.h * fit.scale } : undefined}>
        <div className="fit-inner" ref={inner} style={fit ? { transform: `scale(${fit.scale})` } : undefined}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Cell({ item, index, size, color, speed, onView, onCopy, copied }) {
  const { name, description, Component } = item;
  return (
    <article className="cell">
      <Preview size={size}>
        <Component size={size} color={color} speed={speed} />
      </Preview>
      <div className="cell-body">
        <p className="fig">Fig. {String(index + 1).padStart(2, "0")}</p>
        <h2>{name}</h2>
        <p className="desc">{description}</p>
        <div className="actions">
          <button className="btn" onClick={() => onCopy(item)}>
            {copied ? "Copied" : "Copy code"}
          </button>
          <button className="btn btn-ghost" onClick={() => onView(item)}>
            View code
          </button>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [size, setSize] = useState(() => {
    const fromUrl = Number(new URLSearchParams(window.location.search).get("size"));
    return fromUrl >= 16 && fromUrl <= 72 ? fromUrl : 32;
  });
  const [speed, setSpeed] = useState(1);
  // null = follow the theme text color, so loaders stay visible in light and dark
  const [customColor, setCustomColor] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);
  const [copiedName, setCopiedName] = useState(null);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const color = customColor ?? "currentColor";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("la-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const copy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.source);
      setCopiedName(item.name);
      setTimeout(() => setCopiedName((n) => (n === item.name ? null : n)), 1500);
    } catch {
      /* clipboard blocked: the code is still readable in the code dialog */
    }
  };

  const view = (item) => {
    setSelected(item);
    dialogRef.current?.showModal();
  };

  return (
    <div className="shell">
      <header className="bar line-b">
        <span className="brand">Loader Animate</span>
        <button
          className="btn btn-icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>

      <section className="intro line-b">
        <h1>Loaders made from text</h1>
        <p>
          Loading animations built from block characters and CSS. Each one is a single React file with no other
          dependencies. Copy it into your project and use it.
        </p>
      </section>

      <section className="controls line-b" aria-label="Preview controls">
        <label>
          <span>Size</span>
          <input type="range" min="16" max="72" value={size} onChange={(e) => setSize(+e.target.value)} />
          <output>{size}px</output>
        </label>
        <label>
          <span>Speed</span>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(+e.target.value)}
          />
          <output>{speed}x</output>
        </label>
        <label>
          <span>Color</span>
          <input
            type="color"
            value={customColor ?? (theme === "dark" ? "#fafafa" : "#09090b")}
            onChange={(e) => setCustomColor(e.target.value)}
          />
          {customColor && (
            <button className="btn btn-ghost" onClick={() => setCustomColor(null)}>
              Reset
            </button>
          )}
        </label>
      </section>

      <div className="stripe line-b" aria-hidden="true" />

      <main className="grid line-b">
        {loaders.map((item, i) => (
          <Cell
            key={item.name}
            item={item}
            index={i}
            size={size}
            color={color}
            speed={speed}
            onView={view}
            onCopy={copy}
            copied={copiedName === item.name}
          />
        ))}
      </main>

      <section className="usage line-b">
        <h2>Use it</h2>
        <p>
          Save the file, import it, and render it. Every loader takes the same props: <code>size</code> in pixels,{" "}
          <code>color</code> as any CSS color, <code>speed</code> as a multiplier, and <code>label</code> for screen
          readers.
        </p>
        <pre className="snippet">{`import BounceBall from "./BounceBall";

<BounceBall size={32} color="#22c55e" speed={1.5} />`}</pre>
      </section>

      <footer className="foot">Built with React and CSS.</footer>

      <dialog
        ref={dialogRef}
        className="code-dialog"
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      >
        {selected && (
          <>
            <div className="dialog-bar">
              <code>{selected.file}</code>
              <div className="actions">
                <button className="btn" onClick={() => copy(selected)}>
                  {copiedName === selected.name ? "Copied" : "Copy code"}
                </button>
                <button className="btn btn-ghost" onClick={() => dialogRef.current.close()}>
                  Close
                </button>
              </div>
            </div>
            <pre>{selected.source}</pre>
          </>
        )}
      </dialog>
    </div>
  );
}
