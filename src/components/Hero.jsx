import { profile, marqueeItems } from '../data/portfolio'
import portraitUrl from '../assets/dagan-hover.jpg'

function HeroUnderline() {
  return (
    <svg
      className="hero__scribble hero__scribble--underline"
      viewBox="0 0 280 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 10C45 14 90 6 135 10C180 14 225 6 278 10"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        pathLength="1"
      />
    </svg>
  )
}

function HeroSparkle() {
  return (
    <svg
      className="hero__scribble hero__scribble--sparkle"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16 2V8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 24V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M2 16H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 16H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 6L10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 22L26 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 6L22 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 22L6 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function Hero() {
  const track = [...marqueeItems, ...marqueeItems]

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero__meta hero__animate" style={{ '--delay': '0.1s' }}>
        <span className="hero__badge">Disponible — Freelance</span>
        <span className="hero__location">{profile.location}</span>
      </div>

      <h1 className="hero__title">
        <span
          className="hero__name hero__animate"
          style={{ '--delay': '0.2s' }}
          tabIndex={0}
        >
          <span className="hero__portrait-preview" aria-hidden="true">
            <img src={portraitUrl} alt="" />
          </span>
          <span className="hero__name-word">Dagan</span>
          <span className="hero__name-row">
            <span className="hero__name-accent">
              Letot
              <HeroUnderline />
            </span>
            <HeroSparkle />
          </span>
        </span>

        <span
          className="hero__title-line hero__title-line--muted hero__animate"
          style={{ '--delay': '0.45s' }}
        >
          {profile.title}
        </span>
      </h1>

      <p
        className="hero__tagline hero__animate"
        style={{ '--delay': '0.6s' }}
      >
        {profile.tagline}
      </p>

      <div
        className="hero__actions hero__animate"
        style={{ '--delay': '0.75s' }}
      >
        <a href="#projects" className="btn btn--primary">
          Voir les projets
        </a>
        <a href="#contact" className="btn btn--ghost">
          Discutons
        </a>
      </div>

      <div className="marquee hero__animate" style={{ '--delay': '0.9s' }} aria-hidden="true">
        <div className="marquee__track">
          {track.map((item, index) => (
            <span key={`${item}-${index}`} className="marquee__item">
              {item}
              <span className="marquee__dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
