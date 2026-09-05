import Image from 'next/image';
import Link from 'next/link';
import DropGallery from '@/components/DropGallery';
import PageHero from '@/components/PageHero';
import { archives, drops, shopInfo } from '@/content/shop';
import { club } from '@/content/site';

export const metadata = {
  title: 'Textile',
  description:
    'Les collections du club, produites en séries limitées : t-shirts, hoodies et maillots Ménilmontant Basketball. Commande par Instagram ou au gymnase.',
};

export default function TextilePage() {
  return (
    <>
      <PageHero
        eyebrow="Textile"
        title="Des séries limitées"
        intro="Le club sort régulièrement de nouvelles pièces, produites en petites quantités. Une fois écoulées, elles ne reviennent pas. Il n'y a pas de vente en ligne : tout se commande par message ou au gymnase."
        image="/images/shop-banniere-maillots.jpg"
        position="50% 45%"
      >
        <div style={{ marginTop: 30 }}>
          <a href={club.instagram} target="_blank" rel="noopener" className="btn-light">
            Être prévenu du prochain drop ↗
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow-rule">
            <span />
            <span>Les pièces du club</span>
          </div>

          {drops.map((drop) => (
            <div className="drop split split-center" key={drop.slug}>
              <DropGallery images={drop.images} />
              <div>
                {drop.badge ? <div className="drop-badge">{drop.badge}</div> : null}
                <h2 className="h2" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', marginBottom: 22 }}>
                  {drop.name}
                </h2>
                <div className="prose" style={{ maxWidth: '46ch', marginBottom: 26 }}>
                  {drop.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="drop-sizes">
                  <span>Tailles</span>
                  <span style={{ fontSize: 15 }}>{drop.sizes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="order-band">
        <div className="order-grid">
          <div className="rule-left">
            <h2 className="h3" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)' }}>
              Comment commander
            </h2>
            <p>
              Il n&apos;y a pas de paiement en ligne. Chaque drop est annoncé sur
              Instagram : écrivez-nous en message privé ou passez nous voir au
              gymnase un soir d&apos;entraînement. On vous dit ce qui reste en
              stock et on prépare votre commande.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/contact?sujet=boutique" className="btn" style={{ padding: '15px 20px', fontSize: 12.5 }}>
              Nous contacter
            </Link>
            <Link href="/contact" className="btn-outline" style={{ padding: '15px 20px', fontSize: 12.5 }}>
              Venir au gymnase
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 'clamp(26px, 3vw, 40px)' }}>
            <div className="eyebrow" style={{ letterSpacing: '0.26em', marginBottom: 12 }}>
              Archives
            </div>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              Aperçu des collections précédentes
            </h2>
            <p className="lead" style={{ fontSize: 16.5, maxWidth: '58ch' }}>
              Ces pièces ne sont plus à la vente. Elles donnent une idée de ce que
              le club produit d&apos;un drop à l&apos;autre.
            </p>
          </div>

          <div className="archives">
            {archives.map((a) => (
              <figure className="archive" key={a.src}>
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={1100}
                  height={1650}
                  sizes="(max-width: 800px) 100vw, 360px"
                />
                <figcaption>
                  <div className="archive-title">{a.title}</div>
                  <div className="archive-desc">{a.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <figure style={{ margin: '0 0 clamp(40px, 5vw, 72px)' }}>
        <Image
          src="/images/shop-banniere-fringues.jpg"
          alt="T-shirts, hoodie et maillot du club suspendus sur un grillage de playground"
          width={2000}
          height={900}
          sizes="100vw"
          className="banner banner-tall"
        />
        <figcaption className="wrap caption" style={{ padding: '12px 5% 0' }}>
          Collections passées · t-shirts, hoodie et maillot
        </figcaption>
      </figure>

      <section className="section section-soft">
        <div className="wrap info-grid">
          {shopInfo.map((i) => (
            <div key={i.title}>
              <div className="info-title">{i.title}</div>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
