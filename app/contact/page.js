import { Suspense } from 'react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { club } from '@/content/site';

export const metadata = {
  title: 'Contact',
  description:
    'Nous rencontrer au gymnase Pyrénées (296 rue des Pyrénées, Paris 20e), nous écrire par le formulaire, ou suivre le club sur Instagram.',
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
        <div className="contact-col">
          <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 20 }}>
            Nous rencontrer
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
          <p className="lead" style={{ fontSize: 16, marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            Passez nous voir un soir d&apos;entraînement, le planning de la saison
            est sur la page Équipes.
          </p>

          <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 20 }}>
            Nous écrire
          </h2>
          <div className="form-card" style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <Suspense fallback={null}>
              <ContactForm defaultSubject={defaultSubject} />
            </Suspense>
          </div>

          <h2 className="h2" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 20 }}>
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
      </section>
    </>
  );
}
