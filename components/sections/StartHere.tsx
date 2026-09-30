import { paths } from "@/lib/data";

type Path = (typeof paths)[number];

function PathCard({ path }: { path: Path }) {
  return (
    <a className="path" href={path.href}>
      <div className="path-top">
        <span className="label accent">{path.tag}</span>
        <span className="chip">{path.chip}</span>
      </div>
      <h3>{path.title}</h3>
      <p className="body">{path.body}</p>
      <span className="label more">
        {path.cta} <span>→</span>
      </span>
    </a>
  );
}

export function StartHere() {
  return (
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
          <PathCard key={p.tag} path={p} />
        ))}
      </div>
    </section>
  );
}
