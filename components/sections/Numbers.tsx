import { CommitChart } from "@/components/CommitChart";
import { NumberGlyph } from "@/components/Icons";
import { numbers } from "@/lib/data";

export function Numbers() {
  return (
    <section className="block container" aria-labelledby="num-h">
      <h2 className="section-title" id="num-h">
        By the numbers
      </h2>
      <div className="numbers">
        {numbers.map((n) => (
          <div key={n.label}>
            <NumberGlyph name={n.icon} />
            <p className="num">{n.value}</p>
            <p className="label">{n.label}</p>
          </div>
        ))}
      </div>
      <figure className="chart-wrap">
        <div className="chart-top">
          <span className="label muted">Monthly commits · Jul 2025 – Sep 2026</span>
          <span className="label accent">7 repositories</span>
        </div>
        <CommitChart />
      </figure>
    </section>
  );
}
