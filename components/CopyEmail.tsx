"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL, GITHUB } from "@/lib/data";

function useCopyEmail() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      setFailed(true);
    }
  }

  return { copied, failed, copy };
}

export function HeroActions() {
  const { copied, failed, copy } = useCopyEmail();

  return (
    <>
      <div className="hero-ctas">
        <button className="btn solid" type="button" onClick={copy}>
          {copied ? "Email copied" : "Copy my email"}
        </button>
        <a className="btn" href="#work">
          Explore work
        </a>
        <a className="btn ghost" href={GITHUB}>
          GitHub <span className="tip">→</span>
        </a>
      </div>
      <div className="toast" role="status" aria-live="polite">
        {copied || failed ? EMAIL : ""}
      </div>
    </>
  );
}

export function CopyEmailButton() {
  const { copied, copy } = useCopyEmail();

  return (
    <button className="btn solid" type="button" onClick={copy}>
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}
