# Calculatrice Web - Projet Git & CI/CD

Application web de calculatrice développée avec React et TypeScript, intégrant une pipeline CI/CD complète avec déploiement automatisé sur Vercel.

## 👥 Membres du "Groupe"

| NOM | Prénom |
|-----|--------|
| Moccand-Jacquet | Michel |

## 🏗️ Architecture & Choix Techniques

### Stack Technique

- **Framework Frontend** : React 19.1.1
- **Langage** : TypeScript 5.9.3
- **Build Tool** : Vite 7.1.14 (Rolldown)
- **Gestionnaire de paquets** : pnpm 9

### Outils de Développement

- **Linting & Formatting** : BiomeJS 1.9.4
  - Remplace ESLint et Prettier pour une configuration unifiée
  - Analyse statique du code et formatage automatique

- **Tests** : Vitest 4.0.6
  - Framework de tests moderne et rapide
  - Testing Library pour les tests de composants React
  - Configuration jsdom pour l'environnement de test DOM

### Structure du Projet

```
005-git/
├── .github/
│   └── workflows/          # Workflows GitHub Actions (CI/CD)
│       ├── lint.yml        # Vérification du code
│       ├── test.yml        # Exécution des tests
│       └── deploy.yml      # Déploiement sur Vercel
├── docs/                   # Documentation du projet
├── src/                    # Code source
├── tests/                  # Tests unitaires
├── public/                 # Assets statiques
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 20 ou supérieur
- pnpm 9 (recommandé) ou npm

### Installation

```bash
# Cloner le repository
git clone git@github.com:impulse-studio/cyto-webapp.git
cd 005-git

# Installer les dépendances avec pnpm
pnpm install
```

### Scripts Disponibles

```bash
# Lancer le serveur de développement (http://localhost:5173)
pnpm dev

# Exécuter les tests
pnpm test

# Exécuter les tests en mode watch
pnpm test:watch

# Linter le code
pnpm lint

# Formater le code
pnpm format

# Builder l'application pour la production
pnpm build

# Prévisualiser le build de production
pnpm preview
```

## 🧪 Tests

Le projet utilise Vitest avec React Testing Library. Les tests couvrent :
- Les fonctions utilitaires de calcul
- Les composants React et leurs interactions
- Les cas limites (division par zéro, validations, etc.)

Pour exécuter les tests :
```bash
pnpm test
```

## 🌐 Déploiement

### Version de Production

**URL de l'application déployée** : [m1-git.vercel.app](https://m1-git.vercel.app)

L'application est automatiquement déployée sur Vercel lorsqu'un tag est créé sur le repository.

### Processus de Déploiement

1. Créer un tag avec la version souhaitée :
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. Le workflow GitHub Actions se déclenche automatiquement
3. L'application est déployée en production sur Vercel

## ⚙️ Pipeline CI/CD

### Workflows GitHub Actions

Le projet intègre trois workflows principaux :

#### 1. **Lint** (`.github/workflows/lint.yml`)
- **Déclenchement** : Sur les pull requests vers `main`, `master` ou `feature/**`
- **Jobs** :
  - Installation des dépendances avec pnpm
  - Vérification du code avec BiomeJS (`pnpm run lint`)
- **Objectif** : Garantir la qualité et la cohérence du code

#### 2. **Test** (`.github/workflows/test.yml`)
- **Déclenchement** : Sur les pull requests vers `main`, `master` ou `feature/**`
- **Jobs** :
  - Installation des dépendances avec pnpm
  - Exécution des tests unitaires (`pnpm run test`)
- **Objectif** : S'assurer que toutes les fonctionnalités sont testées et fonctionnelles

#### 3. **Deploy** (`.github/workflows/deploy.yml`)
- **Déclenchement** : Uniquement sur les tags (ex: `v1.0.0`)
- **Jobs** :
  - Installation des dépendances
  - Installation de Vercel CLI
  - Récupération de la configuration Vercel
  - Build du projet avec Vercel
  - Déploiement en production
- **Objectif** : Déployer automatiquement les versions taguées sur Vercel

### Configuration des Secrets

Les secrets suivants doivent être configurés dans les paramètres du repository GitHub :

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | Token d'accès Vercel (obtenu depuis vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | ID de l'organisation Vercel (trouvé dans `.vercel/project.json`) |
| `VERCEL_PROJECT_ID` | ID du projet Vercel (trouvé dans `.vercel/project.json`) |

#### Configuration des Secrets

1. Aller dans `Settings > Secrets and variables > Actions`
2. Cliquer sur `New repository secret`
3. Ajouter chaque secret avec sa valeur correspondante

### Workflow Git

Le projet suit les bonnes pratiques Git :
- **Conventional Commits** : Tous les commits respectent la convention (feat, fix, chore, docs, etc.)
- **Pull Requests** : Aucun push direct sur `main`, toutes les modifications passent par des PR
- **Branches** : Utilisation de branches feature pour le développement
- **Issues** : Toutes les tâches sont documentées dans les issues GitHub
- **Historique propre** : Commits atomiques et messages descriptifs

## 📝 Fonctionnalités

### Calculatrice
- ✅ Deux champs de saisie pour les nombres
- ✅ Sélection de l'opération (addition, soustraction, multiplication, division)
- ✅ Affichage du résultat
- ✅ Gestion des erreurs (division par zéro, entrées invalides)
- ✅ Tests unitaires complets

## 📄 Licence

Ce projet est développé dans un cadre éducatif.

---

**Note** : Ce projet fait partie d'un exercice académique sur Git, CI/CD et les bonnes pratiques de développement.
