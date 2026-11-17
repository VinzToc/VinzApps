# VinZ Apps
Applications personnelles de VinZ, hors enseignement. Le catalogue (`apps.json`) alimente la zone « VinZ Apps » du portail Mes Apps EPS.
URL : https://vinztoc.github.io/VinzApps/

Chaque application a son propre dépôt GitHub Pages ; ce dépôt ne contient que le catalogue.

## Applications
- **Budget familial** : https://vinztoc.github.io/Budget-_familial_moderne/ (dépôt `Budget-_familial_moderne`)
  Import du relevé CSV de la banque, charges fixes à pointer, disponible en temps réel, budget prévisionnel par catégorie, sauvegarde et import xlsx. Les données restent dans le navigateur de l'appareil : rien n'est envoyé ni publié.

## Ajouter une application
Ajouter une fiche dans `apps.json` : `id, nom, desc, url, icon, emoji, couleur`. `url` et `icon` peuvent être des adresses complètes (`https://…`) ; une `icon` relative se lit dans ce dépôt (dossier `icons/`).
