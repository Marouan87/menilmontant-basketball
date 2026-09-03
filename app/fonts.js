import localFont from 'next/font/local';

// Polices auto-hébergées (Oswald et Source Sans 3, licence SIL Open Font).
// Aucun appel à Google Fonts depuis le navigateur du visiteur.
export const display = localFont({
  src: [
    { path: './fonts/oswald-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/oswald-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/oswald-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/oswald-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/oswald-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const sans = localFont({
  src: [
    { path: './fonts/source-sans-3-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/source-sans-3-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/source-sans-3-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
});
