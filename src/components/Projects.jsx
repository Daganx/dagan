import { projectPlaceholders } from '../data/portfolio'
import { useStaggerReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  const ref = useStaggerReveal()

  return (
    <section className="section projects" id="projects">
      <div ref={ref} className="section__inner reveal-stagger">
        <div className="section__header reveal-item">
          <span className="section__index">04</span>
          <h2 className="section__title">Projets</h2>
        </div>

        <div className="section__content">
          <p className="projects__intro reveal-item">
            Sélection de réalisations à venir —
          </p>

          <div className="projects__grid">
            {projectPlaceholders.map((project, index) => (
              <article key={project.id} className="project-card reveal-item">
                <div className="project-card__top">
                  <span className="project-card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="project-card__status">{project.status}</span>
                </div>
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tech">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
