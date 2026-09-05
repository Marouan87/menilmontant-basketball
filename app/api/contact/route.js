import { Resend } from 'resend';
import { club } from '@/content/site';

// Adresse d'expédition. Tant que le domaine du club n'est pas vérifié dans
// Resend, on garde l'expéditeur de test onboarding@resend.dev, qui n'autorise
// l'envoi que vers l'adresse du compte Resend. Après vérification de
// menilmontantbb.com, remplacer par une adresse du domaine, par exemple
// "Site du club <site@menilmontantbb.com>".
const FROM = process.env.CONTACT_FROM || 'Site du club <onboarding@resend.dev>';
const TO = process.env.CONTACT_TO || club.email;

const SUBJECTS = [
  'Inscription et licence',
  'Essai à un entraînement',
  'Boutique et commandes',
  'Partenariat',
  'Autre',
];

const clean = (v, max) => String(v ?? '').trim().slice(0, max);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

const escape = (v) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "L'envoi n'est pas configuré sur le serveur." },
      { status: 500 },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160);
  const message = clean(payload.message, 5000);
  const subject = SUBJECTS.includes(payload.subject) ? payload.subject : SUBJECTS[0];

  // Champ piège : rempli seulement par les robots.
  if (clean(payload.website, 10)) {
    return Response.json({ ok: true });
  }

  if (name.length < 2 || !isEmail(email) || message.length < 10) {
    return Response.json(
      { error: 'Merci de vérifier votre nom, votre email et votre message.' },
      { status: 422 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `[Site] ${subject} — ${name}`,
      text: [
        `Sujet : ${subject}`,
        `Nom : ${name}`,
        `Email : ${email}`,
        '',
        message,
        '',
        '— Message envoyé depuis le formulaire de contact du site.',
      ].join('\n'),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1f2c3d;line-height:1.6">
          <p style="margin:0 0 4px"><strong>Sujet</strong> : ${escape(subject)}</p>
          <p style="margin:0 0 4px"><strong>Nom</strong> : ${escape(name)}</p>
          <p style="margin:0 0 16px"><strong>Email</strong> : ${escape(email)}</p>
          <div style="border-left:3px solid #1f2c3d;padding-left:14px;white-space:pre-line">${escape(message)}</div>
          <p style="margin:20px 0 0;font-size:13px;color:#8a97a6">Message envoyé depuis le formulaire de contact du site.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend', error);
      return Response.json(
        { error: "L'envoi a échoué. Écrivez-nous directement par mail." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Resend', err);
    return Response.json(
      { error: "L'envoi a échoué. Écrivez-nous directement par mail." },
      { status: 502 },
    );
  }
}
