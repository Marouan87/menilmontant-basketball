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

export default function ContactForm({ defaultSubject = SUBJECTS[0] }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: defaultSubject,
    message: '',
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${club.email}?subject=${encodeURIComponent(
      `[Site] ${form.subject}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <label className="field">
        <span>Nom et prénom</span>
        <input
          type="text"
          placeholder="Votre nom"
          required
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
          value={form.message}
          onChange={update('message')}
        />
      </label>

      <button type="submit" className="btn">
        Envoyer le message
      </button>
      <p className="form-hint">
        Le formulaire ouvre votre messagerie avec le message prérempli. Vous
        pouvez aussi écrire directement à {club.email}.
      </p>
    </form>
  );
}
