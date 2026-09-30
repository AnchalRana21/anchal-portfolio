import { Fragment } from "react";
import { marqueeItems } from "@/lib/data";

export function Marquee() {
  return (
    <div className="marquee" aria-label="Areas I work in">
      <div className="track label accent">
        {/* Rendered twice so the -50% scroll loops seamlessly; second copy hidden from screen readers */}
        {[false, true].map((dup) =>
          marqueeItems.map((item) => (
            <Fragment key={`${dup}-${item}`}>
              <span aria-hidden={dup || undefined}>{item}</span>
              <span className="sep">◆</span>
            </Fragment>
          )),
        )}
      </div>
    </div>
  );
}
