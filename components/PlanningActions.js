'use client';

import { useState } from 'react';

const PDF = '/documents/planning-entrainements-2026-2027.pdf';

export default function PlanningActions() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}${PDF}`;
    const data = {
      title: 'Planning des entraînements — Ménilmontant Basketball',
      text: 'Le planning des entraînements du club, saison 2026-2027.',
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        // partage annulé par l'utilisateur : on ne fait rien
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.open(url, '_blank', 'noopener');
    }
  };

  return (
    <div className="btn-row planning-actions">
      <a href={PDF} download className="btn">
        Télécharger le planning (PDF)
      </a>
      <button type="button" className="btn-outline" onClick={share}>
        {copied ? 'Lien copié ✓' : 'Partager le planning'}
      </button>
    </div>
  );
}
