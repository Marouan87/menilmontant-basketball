const FFBB_TEAM = 'https://competitions.ffbb.com/ligues/idf/comites/0075/clubs/idf0075045/equipes';

export const teamGroups = [
  {
    title: 'École de basket',
    sub: 'Mini-basket, hors championnat',
    teams: [
      {
        name: 'U7 — U9',
        level: 'Mini-basket, groupe commun (nés de 2018 à 2021)',
        training: 'Samedi, 9h00 — 10h30\nGymnase Bretonneau',
      },
    ],
  },
  {
    title: 'Jeunes',
    sub: 'U11 à U21',
    teams: [
      { name: 'U11', level: 'Deux groupes, nés en 2016 et 2017', training: 'Mercredi, 14h45 — 16h15\nSamedi, 10h45 — 12h15\nGymnase Bretonneau' },
      { name: 'U13', level: 'Deux groupes, nés en 2014 et 2015', training: 'Mercredi, 16h15 — 17h30 · Bretonneau\nJeudi, 18h00 — 19h30 · Robert Doisneau' },
      { name: 'U15', level: 'Deux groupes, nés en 2012 et 2013', training: 'Mercredi, 17h30 — 19h00 · Pyrénées\nJeudi, 19h00 — 20h30 · Robert Doisneau' },
      { name: 'U18', level: 'Régionale masculine U18 - Division 2', training: 'Vendredi, 18h00 — 19h15\nGymnase Pyrénées', href: `${FFBB_TEAM}/200000005337906` },
      { name: 'U21', level: 'Régionale masculine U21 - Division 2', training: 'Mercredi, 19h00 — 20h30\nGymnase Pyrénées', href: `${FFBB_TEAM}/200000005337825` },
    ],
  },
  {
    title: 'Séniors et adultes',
    sub: 'Championnats et loisirs',
    teams: [
      { name: 'Pré régionale', level: 'Pré régionale masculine', training: 'Lundi, 20h30 — 22h00\nVendredi, 22h00 — 23h30\nGymnase Pyrénées', href: `${FFBB_TEAM}/200000005347313` },
      { name: 'Départementale 3', level: 'Départementale masculine séniors - Division 3', training: 'Lundi, 22h00 — 23h30\nMercredi, 22h00 — 23h30\nGymnase Pyrénées', href: `${FFBB_TEAM}/200000005347341` },
      { name: 'Vétérans', level: 'Régionale masculine Vétérans - Division 2', training: 'Mercredi, 20h30 — 22h00\nGymnase Pyrénées', href: `${FFBB_TEAM}/200000005337731` },
      { name: 'Loisirs séniors', level: 'Basket sans compétition, à partir de 2005', training: 'Mardi, 22h00 — 23h30\nJeudi, 22h30 — 00h00\nGymnase Pyrénées' },
    ],
  },
];

export const planning = [
  {
    venue: 'Gymnase Pyrénées',
    address: '296 rue des Pyrénées, 75020 Paris',
    days: [
      { day: 'Lundi', slots: [['U18 PERF', '19h - 20h30'], ['Seniors 1', '20h30 - 22h'], ['Seniors 2', '22h - 23h30']] },
      { day: 'Mardi', slots: [['U13 PERF', '17h30 - 19h'], ['U15 PERF', '19h - 20h30'], ['U21 PBA', '20h30 - 22h'], ['Loisirs', '22h - 23h30']] },
      { day: 'Mercredi', slots: [['U15', '17h30 - 19h'], ['U21 MPS', '19h - 20h30'], ['Vétérans', '20h30 - 22h'], ['Seniors 2', '22h - 23h30']] },
      { day: 'Jeudi', slots: [['Loisirs', '22h30 - 00h']] },
      { day: 'Vendredi', slots: [['U18', '18h - 19h15'], ['U18 PBA', '19h15 - 20h30'], ['U21 PBA', '20h30 - 22h'], ['Seniors 1', '22h - 23h30']] },
    ],
  },
  {
    venue: 'Gymnase Bretonneau',
    address: '7 rue Bretonneau, 75020 Paris',
    days: [
      { day: 'Mardi', slots: [['U11-1', '18h - 19h']] },
      { day: 'Mercredi', slots: [['U11-2', '13h30 - 14h45'], ['U11-1', '14h45 - 16h15'], ['U13-1', '16h15 - 17h30']] },
      { day: 'Samedi', slots: [['U7 et U9', '9h - 10h30'], ['U11', '10h45 - 12h15']] },
    ],
  },
  {
    venue: 'Collège Robert Doisneau',
    address: '51 rue des Panoyaux, 75020 Paris',
    days: [{ day: 'Jeudi', slots: [['U13-2', '18h - 19h30'], ['U15-2', '19h - 20h30']] }],
  },
  {
    venue: 'Gymnase Paul Valéry',
    address: '15 rue de la Nouvelle-Calédonie, 75012 Paris',
    days: [{ day: 'Lundi', slots: [['U18-2 PBA', '18h - 19h30']] }],
  },
];

export const ages = [
  ['U7', '5 et 6 ans'],
  ['U9', '7 et 8 ans'],
  ['U11', '9 et 10 ans'],
  ['U13', '11 et 12 ans'],
  ['U15', '13 et 14 ans'],
  ['U18', '15 à 17 ans'],
  ['U21', '18 à 20 ans'],
  ['Seniors', '21 ans et +'],
  ['Anciens', '36 ans et +'],
];
