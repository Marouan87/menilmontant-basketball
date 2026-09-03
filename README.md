# Ménilmontant Basketball — site du club

Site officiel du Ménilmontant Basketball (Ménilmontant Paris Sports), club de
basket du 20e arrondissement de Paris, affilié FFBB.

Construit en Next.js 15 (App Router, JavaScript) sans dépendance de style
externe. Le design vient de la maquette Claude Design du club.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:3000.

## Scripts

| Commande        | Effet                                    |
| --------------- | ---------------------------------------- |
| `npm run dev`   | serveur de développement                 |
| `npm run build` | build de production                      |
| `npm start`     | sert le build de production              |

## Structure

```
app/                pages (App Router)
  page.js           accueil
  le-club/          histoire, dates, figures, valeurs, dirigeants
  equipes/          catégories + planning des entraînements (#planning)
  boutique/         drops et archives des collections
  rejoindre/        démarche d'adhésion, documents
  contact/          coordonnées et formulaire
  reglement/        règlement intérieur
  globals.css       feuille de style unique du site
  fonts/            Oswald et Source Sans 3 auto-hébergées
components/         header, footer, bandeau de page, formulaire, galerie
content/            tout le contenu éditorial, en JavaScript
public/images/      visuels optimisés issus de la maquette
```

## Mettre à jour le contenu

Tout le texte du site est regroupé dans `content/`, un fichier par domaine :

- `site.js` : coordonnées du club, menu, liens FFBB et Instagram
- `club.js` : histoire, grandes dates, figures, valeurs, équipe dirigeante
- `teams.js` : équipes, planning des entraînements, catégories d'âge
- `shop.js` : dernier drop, archives, informations de commande
- `join.js` : étapes d'adhésion, bon à savoir
- `reglement.js` : règlement intérieur

Modifier ces fichiers suffit dans la grande majorité des cas, sans toucher aux
pages.

## Choix de conception

- Calendriers, résultats et classements ne sont pas dupliqués : chaque équipe
  en championnat renvoie vers sa fiche FFBB, tenue à jour par la fédération.
- Pas de section actualités à rédiger chaque semaine : la page d'accueil affiche
  une grille de publications Instagram qui renvoie vers `@menilmontantbb`.
- Le formulaire de contact ouvre la messagerie du visiteur avec un message
  prérempli, donc aucun serveur ni service tiers à maintenir. Pour un envoi
  direct, brancher plus tard une route API et un service d'envoi d'email.
- Les polices sont auto-hébergées : aucune requête vers Google Fonts.

## Déploiement

Le projet est déployé sur Vercel, connecté à ce dépôt GitHub. Chaque push sur
`main` redéploie la production, chaque branche génère une préversion.

## Crédits

Photos et visuels : Ménilmontant Basketball. Logos et écussons propriété du
club.
