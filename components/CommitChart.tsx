import { monthlyCommits } from "@/lib/data";

const L = 30, R = 510, T = 16, B = 160, MAX = 300;
const step = (R - L) / monthlyCommits.length;
const bw = step * 0.6;
const peak = Math.max(...monthlyCommits.map(([, v]) => v));
const yearSplit = L + 6 * step;

export function CommitChart() {
  return (
    <svg
      className="chart"
      viewBox="0 0 520 190"
      role="img"
      aria-label={`Monthly commits from July 2025 to September 2026, peaking at ${peak} in May 2026.`}
    >
      {[0, 100, 200, 300].map((v) => {
        const y = B - (v / MAX) * (B - T);
        return (
          <g key={v}>
            <line x1={L} x2={R} y1={y} y2={y} className="grid" />
            <text x={L - 6} y={y + 3} textAnchor="end" className="axis">
              {v}
            </text>
          </g>
        );
      })}
      {monthlyCommits.map(([month, value], i) => {
        const h = (value / MAX) * (B - T);
        const x = L + i * step + (step - bw) / 2;
        const y = B - h;
        const hi = value === peak;
        const cx = (x + bw / 2).toFixed(1);
        return (
          <g key={i}>
            <rect
              x={x.toFixed(1)}
              y={y.toFixed(1)}
              width={bw.toFixed(1)}
              height={h.toFixed(1)}
              className={hi ? "bar-r hi" : "bar-r"}
              style={{ animationDelay: `${i * 40}ms` }}
            />
            {hi && (
              <text x={cx} y={(y - 5).toFixed(1)} textAnchor="middle" className="val">
                {value}
              </text>
            )}
            <text x={cx} y={B + 14} textAnchor="middle" className="axis">
              {month}
            </text>
          </g>
        );
      })}
      <line x1={yearSplit - 2} x2={yearSplit - 2} y1={B + 4} y2={188} className="grid" />
      <text x={L} y={186} className="axis">2025</text>
      <text x={yearSplit + 4} y={186} className="axis">2026</text>
    </svg>
  );
}
