import Link from 'next/link';

export const metadata = { title: 'Page introuvable' };

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 'clamp(60px, 8vw, 120px)' }}>
      <div className="wrap">
        <div className="eyebrow">Erreur 404</div>
        <h1 className="h1" style={{ marginBottom: 18 }}>
          Cette page n&apos;existe pas
        </h1>
        <p className="lead" style={{ marginBottom: 30, maxWidth: '48ch' }}>
          Le lien est peut-être ancien. Revenez à l&apos;accueil ou consultez les
          équipes et le planning de la saison.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn">
            Retour à l&apos;accueil
          </Link>
          <Link href="/equipes" className="btn-outline">
            Voir les équipes
          </Link>
        </div>
      </div>
    </section>
  );
}
