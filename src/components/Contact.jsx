import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/portfolio'
import { useStaggerReveal } from '../hooks/useScrollReveal'

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Le nom est requis.'
  }

  if (!form.email.trim()) {
    errors.email = 'L\'email est requis.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Format d\'email invalide.'
  }

  if (!form.message.trim()) {
    errors.message = 'Le message est requis.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères.'
  }

  return errors
}

export default function Contact() {
  const ref = useStaggerReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(form)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSending(true)
    setSendError(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: form.name,
          lastName: '',
          topics: '',
          message: form.message,
          email: form.email,
          phoneNumber: '',
          city: '',
        },
        publicKey,
      )
      .then(
        () => {
          setErrors({})
          setSubmitted(true)
          setForm(initialForm)
          setSending(false)
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          setSendError("L'envoi a échoué. Veuillez réessayer.")
          setSending(false)
        },
      )
  }

  return (
    <section className="section contact" id="contact">
      <div ref={ref} className="section__inner reveal-stagger">
        <div className="section__header reveal-item">
          <span className="section__index">05</span>
          <h2 className="section__title">Contact</h2>
        </div>

        <div className="section__content">
          <div className="contact__layout">
            <div className="contact__info reveal-item">
              <p className="contact__lead">
                Un projet, une mission freelance ou simplement une question ?
                Écrivez-moi — je réponds sous 48h.
              </p>
              <ul className="contact__details">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <span>Disponibilité</span>
                  <p>{profile.availability}</p>
                </li>
              </ul>
            </div>

            <form className="contact__form reveal-item" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'has-error' : ''}
                  placeholder="Votre nom"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'has-error' : ''}
                  placeholder="vous@exemple.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'has-error' : ''}
                  placeholder="Décrivez votre projet..."
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn--primary btn--full" disabled={sending}>
                {sending ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>

              {sendError && (
                <p className="form-error" role="status">
                  {sendError}
                </p>
              )}

              {submitted && (
                <p className="form-success" role="status">
                  Message envoyé avec succès ! Je vous répondrai sous 48h.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
