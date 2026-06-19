import { navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const activeId = useActiveSection(navLinks.map((link) => link.id))
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="navbar">
      <a href="#" className="navbar__logo" aria-label="Accueil">
        DL
      </a>
      <nav className="navbar__nav" aria-label="Navigation principale">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'is-active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar__actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Passer au thème ${isDark ? 'clair' : 'sombre'}`}
          aria-pressed={!isDark}
        >
          <span className="theme-toggle__icon" aria-hidden="true">
            {isDark ? 'D' : 'L'}
          </span>
          <span className="theme-toggle__label">{isDark ? 'Dark' : 'Light'}</span>
        </button>
        <a href="#contact" className="navbar__cta">
          Me contacter
        </a>
      </div>
    </header>
  )
}
