# VinZ Apps
Applications personnelles de VinZ, hors enseignement. Le catalogue (`apps.json`) alimente la zone « VinZ Apps » du portail Mes Apps EPS.
URL : https://vinztoc.github.io/VinzApps/

## Applications
- **Budget familial** : https://vinztoc.github.io/VinzApps/budget/
  Import du relevé CSV de la banque, charges fixes à pointer, disponible en temps réel, budget prévisionnel par catégorie, sauvegarde et import xlsx. Les données restent dans le navigateur de l'appareil (stockage local) : rien n'est envoyé ni publié. Application installable (PWA), utilisable hors connexion.

## Ajouter une application
1. Déposer l'application dans un sous-dossier (par exemple `budget/`) ou héberger son propre dépôt sur le même compte GitHub Pages.
2. Ajouter son icône dans `icons/` et une fiche dans `apps.json` : `id, nom, desc, url, icon, emoji, couleur`.
