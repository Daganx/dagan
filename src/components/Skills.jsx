import { useState } from 'react'
import { skillCategories } from '../data/portfolio'
import { useStaggerReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const ref = useStaggerReveal()
  const [activeId, setActiveId] = useState(skillCategories[0].id)

  const active = skillCategories.find((cat) => cat.id === activeId)

  return (
    <section className="section skills" id="skills">
      <div ref={ref} className="section__inner reveal-stagger">
        <div className="section__header reveal-item">
          <span className="section__index">02</span>
          <h2 className="section__title">Compétences</h2>
        </div>

        <div className="section__content">
          <div className="skills__layout reveal-item">
            <ul className="skills__list" role="tablist">
              {skillCategories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeId === category.id}
                    className={`skills__tab ${activeId === category.id ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveId(category.id)}
                    onFocus={() => setActiveId(category.id)}
                    onClick={() => setActiveId(category.id)}
                  >
                    <span className="skills__tab-title">{category.title}</span>
                    <span className="skills__tab-preview">{category.preview}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="skills__preview" role="tabpanel" key={activeId}>
              <p className="skills__preview-label">{active?.preview}</p>
              <ul className="skills__tags">
                {active?.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
