import { experience } from "@/lib/data";

type Entry = (typeof experience)[number];

function ExperienceItem({ entry }: { entry: Entry }) {
  return (
    <div className="exp-item">
      <div>
        <p className="label muted">{entry.dates}</p>
        <p className="loc">{entry.location}</p>
      </div>
      <div>
        <h3>{entry.title}</h3>
        <p className="label accent">{entry.org}</p>
        <p className="body">{entry.body}</p>
        {entry.points && (
          <ul>
            {entry.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="block container" id="experience" aria-labelledby="exp-h">
      <h2 className="section-title" id="exp-h">
        Experience
      </h2>
      <div className="exp">
        {experience.map((e) => (
          <ExperienceItem key={e.title} entry={e} />
        ))}
      </div>
    </section>
  );
}
