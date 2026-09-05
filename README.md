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
- Le formulaire de contact envoie un vrai email à l'adresse du club via Resend,
  depuis la route `app/api/contact/route.js`. Voir la section ci-dessous.
- Les polices sont auto-hébergées : aucune requête vers Google Fonts.

## Formulaire de contact

Les messages partent vers l'adresse du club par Resend. Trois variables
d'environnement, à définir en local dans un fichier `.env.local` (voir
`.env.local.example`) et dans les variables d'environnement du projet Vercel :

- `RESEND_API_KEY` : clé créée sur https://resend.com/api-keys
- `CONTACT_TO` : destinataire des messages, par défaut l'adresse du club
- `CONTACT_FROM` : expéditeur, `Site du club <onboarding@resend.dev>` tant que le
  domaine du club n'est pas vérifié dans Resend

Tant que l'expéditeur de test `onboarding@resend.dev` est utilisé, Resend
n'accepte l'envoi que vers l'adresse email du compte Resend. Une fois le domaine
`menilmontantbb.com` vérifié dans Resend, passer `CONTACT_FROM` sur une adresse
de ce domaine permet d'écrire à n'importe quel destinataire.

La route valide les champs côté serveur, met l'adresse du visiteur en
`Reply-To`, et comporte un champ piège invisible contre les robots. Sans clé
configurée, le formulaire affiche une erreur claire au visiteur et propose
l'adresse email du club.

## Déploiement

Le projet est déployé sur Vercel, connecté à ce dépôt GitHub. Chaque push sur
`main` redéploie la production, chaque branche génère une préversion.

## Crédits

Photos et visuels : Ménilmontant Basketball. Logos et écussons propriété du
club.
