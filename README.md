# Weather App

Une application simple de météo construite avec NestJS. Elle offre des informations météorologiques statiques et dynamiques sans utiliser de base de données.

## Fonctionnalités

- **Météo Statique**: Fournit des informations météorologiques prédéfinies pour une ville spécifique.
- **Météo Dynamique**: Simule des informations météorologiques qui peuvent varier à chaque requête.

## Technologies Utilisées

- [NestJS](https://nestjs.com/): Un framework pour construire des applications server-side efficaces, fiables et évolutives.
- [Node.js](https://nodejs.org/): Un environnement d'exécution JavaScript côté serveur.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé Node.js sur votre machine. Node.js 12.x ou une version ultérieure est requis.

## Installation

Pour installer et exécuter l'application localement, suivez ces étapes :

1. Clonez ce dépôt sur votre machine locale :

    ```bash
    git clone https://votreDepot.git
    cd weather-app
    ```

2. Installez les dépendances du projet :

    ```bash
    npm install
    ```

3. Lancez l'application :

    ```bash
    npm run start
    ```

L'application devrait maintenant être en cours d'exécution sur `http://localhost:3000`.

## Utilisation

L'application expose deux endpoints principaux :

- **Météo Statique**: Accédez à `/weather/static` pour recevoir des informations météorologiques statiques.
- **Météo Dynamique**: Accédez à `/weather/dynamic` pour recevoir des informations météorologiques dynamiques.

## Développement

Ce projet suit les meilleures pratiques recommandées par NestJS, en structurant l'application autour de modules, de services et de contrôleurs pour une séparation claire des préoccupations.

### Structure du Projet

- `src/`: Dossier contenant les sources de l'application.
  - `weather/`: Module contrôleur principal de l'application.
  - `static-weather/`: Module fournissant des informations météorologiques statiques.
  - `dynamic-weather/`: Module simulant des informations météorologiques dynamiques.
- `test/`: Dossier contenant les tests de l'application.

## Contribution

Les contributions sont les bienvenues ! Veuillez ouvrir une issue pour discuter de ce que vous souhaitez changer ou soumettre une pull request directement.


