import { about } from '../data/portfolio'
import { useStaggerReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useStaggerReveal()

  return (
    <section className="section about" id="about">
      <div ref={ref} className="section__inner reveal-stagger">
        <div className="section__header reveal-item">
          <span className="section__index">01</span>
          <h2 className="section__title">À propos</h2>
        </div>

        <div className="section__content">
          <div className="about__grid">
            <div className="about__text reveal-item">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <ul className="about__highlights reveal-item">
              {about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
