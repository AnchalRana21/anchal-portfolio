import { HeroActions } from "@/components/CopyEmail";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="diamonds" aria-hidden="true">
        <span className="dia rise">◆</span>
        <span className="dia rise">◆</span>
        <span className="dia rise">◆</span>
      </div>
      <p className="label accent">Frontend Developer · AI Product UI · FutureSmart AI</p>
      <h1>
        I&apos;m <span className="accent">Anchal Rana</span>. I build the interfaces people use to talk to AI.
      </h1>
      <p className="body-large">
        From streaming chat and SQL result views to document extraction tables and voice input, I ship production
        React and Next.js for AI products, backed by <b>15 months and 143 merged pull requests</b> at FutureSmart AI.
      </p>
      <HeroActions />
      <div className="hero-stats">
        {heroStats.map((s) => (
          <div key={s.label}>
            <p className="label accent">{s.label}</p>
            <p className="s">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
