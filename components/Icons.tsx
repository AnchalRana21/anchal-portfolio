import type { FocusIcon, NumberIcon } from "@/lib/data";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2 26 14 14 26 2 14Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 8 20 14 14 20 8 14Z" fill="currentColor" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" strokeWidth="2" {...stroke}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  );
}

const focusPaths: Record<FocusIcon, React.ReactNode> = {
  chat: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export function FocusGlyph({ name }: { name: FocusIcon }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" {...stroke}>
      {focusPaths[name]}
    </svg>
  );
}

const numberPaths: Record<NumberIcon, React.ReactNode> = {
  commit: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6M12 15v6" />
    </>
  ),
  merge: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M6 8.5v9.5M18 15.5V9a3 3 0 0 0-3-3h-4" />
    </>
  ),
  layers: (
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </>
  ),
};

export function NumberGlyph({ name }: { name: NumberIcon }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" {...stroke}>
      {numberPaths[name]}
    </svg>
  );
}
