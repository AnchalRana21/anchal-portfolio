import { builtAt } from "@/lib/data";

export function BuiltAt() {
  return (
    <section className="built container" aria-label="Products shipped at FutureSmart AI">
      <p className="label">Shipped in production at FutureSmart AI</p>
      <div className="built-row">
        {builtAt.map((b) => (
          <div key={b.name}>
            <p className="n">{b.name}</p>
            <p className="label">{b.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
