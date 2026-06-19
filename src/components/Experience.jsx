import { education, experiences, softSkills } from '../data/portfolio'
import { useStaggerReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const ref = useStaggerReveal()

  return (
    <section className="section experience" id="experience">
      <div ref={ref} className="section__inner reveal-stagger">
        <div className="section__header reveal-item">
          <span className="section__index">03</span>
          <h2 className="section__title">Expérience</h2>
        </div>

        <div className="section__content">
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={exp.role} className="timeline__item reveal-item">
                <div className="timeline__meta">
                  <time>{exp.period}</time>
                  <span>{exp.company}</span>
                </div>
                <h3 className="timeline__role">{exp.role}</h3>
                <p className="timeline__desc">{exp.description}</p>
                <ul className="timeline__tech">
                  {exp.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="experience__secondary">
            <div className="experience__block reveal-item">
              <h3>Formation</h3>
              <ul className="education__list">
                {education.map((item) => (
                  <li key={item.degree}>
                    <time>{item.period}</time>
                    <strong>{item.degree}</strong>
                    <span>{item.school}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="experience__block reveal-item">
              <h3>Qualités humaines</h3>
              <ul className="soft-skills">
                {softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
