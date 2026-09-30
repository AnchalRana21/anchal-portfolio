import { FocusGlyph } from "@/components/Icons";
import { focusAreas } from "@/lib/data";

export function Focus() {
  return (
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
  );
}
