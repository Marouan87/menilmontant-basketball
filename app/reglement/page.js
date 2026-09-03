import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { intro, sections } from '@/content/reglement';
import { club } from '@/content/site';

export const metadata = {
  title: 'Règlement intérieur',
  description:
    'Le règlement intérieur du Ménilmontant Paris Sports : adhésion, engagements des adhérents et des familles, engagements de l’encadrement, responsabilités du club.',
};

export default function ReglementPage() {
  return (
    <>
      <PageHero
        eyebrow={club.legalName}
        title={
          <>
            Règlement
            <br />
            intérieur
          </>
        }
        intro="Ces règles ont pour objectifs de garantir la qualité de vie, d’encadrement et d’apprentissage des adhérents."
        image="/images/page-reglement.jpg"
        position="50% 25%"
        opacity={0.34}
        narrow
      />

      <section className="section">
        <div className="reglement">
          <div className="reglement-intro">{intro}</div>

          {sections.map((s) => (
            <div className="reglement-section" key={s.letter}>
              <div className="reglement-head">
                <span className="reglement-letter">{s.letter}</span>
                <h2>{s.title}</h2>
              </div>
              <div className="articles">
                {s.articles.map((a) => (
                  <div className="article" key={a.n}>
                    <div className="article-n">{a.n}</div>
                    <p>{a.text}</p>
                    {a.lead ? <div className="article-lead">{a.lead}</div> : null}
                    {a.bullets ? (
                      <ul className="article-bullets">
                        {a.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="reglement-sign">
            En vous remerciant de votre confiance
            <br />
            <span>L&apos;équipe de {club.legalName.toUpperCase()}</span>
          </div>

          <div className="btn-row" style={{ marginTop: 34 }}>
            <Link href="/rejoindre" className="btn">
              Rejoindre le club
            </Link>
            <Link href="/contact" className="btn-outline">
              Une question ?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
