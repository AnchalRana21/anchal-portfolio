import { ArrowUpRight } from "@/components/Icons";
import { GITHUB, projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="proj cb">
      <div className="proj-meta">
        <p className="label muted">{project.meta}</p>
        {project.live && (
          <span className="proj-badge">
            <i />
            Live
          </span>
        )}
      </div>
      <div>
        <h3>{project.title}</h3>
        <p className="body">{project.body}</p>
        {project.points && (
          <ul>
            {project.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        )}
        <p className="label accent">{project.highlight}</p>
        {project.links && (
          <div className="live-links">
            {project.links.map((l) => (
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
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
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
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
