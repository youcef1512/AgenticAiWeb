import { siteContent } from "@/data/site";

const activeContactLinks = siteContent.contactLinks.filter((link) => Boolean(link.href));

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__backdrop" />
        <div className="hero__content">
          <p className="eyebrow">Personal website</p>
          <h1>{siteContent.name}</h1>
          <p className="hero__tagline">{siteContent.tagline}</p>
          <p className="hero__summary">{siteContent.description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={siteContent.primaryCta.href}>
              {siteContent.primaryCta.label}
            </a>
            <a className="button button--secondary" href="#about">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section__header">
          <p className="section__label">About</p>
          <h2>A clean starting point with editable copy.</h2>
        </div>
        <p className="section__body">{siteContent.about}</p>
      </section>

      <section className="section" id="focus">
        <div className="section__header">
          <p className="section__label">Focus</p>
          <h2>Areas this site can highlight immediately.</h2>
        </div>
        <div className="focus-grid">
          {siteContent.focusItems.map((item) => (
            <article className="focus-card" key={item.title}>
              <p className="focus-card__index">{item.index}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="section__header">
          <p className="section__label">Contact</p>
          <h2>Replace the placeholders and point visitors to the right channels.</h2>
        </div>
        <div className="contact-list">
          {activeContactLinks.map((link) => (
            <a
              className="contact-link"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <span>{link.value}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
