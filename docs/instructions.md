# WebApp : Calculatrice
Vous allez développer une calculatrice web qui respecte un historique de commits propre et structuré selon le standard Conventional Commits et intègre une CI/CD pour déployer uniquement les versions taguées en production.
Vous pouvez utiliser GitHub Actions ou GitLab CI pour la pipeline, et Vercel pour le déploiement.
À l’issue du projet, vous devrez partager le lien du dépôt en suivant les modalités de rendu.

## Fonctionnalités attendues

### Calculatrice Web

Deux champs de saisie pour les nombres (inputs).
Un menu déroulant pour sélectionner l’opération (addition, soustraction, multiplication, division).
Un champ de résultat affichant la réponse après l'opération.


### Pipeline CI/CD

Configurez une pipeline CI/CD pour tester et déployer le projet sur Vercel, mais uniquement sur les tags.
Pour la CI il faudra ajouter les jobs suivants:
- `install`
- `test`
- `lint`
- `build`
- `deploy`

Configuration de Vercel : Utilisez un token d'accès Vercel (faites une petite recherche google).
Ce token ne doit pas être visible dans le code source.

⚠️ Sur cette partie, il y'a des choses que nous n'avons pas vu en cours, c'est normal, vous devez faire des recherches et non m'appeler pour me dire que vous ne comprenez pas l'énoncé.


### Historique Git

Conventional Commits : Respectez les conventions de commit pour toute modification.
Il faudra que votre historique git soit clair.
Utilisez le workflow des Pull Requests / Merge Request (en gros ne poussez rien sur main comme des sauvages).



### Modalités de rendu

Repo Git : Hébergez le projet sur GitHub ou GitLab (choisissez votre camp)
Droits d’accès : Ajoutez le compte [@punkte (pour Github)](https://github.com/Punkte) ou [@teepan (pour Gitlab)](https://gitlab.com/teepan) comme collaborateur sur le repo pour la correction.


### Bonus

#### Gestion de projet

Créez des issues, documentez les et assignez les. Les commits devront mentionner le numéro des issues.
Vous pouvez utiliser un board kanban.
Github et Gitlab integrègrent la possibilité de les lier directement à vos issues.
Si vous utilisez Github par exemple, il faudrait utiliser Github Project.

Vous pouvez mettre en place des automatisations, par exemple si une branche qui mentionne une issue est mergée, elle est automatiquement passée en `done` dans votre tableau kanban.

⚠️ Je ne répondrai pas aux questions sur cette partie.

#### Features
Vous pouvez ajouter de nouvelles fonctionalités à votre page web si vous le souhaitez.
Ca peut être n'importe quoi, c'est pas grave si votre application n'a pas de sens tant que votre historique est propre et que vous utilisez un bon workflow.


### Évaluation

La notation tiendra compte :

- la structure des commits,
- le bon fonctionnement de la CI/CD,
- la conformité des fonctionnalités de la calculatrice,
- l'organisation et de la documentation du projet.


Veuillez inclure un fichier `README.md` à la racine de votre projet pour faciliter l'évaluation.
Ce fichier doit contenir :

- Nom et prénom des membres du groupe sous forme de tableau


|NOM|Prénom|
|---|------|
|DOE|John  |
|DOE|Jane  |

- Nom et prénom des membres du groupe sous forme de tableau
- Un lien vers le GitHub Project ou son équivalent sur GitLab si vous en avez créé un, pour que je puisse voir votre organisation et le suivi des tâches
- Une brève explication de l’architecture et des choix techniques, y compris les étapes d'installation pour exécuter et tester le projet
- Les instructions pour accéder à la version déployée sur Vercel
- Toute information nécessaire pour comprendre la configuration de la pipeline CI/CD, notamment le processus de déploiement pour les versions taguées

Un README clair et détaillé permettra de me faciliter le travail pour que je puisse vous noter et vérifier votre travail et votre organisation.


Pensez à mettre votre repo en privé.


Bon chance 🗿