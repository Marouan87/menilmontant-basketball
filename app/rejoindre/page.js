import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { goodToKnow, steps } from '@/content/join';
import { club } from '@/content/site';

export const metadata = {
  title: 'Rejoindre le club',
  description:
    'Deux entraînements d’essai offerts, fiche d’adhésion, licence FFBB : la démarche pour rejoindre le Ménilmontant Basketball en 2026-2027.',
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Rejoindre le club"
        title={
          <>
            Venez faire
            <br />
            un essai
          </>
        }
        intro="Les deux premiers entraînements sont libres et sans engagement. Passez au gymnase Pyrénées avec une paire de baskets, on s'occupe du reste."
        image="/images/page-rejoindre.jpg"
      >
        <div style={{ marginTop: 30 }}>
          <a href={club.adhesionPdf} target="_blank" rel="noopener" className="btn-light">
            Demander ma licence ↗
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 32 }}>
            La démarche, en quatre étapes
          </h2>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap split">
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 20 }}>
              Les documents
            </h2>
            <div className="doc-list">
              <a href={club.adhesionPdf} target="_blank" rel="noopener">
                <span className="doc-label">Fiche d&apos;adhésion 2026-2027</span>
                <span className="doc-meta">PDF ↓</span>
              </a>
              <Link href="/reglement">
                <span className="doc-label">Règlement intérieur</span>
                <span className="doc-meta">Lire en ligne →</span>
              </Link>
              <Link href="/equipes#planning">
                <span className="doc-label">Planning des entraînements</span>
                <span className="doc-meta">Voir en ligne →</span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 20 }}>
              Bon à savoir
            </h2>
            <ul className="bullets">
              {goodToKnow.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="callout">
          <div>
            <div className="eyebrow" style={{ letterSpacing: '0.24em', marginBottom: 12 }}>
              Créneaux 2026-2027
            </div>
            <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 0 }}>
              Trouvez votre entraînement
            </h2>
            <p>
              Le planning complet de la saison, par gymnase et par catégorie, avec
              les années de naissance correspondantes. Repérez votre créneau avant
              de venir à l&apos;essai.
            </p>
          </div>
          <Link href="/equipes#planning" className="btn" style={{ whiteSpace: 'nowrap' }}>
            Voir le planning →
          </Link>
        </div>
      </section>
    </>
  );
}
