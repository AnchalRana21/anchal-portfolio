import { CopyEmailButton } from "@/components/CopyEmail";
import { EMAIL, GITHUB } from "@/lib/data";

export function Contact() {
  return (
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
  );
}
