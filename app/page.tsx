import { Fragment } from "react";
import { CommitChart } from "@/components/CommitChart";
import { CopyEmailButton, HeroActions } from "@/components/CopyEmail";
import { ArrowUpRight, CodeIcon, FocusGlyph, Logo, NumberGlyph } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  EMAIL,
  GITHUB,
  builtAt,
  experience,
  focusAreas,
  heroStats,
  marqueeItems,
  navLinks,
  numbers,
  paths,
  projects,
  skillGroups,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <a className="skip label" href="#main">
        Skip to main content
      </a>
      <header className="site">
        <nav className="container" aria-label="Main">
          <a className="brand" href="#top">
            <Logo />
            <span className="wordmark">
              Anchal<span className="cursor" />
            </span>
          </a>
          <div className="nav-links label">
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} aria-current={i === 0 ? "page" : undefined}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <ThemeToggle />
            <a className="btn" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
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

        <section className="block container" aria-labelledby="start-h">
          <p className="label accent sec-label">Start here</p>
          <h2 className="section-title" id="start-h">
            Choose the path that matches why you came
          </h2>
          <p className="body-large sec-sub">
            This page has three jobs: show what I have shipped, show how I work, and make it easy to reach me.
          </p>
          <div className="paths">
            {paths.map((p) => (
              <a key={p.tag} className="path" href={p.href}>
                <div className="path-top">
                  <span className="label accent">{p.tag}</span>
                  <span className="chip">{p.chip}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="body">{p.body}</p>
                <span className="label more">
                  {p.cta} <span>→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="marquee" aria-label="Areas I work in">
          <div className="track label accent">
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

        <section className="block container" id="focus" aria-labelledby="focus-h">
          <h2 className="section-title" id="focus-h">
            What I focus on
          </h2>
          <div className="focus">
            {focusAreas.map((f) => (
              <div key={f.title}>
                <FocusGlyph name={f.icon} />
                <h3>{f.title}</h3>
                <p className="body">{f.body}</p>
                <p className="label accent">{f.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="block container" id="work" aria-labelledby="work-h">
          <div className="work-head">
            <h2 className="section-title" id="work-h">
              Selected work
            </h2>
            <a className="label muted" href={GITHUB}>
              GitHub profile →
            </a>
          </div>
          <div className="work-list">
            {projects.map((p) => (
              <article key={p.title} className="proj cb">
                <div className="proj-meta">
                  <p className="label muted">{p.meta}</p>
                  {p.live && (
                    <span className="proj-badge">
                      <i />
                      Live
                    </span>
                  )}
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p className="body">{p.body}</p>
                  {p.points && (
                    <ul>
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                  <p className="label accent">{p.highlight}</p>
                  {p.links && (
                    <div className="live-links">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          className={l.primary ? "live primary" : "live"}
                          href={l.href}
                          target="_blank"
                          rel="noopener"
                        >
                          <span className="label">{l.label}</span>
                          <span className="host">{l.host}</span>
                          <ArrowUpRight />
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

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

        <section className="block container" id="skills" aria-labelledby="skills-h">
          <h2 className="section-title" id="skills-h">
            Technical skills
          </h2>
          <div className="skills">
            {skillGroups.map((g) => (
              <div key={g.title}>
                {g.lead ? (
                  <h3 className="lead">
                    <CodeIcon />
                    {g.title}
                  </h3>
                ) : (
                  <h3 className="label">{g.title}</h3>
                )}
                <div className="skill-tags">
                  {g.items.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

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

        <section className="block container" id="experience" aria-labelledby="exp-h">
          <h2 className="section-title" id="exp-h">
            Experience
          </h2>
          <div className="exp">
            {experience.map((e) => (
              <div key={e.title} className="exp-item">
                <div>
                  <p className="label muted">{e.dates}</p>
                  <p className="loc">{e.location}</p>
                </div>
                <div>
                  <h3>{e.title}</h3>
                  <p className="label accent">{e.org}</p>
                  <p className="body">{e.body}</p>
                  {e.points && (
                    <ul>
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="block container contact" id="contact" aria-labelledby="contact-h">
          <p className="label accent sec-label">Contact</p>
          <h2 className="section-title" id="contact-h">
            Let&apos;s build something people use
          </h2>
          <p className="body-large sec-sub">
            Open to frontend roles on AI products, on-site or remote. Email is the fastest way to reach me.
          </p>
          <p className="email-line">{EMAIL}</p>
          <div className="contact-row">
            <CopyEmailButton />
            <a className="btn" href={GITHUB}>
              GitHub <span className="tip">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="container">
          <span>© 2026 Anchal Rana · Sonipat, Haryana, India</span>
          <span className="label">Figures from git history, Sep 2026</span>
        </div>
      </footer>
    </>
  );
}
