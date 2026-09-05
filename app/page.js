import Image from 'next/image';
import Link from 'next/link';
import { club, homeFacts, instagramPosts } from '@/content/site';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/hero-accueil.jpg"
          alt="Un joueur au rebond dans le gymnase, à contre-jour de la verrière"
          fill
          priority
          sizes="100vw"
          className="hero-img"
        />
        <div className="hero-veil" />
        <div className="hero-body">
          <div className="hero-tag">
            <Image
              src="/images/heart-white.png"
              alt=""
              width={28}
              height={28}
              style={{ width: 28, height: 'auto', opacity: 0.9 }}
            />
            <span>Paris 20e · Affilié FFBB</span>
          </div>
          <h1>
            Ménilmontant Basketball. Le club historique du 20e arrondissement.
          </h1>
          <p>
            Un club de quartier, ouvert à tous les niveaux. Du mini-basket aux
            loisirs séniors, on joue, on progresse et on se retrouve chaque
            semaine dans les gymnases du quartier.
          </p>
          <div className="btn-row">
            <Link href="/rejoindre" className="btn-light">
              Rejoindre le club
            </Link>
            <Link href="/equipes" className="btn-outline-light">
              Voir les équipes
            </Link>
          </div>
        </div>
      </section>

      <section className="facts">
        <div className="facts-grid">
          {homeFacts.map((f) => (
            <div className="fact" key={f.label}>
              <div className="fact-label">{f.label}</div>
              <div className="fact-value">{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-lg">
        <div className="wrap split split-center">
          <div className="duo">
            <Image
              src="/images/shop-1.jpg"
              alt="Licencié en t-shirt du club"
              width={900}
              height={1200}
              sizes="(max-width: 800px) 45vw, 280px"
            />
            <Image
              src="/images/shop-2.jpg"
              alt="Deux jeunes joueurs avec leur maillot"
              width={900}
              height={1200}
              sizes="(max-width: 800px) 45vw, 280px"
            />
          </div>
          <div>
            <div className="eyebrow-rule">
              <span />
              <span>Le textile</span>
            </div>
            <h2 className="h2" style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: 18 }}>
              Portez les couleurs du club
            </h2>
            <p className="prose" style={{ maxWidth: '44ch', marginBottom: 28 }}>
              T-shirts, hoodies et maillots floqués Ménilmontant, sortis en séries
              limitées au fil de la saison. Commande par message sur Instagram ou
              directement au gymnase.
            </p>
            <Link href="/textile" className="btn">
              Voir les pièces
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="wrap">
          <div className="ig-head">
            <div>
              <div className="eyebrow eyebrow-light" style={{ marginBottom: 12 }}>
                Instagram
              </div>
              <h2>{club.instagramHandle}</h2>
            </div>
            <a href={club.instagram} target="_blank" rel="noopener" className="link-light">
              Suivre le compte
            </a>
          </div>
          <div className="ig-grid">
            {instagramPosts.map((post) => (
              <a
                key={post.src}
                href={club.instagram}
                target="_blank"
                rel="noopener"
                className="ig-cell"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 700px) 100vw, 280px"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
