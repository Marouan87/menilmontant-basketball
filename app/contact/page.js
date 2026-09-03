import { Suspense } from 'react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { club } from '@/content/site';

export const metadata = {
  title: 'Contact',
  description:
    'Écrire au Ménilmontant Basketball, venir au gymnase Pyrénées (296 rue des Pyrénées, Paris 20e) ou suivre le club sur Instagram.',
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const defaultSubject =
    params?.sujet === 'boutique' ? 'Boutique et commandes' : 'Inscription et licence';

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            On se voit
            <br />
            au gymnase
          </>
        }
        image="/images/page-contact.jpg"
        position="50% 40%"
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 26px)', marginBottom: 20 }}>
              Le gymnase
            </h2>
            <div className="contact-block">
              <div className="contact-address">
                {club.gym}
                <br />
                {club.address}
                <br />
                {club.zipCity}
              </div>
              <div className="contact-metro">{club.metro}</div>
            </div>

            <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 26px)', marginBottom: 16 }}>
              Nous écrire
            </h2>
            <div className="contact-mail">
              <a href={`mailto:${club.email}`}>{club.email}</a>
            </div>

            <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 26px)', marginBottom: 16 }}>
              Réseaux
            </h2>
            <div className="social-row">
              <a href={club.instagram} target="_blank" rel="noopener" className="pill">
                Instagram ↗
              </a>
              <a href={club.ffbb} target="_blank" rel="noopener" className="pill">
                Fiche FFBB ↗
              </a>
            </div>
          </div>

          <div className="form-card">
            <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 26px)', marginBottom: 24 }}>
              Formulaire de contact
            </h2>
            <Suspense fallback={null}>
              <ContactForm defaultSubject={defaultSubject} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
