const FFBB_TEAM = 'https://competitions.ffbb.com/ligues/idf/comites/0075/clubs/idf0075045/equipes';

export const teamGroups = [
  {
    title: 'Jeunes',
    sub: 'U7 à U21',
    teams: [
      {
        name: 'U7 — U9',
        level: 'Mini-basket, groupe commun (nés de 2018 à 2021)',
        training: 'Samedi, 9h00 — 10h30\nGymnase Bretonneau',
      },
      {
        name: 'U11',
        level: 'Nés en 2016 et 2017',
        squads: [
          {
            title: 'U11-1',
            level: 'Groupe compétition',
            training: 'Mardi, 18h00 — 19h00\nMercredi, 14h45 — 16h15\nGymnase Bretonneau',
          },
          {
            title: 'U11 Loisirs',
            level: 'Groupe loisirs, sans compétition',
            training: 'Mercredi, 13h30 — 14h45\nSamedi, 10h45 — 12h15\nGymnase Bretonneau',
          },
        ],
      },
      {
        name: 'U13',
        level: 'Nés en 2014 et 2015',
        squads: [
          {
            title: 'U13-1',
            level: 'Premier groupe',
            training: 'Mardi, 17h30 — 19h00 · Pyrénées\nMercredi, 16h15 — 17h30 · Bretonneau',
          },
          {
            title: 'U13-2',
            level: 'Second groupe',
            training: 'Jeudi, 18h00 — 19h30\nCollège Robert Doisneau',
          },
        ],
      },
      {
        name: 'U15',
        level: 'Nés en 2012 et 2013',
        squads: [
          {
            title: 'U15-1',
            level: 'Premier groupe',
            training: 'Mardi, 19h00 — 20h30 · Pyrénées\nMercredi, 17h30 — 19h00 · Pyrénées',
          },
          {
            title: 'U15-2',
            level: 'Second groupe',
            training: 'Jeudi, 19h00 — 20h30\nCollège Robert Doisneau',
          },
        ],
      },
      {
        name: 'U18',
        level: 'Nés de 2009 à 2011',
        squads: [
          {
            title: 'U18 MPS',
            level: 'Régionale masculine U18 - Division 2',
            training: 'Lundi, 19h00 — 20h30\nVendredi, 18h00 — 19h15\nGymnase Pyrénées',
            href: `${FFBB_TEAM}/200000005337906`,
          },
          {
            title: 'U18 PBA',
            level: 'Départementale masculine U18',
            training: 'Vendredi, 19h15 — 20h30 · Pyrénées\nLundi, 18h00 — 19h30 · Paul Valéry',
          },
        ],
      },
      {
        name: 'U21',
        level: 'Nés de 2006 à 2008',
        squads: [
          {
            title: 'U21 MPS',
            level: 'Régionale masculine U21 - Division 2',
            training: 'Mercredi, 19h00 — 20h30\nGymnase Pyrénées',
            href: `${FFBB_TEAM}/200000005337825`,
          },
          {
            title: 'U21 PBA',
            level: 'Départementale masculine U21',
            training: 'Mardi, 20h30 — 22h00\nVendredi, 20h30 — 22h00\nGymnase Pyrénées',
          },
        ],
      },
    ],
  },
  {
    title: 'Séniors et vétérans',
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
      { day: 'Lundi', slots: [['U18 MPS', '19h - 20h30'], ['Séniors 1', '20h30 - 22h'], ['Séniors 2', '22h - 23h30']] },
      { day: 'Mardi', slots: [['U13-1', '17h30 - 19h'], ['U15-1', '19h - 20h30'], ['U21 PBA', '20h30 - 22h'], ['Loisirs séniors', '22h - 23h30']] },
      { day: 'Mercredi', slots: [['U15-1', '17h30 - 19h'], ['U21 MPS', '19h - 20h30'], ['Vétérans', '20h30 - 22h'], ['Séniors 2', '22h - 23h30']] },
      { day: 'Jeudi', slots: [['Loisirs séniors', '22h30 - 00h00']] },
      { day: 'Vendredi', slots: [['U18 MPS', '18h - 19h15'], ['U18 PBA-2', '19h15 - 20h30'], ['U21 PBA', '20h30 - 22h'], ['Séniors 1', '22h - 23h30']] },
    ],
  },
  {
    venue: 'Gymnase Bretonneau',
    address: '7 rue Bretonneau, 75020 Paris',
    days: [
      { day: 'Mardi', slots: [['U11-1', '18h - 19h']] },
      { day: 'Mercredi', slots: [['U11 Loisirs', '13h30 - 14h45'], ['U11-1', '14h45 - 16h15'], ['U13-1', '16h15 - 17h30']] },
      { day: 'Samedi', slots: [['U7 et U9', '9h - 10h30'], ['U11 Loisirs', '10h45 - 12h15']] },
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
  ['U7', 'nés en 2020 et 2021'],
  ['U9', 'nés en 2018 et 2019'],
  ['U11', 'nés en 2016 et 2017'],
  ['U13', 'nés en 2014 et 2015'],
  ['U15', 'nés en 2012 et 2013'],
  ['U18', 'nés de 2009 à 2011'],
  ['U21', 'nés de 2006 à 2008'],
  ['Séniors', 'nés en 2005 et avant'],
  ['Vétérans', 'nés en 1990 et avant'],
];
