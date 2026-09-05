export const club = {
  name: 'Ménilmontant Basketball',
  legalName: 'Ménilmontant Paris Sports',
  email: 'menil.parissports@gmail.com',
  gym: 'Gymnase Pyrénées',
  address: '296 Rue des Pyrénées',
  zipCity: '75020 Paris',
  metro: 'Métro Pyrénées, ligne 11',
  instagram: 'https://www.instagram.com/menilmontantbb/',
  instagramHandle: '@menilmontantbb',
  ffbb: 'https://competitions.ffbb.com/ligues/idf/comites/0075/clubs/idf0075045',
  adhesionPdf:
    "https://menilmontantbb.com/assets/fichiers_mps/Fiche%20d'adhesion%20MPS%202026-2027.pdf",
  season: '2026 — 2027',
};

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/le-club', label: 'Le club' },
  { href: '/equipes', label: 'Équipes' },
  { href: '/textile', label: 'Textile' },
  { href: '/rejoindre', label: 'Rejoindre le club' },
  { href: '/contact', label: 'Contact' },
];

export const homeFacts = [
  { label: 'Le gymnase', value: 'Gymnase Pyrénées, Paris 20e' },
  { label: 'Nos catégories', value: 'U7 à vétérans · Loisirs séniors' },
  { label: 'Saison', value: '2026 — 2027, inscriptions ouvertes' },
];

export const instagramPosts = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
  src: `/images/ig-${n}.jpg`,
  alt: 'Publication Instagram du club',
}));
