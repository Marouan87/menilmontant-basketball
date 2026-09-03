import Image from 'next/image';
import Link from 'next/link';
import DropGallery from '@/components/DropGallery';
import { archives, lastDrop, shopInfo } from '@/content/shop';
import { club } from '@/content/site';

export const metadata = {
  title: 'Boutique',
  description:
    'Les collections du club, produites en séries limitées : t-shirts, hoodies et maillots Ménilmontant Basketball. Commande par Instagram ou au gymnase.',
};

export default function ShopPage() {
  return (
    <>
      <div className="shop-hero">
        <div className="shop-hero-ring" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow eyebrow-light">Boutique</div>
          <h1>Des drops en série limitée</h1>
          <p>
            Le club sort régulièrement de nouvelles collections, produites en
            petites quantités. Une fois écoulées, elles ne reviennent pas. Les
            pièces ci-dessous sont un aperçu des collections précédentes.
          </p>
          <a href={club.instagram} target="_blank" rel="noopener" className="btn-light">
            Être prévenu du prochain drop ↗
          </a>
        </div>
      </div>

      <Image
        src="/images/shop-banniere-maillots.jpg"
        alt="Maillots et t-shirts du club portés par un joueur"
        width={2000}
        height={800}
        sizes="100vw"
        className="banner"
      />

      <section className="section">
        <div className="wrap">
          <div className="eyebrow-rule">
            <span />
            <span>Dernier drop</span>
          </div>
        </div>
        <div className="wrap split split-center">
          <DropGallery images={lastDrop.images} />
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', marginBottom: 22 }}>
              {lastDrop.name}
            </h2>
            <div className="prose" style={{ maxWidth: '46ch', marginBottom: 26 }}>
              {lastDrop.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="drop-sizes">
              <span>Tailles</span>
              <span style={{ fontSize: 15 }}>{lastDrop.sizes}</span>
            </div>
          </div>
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
