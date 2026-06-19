import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">{profile.name}</p>
        <p className="footer__copy">
          © {year} — Développeur Full Stack JavaScript
        </p>
        <a href="#hero" className="footer__top">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  )
}
