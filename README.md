# VinZ Apps
Portail des applications personnelles de VinZ, hors enseignement.
URL : https://vinztoc.github.io/VinzApps/

- **Page d'accueil** (`index.html`) : tuiles des applications lues dans `apps.json`, recherche, lien retour vers Mes Apps EPS, installable (PWA) et utilisable hors connexion (`sw.js`).
- **Mes Apps EPS** lit le même `apps.json` pour sa zone « VinZ Apps » ; son bouton « ↗ Ouvrir VinZ Apps » mène à cette page.
- Aucune donnée d'élève : ces applications n'utilisent pas la liste de Mes Apps EPS (donc pas de `eps-core.js`).

Chaque application a son propre dépôt GitHub Pages.

Déploiement : Settings → Pages → Branch `main` / root.

## Applications
- **Budget familial** : https://vinztoc.github.io/Budget-_familial_moderne/ (dépôt `Budget-_familial_moderne`)
  Import du relevé CSV de la banque, charges fixes à pointer, disponible en temps réel, budget prévisionnel par catégorie, sauvegarde et import xlsx. Les données restent dans le navigateur de l'appareil : rien n'est envoyé ni publié.

## Ajouter une application
Ajouter une fiche dans `apps.json` : `id, nom, desc, url, icon, emoji, couleur` (et `categorie`, facultatif, pour regrouper les tuiles sur la page d'accueil). `url` et `icon` peuvent être des adresses complètes (`https://…`) ; une `icon` relative se lit dans ce dépôt (dossier `icons/`). Penser à la virgule entre deux fiches : un `apps.json` mal formé vide la page d'accueil et la zone VinZ Apps de Mes Apps EPS.

## Fichiers
| Fichier | Rôle |
|---|---|
| `index.html` | page d'accueil du portail |
| `apps.json` | catalogue (partagé avec Mes Apps EPS) |
| `version.js` | numéro de version (seul endroit à modifier) |
| `config.js` | adresse de Mes Apps EPS |
| `sw.js`, `manifest.webmanifest` | installation et hors ligne (caches préfixés `vinz-apps-`, distincts de ceux de Mes Apps EPS) |
| `icons/` | icônes du portail |
