# 🎯 Objectifs

### HTML

- [ ] Savoir intégrer et respecter la maquette fournie
  - [ ] Savoir utiliser les balises sémantiques
  - [ ] Présence de la `<nav>` bar
  - [ ] Présence de `<section>`
  - [ ] Présence d’un `<footer>`
- [ ] Savoir mettre en place plusieurs pages
- [ ] Savoir mettre en place la navigation entre les pages

### CSS

- [ ] Savoir placer les éléments HTML
- [ ] Savoir personnaliser la police de caractère

**BONUS CSS**

- [ ] Le site doit être responsive

### JavaScript

- [ ] Manipulation du DOM
  - [ ] Savoir déclencher une action au clic d’un élément HTML
  - [ ] Savoir créer des éléments HTML
- [ ] Savoir créer des fonctions
- [ ] Savoir manipuler de la données brutes
  - [ ] Conditions
  - [ ] Boucles
- [ ] Savoir exploiter les paramètres de recherche : `search params`
- [ ] Savoir utiliser le `localStorage`

### Base de données

- [ ] Savoir concevoir un premier schéma de base de données simple avec :
  - [ ] des tables
  - [ ] des colonnes, leur type
  - [ ] les primary keys
  - [ ] les foreign keys
  - [ ] leur relation avec les autres tables
- [ ] Savoir écrire les requêtes de création de la base de données (tables et clés)
- [ ] Savoir écrire les requêtes d’enrichissement de la base de données (`INSERT`)

_N’hésitez pas à préciser en commentaire le type de base de données choisies_

> Exemple, si je fais du `sqlite`, je dois retrouver en ligne 1 du fichier :
>
> ```sql
> #sqlite
> CREATE TABLE users (...);
> INSERT INTO users(...);
> ```

### Git, clean code et organisation

- [ ] Avoir fait des stand-up tous les matins à partir du jour 2 du projet
  - [ ] Les stand-ups se feront par groupe de 4 maximum et par thématique
        Il y aura donc 4 groupes de 4 👀
        2 groupes par thématique
- [ ] Avoir une réflexion d’accessibilité
  - [ ] Mettre en place la sémantique
  - [ ] Penser aux `alt`
- [ ] Savoir produire un code lisible en respectant les règles du _clean code_
  - [ ] Respecter les conventions de nommage
- [ ] Savoir maintenir un projet avec `git`
  - [ ] Savoir faire des `commit` et des `push` aux bons moments
  - [ ] Avoir des messages de `commit` qui ont du sens et respecte la convention (voir Annexes)
- [ ] Avoir une organisation écrite qui inclue
  - [ ] les temps de pause
  - [ ] détaille les missions par jour

### Ce qui n’est PAS demandé

- [ ] D’utiliser une API
- [ ] De créer un back-end
- [ ] De générer les images avec une IA générative (pour réduire notre impact environnemental 🙏)

## Instructions

Vous devez reproduire le site **Adaence** 🫂

Contexte : **Adaence** est une plateforme pour lutter contre l’isolement des aînés, en facilitant les rencontres bienveillantes entre générations.

✅ Ce que vous devez développer :

- [ ] Une navbar
- [ ] La page d’**Accueil**
  - [ ] Le bouton “Rechercher” amène vers la page “**Je rends visite**” avec les critères sélectionnés
  - [ ] Le bouton “Voir tous les profils” amène vers la page “Je rends visite”
        Aucun filtre n’est donc appliqué
- [ ] La page “**Je rends visite**”
  - [ ] Liste tous les aînés qui souhaitent partager du temps
  - [ ] Il est possible de filtrer par “Moment à partager” et “Localisation”
  - [ ] Le clic sur le bouton **Programmer un moment** devra (aujourd’hui) simplement faire un `console.log()` du Prénom de l’aîné.e et son Type de moment favori
  - [ ] BONUS : Gérer une pagination
- [ ] La page “**Devenir bénévole**” (formulaire qui envoie un email)
  - [ ] BONUS : La partie témoignages
- [ ] Le lien “**Nous contacter**” dans le footer est un `mailto:`
- [ ] Une gestion d’erreur sur les formulaires lorsqu’ils ne sont pas correctement remplis

❌ Vous n’avez **pas** à developper les pages :

- De création de compte
- De connexion
- “Faire un don”
- “Guide de partage”
- “FAQ”
- “Liste des activités”
- “Mentions légales”

ℹ️ La galerie de photo est fixe et ne varie pas

Si vous n’avez pas d’instructions sur certaines pages ou liens, c’est que nous partons sur le principe que le développement n’est pas obligatoire. Vous êtes libres de vous les approprier.

💡 Nous vous recommandons fortement de **réfléchir à la conception de votre site avant** de vous lancer pour pouvoir réutiliser des parties de votre code pour créer les différentes pages !

Ne partez pas tout de suite à vouloir personnaliser la police et les couleurs. Le premier objectif dans ce genre de projet est de surtout réussir à placer nos éléments correctement et surtout avoir un code lisible et réutilisable !

## 🖼️ Ressources

Vous êtes libres de personnaliser le site tant que la structure globale est respectée

- Police de caractère :
  - https://fonts.google.com/specimen/Roboto
  - https://fonts.google.com/specimen/Amatic+SC?query=Amatic+SC
- Pour des images libres de droits : https://unsplash.com/fr
- Pour les icônes : https://lucide.dev/icons/
- Pour le favicon : https://favicon.io/emoji-favicons/
