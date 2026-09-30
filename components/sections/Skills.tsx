import { CodeIcon } from "@/components/Icons";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
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
  );
}
