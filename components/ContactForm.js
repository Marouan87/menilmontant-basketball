'use client';

import { useState } from 'react';
import { club } from '@/content/site';

const SUBJECTS = [
  'Inscription et licence',
  'Essai à un entraînement',
  'Boutique et commandes',
  'Partenariat',
  'Autre',
];

const EMPTY = { name: '', email: '', subject: SUBJECTS[0], message: '', website: '' };

export default function ContactForm({ defaultSubject = SUBJECTS[0] }) {
  const [form, setForm] = useState({ ...EMPTY, subject: defaultSubject });
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setState('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "L'envoi a échoué.");
        setState('idle');
        return;
      }

      setForm({ ...EMPTY, subject: defaultSubject });
      setState('sent');
    } catch {
      setError("L'envoi a échoué. Vérifiez votre connexion.");
      setState('idle');
    }
  };

  if (state === 'sent') {
    return (
      <div className="form-done">
        <div className="form-done-title">Message envoyé</div>
        <p>
          Merci, nous avons bien reçu votre message et nous vous répondons
          rapidement. Pour une question urgente, passez nous voir au gymnase un
          soir d&apos;entraînement.
        </p>
        <button type="button" className="btn-outline" onClick={() => setState('idle')}>
          Écrire un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <label className="field">
        <span>Nom et prénom</span>
        <input
          type="text"
          placeholder="Votre nom"
          required
          minLength={2}
          value={form.name}
          onChange={update('name')}
        />
      </label>

      <label className="field">
        <span>Email</span>
        <input
          type="email"
          placeholder="vous@exemple.fr"
          required
          value={form.email}
          onChange={update('email')}
        />
      </label>

      <label className="field">
        <span>Sujet</span>
        <select value={form.subject} onChange={update('subject')}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Message</span>
        <textarea
          rows={5}
          placeholder="Votre message"
          required
          minLength={10}
          value={form.message}
          onChange={update('message')}
        />
      </label>

      <div className="field-trap" aria-hidden="true">
        <label>
          Ne pas remplir
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update('website')}
          />
        </label>
      </div>

      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn" disabled={state === 'sending'}>
        {state === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>

      <p className="form-hint">
        Vous pouvez aussi écrire directement à{' '}
        <a href={`mailto:${club.email}`}>{club.email}</a>.
      </p>
    </form>
  );
}
