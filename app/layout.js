import { display, sans } from './fonts';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { club } from '@/content/site';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://menilmontant-basketball.vercel.app'),
  title: {
    default: 'Ménilmontant Basketball · Club de basket du 20e arrondissement',
    template: '%s · Ménilmontant Basketball',
  },
  description:
    "Club de basket historique du 20e arrondissement de Paris, affilié FFBB. Du mini-basket aux loisirs séniors, entraînements au gymnase Pyrénées. Inscriptions ouvertes pour la saison 2026-2027.",
  openGraph: {
    title: 'Ménilmontant Basketball',
    description:
      'Le club de basket historique du 20e arrondissement de Paris. Du mini-basket aux loisirs séniors.',
    url: '/',
    siteName: 'Ménilmontant Basketball',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${sans.variable}`}>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsClub',
              name: club.name,
              alternateName: club.legalName,
              email: club.email,
              sport: 'Basketball',
              url: 'https://menilmontant-basketball.vercel.app',
              sameAs: [club.instagram, club.ffbb],
              address: {
                '@type': 'PostalAddress',
                streetAddress: club.address,
                postalCode: '75020',
                addressLocality: 'Paris',
                addressCountry: 'FR',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
