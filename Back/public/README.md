# Exercice - Cup of Tea

Le but de cet exercice est de créer un app' complète en se basant sur des maquettes.&
Nous choisissons de réaliser une application `React` dont le `back-end` est géré par un serveur `NodeJS`.

Vous devrez créer la base de données adéquate. Pour cela, commencez par réaliser un `MCD` puis créez votre base de données et insérez-y les données du site.

Puis installer votre espace de travail, `React + NodeJS`

## FRONT

Devra contenir les fonctionnalités suivantes :
```
font family Amaranth
mobile-first
3 breakpoints mobile - tablette - desktop
respect des maquettes fournis
```

La page d'accueil devra afficher:
- la nouveauté (dernier thé inséré)
- le best-seller (celui qui a été le plus commandé)
- le coup de coeur (champ géré en bdd)
- et une bannière slider (pas de plugin vous le codez vous même)

La page "Thés" présente tous les thés rangés par catégorie. Lorsque l'on va sur la fiche d'un thé, alors il est possible d'en choisir un conditionnement et de l'ajouter au panier.

Un utilisateur doit pouvoir créer un compte, se connecter et visualiser ses commandes antérieures.

La gestion du panier se fait grâce à un reducer (au choix `useReducer + useContext` ou `Redux`) et à l'`API WebStorage(localstorage)`.

## BACK

Le back doit être en `API REST` (quelques règles à respecter pour ça) :
- utilisation des méthode `HTTP` adéquates (get, post, put, patch, delete ..)
- le code statut `HTTP`
- retourner des données en format `JSON` (pris en charge par `express` avec <code>res.json</code>)
- indiquer le type `MIME`, pour du `JSON` par exemple -> `Content-Type: application/json` (pris en charge par express avec res.json)

- pour les requêtes SQL, utiliser la méthode query et NON la méthode execute (ça fera une petite différence .. 😊 )

## GLOBAL

Réaliser le `back-office`, celui ci permettra le `CRUD` des thés et la visualisation des commandes. Seul un utilisateur authentifié en tant qu'administrateur aura accès à ces fonctionnalités.

Gestion des thés :
- tous affichés sur une page spécifique possibilité de filtrer
- les produits ont une quantité en stock (non affiché à l'utilisateur sauf en cas de rupture de stock)
- clic sur un, permets d'afficher plus d'information sur ce produit et de le mettre dans le panier (choix de la quantité également) dans une table spécifique et le videra coté client

Bien décrypté les maquettes, on peut y trouver des détails sur la structure de notre app' (front, back, BDD) 

### HAVE FUN 🤓