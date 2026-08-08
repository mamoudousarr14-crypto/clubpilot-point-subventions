# Documentation — Point subventions ClubPilot

Dernière mise à jour : 8 août 2026

## 1. Objet du projet

Ce dépôt contient un formulaire autonome ClubPilot destiné à être diffusé sur les réseaux sociaux auprès des clubs de football amateur normands.

Le formulaire sert à qualifier rapidement la situation d'un club concernant les subventions. Il ne réalise pas l'analyse métier et ne produit pas automatiquement de recommandation. Les réponses sont envoyées vers Google Sheets, puis analysées humainement avant la création d'un document personnalisé.

## 2. Liens utiles

- Formulaire public : <https://mamoudousarr14-crypto.github.io/clubpilot-point-subventions/>
- Dépôt GitHub : <https://github.com/mamoudousarr14-crypto/clubpilot-point-subventions>
- Point de réception Google Apps Script : <https://script.google.com/macros/s/AKfycbxN4Ui51FEH-f_OGzuTE9ZWODRFIx8vbMPqrmqF3wu0uXHK_mYwSPPoIsSH4KDzgYP8yg/exec>
- Site principal : <https://clubpilot.fr/>
- Politique de confidentialité : <https://clubpilot.fr/confidentialite.html>

Le lien du Google Sheet n'est pas inscrit dans le dépôt. Il doit rester accessible uniquement aux personnes autorisées depuis Google Drive.

## 3. Pipeline métier

```text
QUALIFIER                 INTAKE                   ANALYSE HUMAINE
Formulaire public   ->    Google Sheet       ->    Croisement avec la fiche
Le club répond            Une ligne par club       Jugement et priorisation

        -> GABARIT                  -> CLUB
           Google Docs                Document personnalisé
           Point personnalisé         + appel de 20 minutes
```

### Étape 1 — Qualifier

Le club répond à quatre questions et renseigne ses coordonnées. L'objectif est de comprendre sa maturité et ses difficultés en matière de subventions.

### Étape 2 — Intake

Le Google Apps Script reçoit le formulaire et ajoute une ligne dans l'onglet `Réponses` du Google Sheet. Le statut initial attendu est `Nouveau`.

### Étape 3 — Analyse humaine

Une personne ClubPilot examine les réponses et les croise avec la fiche de référence : dispositifs disponibles, territoire, dates limites, justificatifs et pertinence pour le club.

Cette étape est volontairement humaine. Le formulaire ne décide pas automatiquement quelles aides sont adaptées au club.

### Étape 4 — Gabarit

L'analyse est reportée dans un modèle Google Docs comprenant, selon les besoins :

- la situation synthétique du club ;
- les aides à examiner ;
- les prochaines échéances ;
- les pièces ou justificatifs à préparer ;
- les actions prioritaires ;
- les points à expliquer pendant l'appel.

### Étape 5 — Retour au club

Le document personnalisé est envoyé par email. Un appel de 20 minutes peut ensuite être proposé afin d'expliquer le résultat et les prochaines actions.

## 4. Contenu du formulaire

Le parcours contient cinq écrans : quatre questions de qualification puis un bloc de contact.

### Question 1 — réponse unique

**Combien de demandes de subvention votre club a-t-il déposées sur les 12 derniers mois ?**

- 0
- 1
- 2 à 3
- 4 ou plus

### Question 2 — réponses multiples

**En dehors de l'État via Le Compte Asso (ANS, FDVA, PSF), avez-vous sollicité d'autres financeurs cette année ?**

- Mairie
- Département
- Région
- Une fondation
- Aucun autre

`Aucun autre` est exclusif : sa sélection désactive les autres réponses, et la sélection d'un financeur désactive `Aucun autre`.

### Question 3 — réponse unique

**Un financeur local (mairie, département, région, fondation) vous a-t-il déjà demandé un justificatif de l'utilisation de la subvention — un « compte rendu financier » ?**

- Oui, sans difficulté
- Oui, et c'était pénible / stressant
- Oui, rendu en retard au moins une fois
- Non, jamais
- Je ne sais pas de quoi il s'agit

La formulation « justificatif de l'utilisation — un compte rendu financier » est volontaire. Ne pas la remplacer par le sigle `CRF` seul : certains responsables de club connaissent la démarche sans connaître le sigle.

### Question 4 — réponse unique

**Vous est-il déjà arrivé de découvrir une aide trop tard, une fois la date limite passée ?**

- Oui, plusieurs fois
- Oui, une fois
- Non, jamais
- Je ne sais pas

### Coordonnées

- Nom du club : obligatoire
- Email : obligatoire et contrôlé au format email
- Téléphone : facultatif

## 5. Parcours utilisateur

- Une question est affichée à la fois.
- Une barre indique la progression sur cinq étapes.
- Il est impossible de continuer sans répondre à la question active.
- Les messages d'erreur sont affichés près de la question et annoncés aux technologies d'assistance.
- Le bouton `Retour` conserve les réponses déjà saisies.
- Le formulaire fonctionne sur ordinateur et mobile.
- Après l'envoi, un écran confirme la transmission et annonce une analyse humaine à venir.

## 6. Architecture technique

### Frontend

- HTML statique
- CSS personnalisé reprenant les couleurs et la typographie ClubPilot
- JavaScript natif pour la navigation, la validation et l'envoi
- Vite pour la compilation
- Lucide pour les icônes

Fichiers principaux :

- `index.html` : structure du formulaire et URL Apps Script
- `styles.css` : identité visuelle et responsive
- `src/main.js` : navigation, validation et transmission
- `vite.config.js` : chemin de base GitHub Pages
- `docs/` : version compilée effectivement publiée

### Backend d'intake

Le backend est une application web Google Apps Script liée au Google Sheet. Le frontend transmet les réponses par requête `POST` encodée comme un formulaire.

Le point d'entrée est déclaré dans `index.html` :

```html
<meta
  name="clubpilot-form-endpoint"
  content="https://script.google.com/macros/s/AKfycbxN4Ui51FEH-f_OGzuTE9ZWODRFIx8vbMPqrmqF3wu0uXHK_mYwSPPoIsSH4KDzgYP8yg/exec"
/>
```

L'URL doit se terminer par `/exec`. L'URL `/dev` est réservée aux tests effectués par les éditeurs du script.

### Hébergement

GitHub Pages publie le contenu du dossier `docs` depuis la branche `main` :

- branche : `main`
- dossier : `/docs`
- HTTPS : activé
- domaine actuel : `mamoudousarr14-crypto.github.io`

Le formulaire n'est pas relié à la navigation ou aux appels à l'action du site ClubPilot principal.

## 7. Colonnes attendues dans Google Sheets

L'onglet de réception s'appelle `Réponses`.

| Colonne | Usage |
|---|---|
| Reçu le | Horodatage de la réponse |
| Nom du club | Identification du club |
| Email | Adresse pour envoyer le point |
| Téléphone | Coordonnée facultative |
| Demandes sur 12 mois | Réponse à la question 1 |
| Financeurs sollicités | Réponses à la question 2 |
| Compte rendu financier | Réponse à la question 3 |
| Aide découverte trop tard | Réponse à la question 4 |
| Statut | Suivi du traitement, initialisé à `Nouveau` |
| Notes d'analyse | Travail humain et conclusions internes |
| Lien du document | URL du Google Docs personnalisé |
| Envoyé le | Date d'envoi au club |
| Appel | Date, statut ou lien de l'appel de 20 minutes |

### Statuts de suivi recommandés

- Nouveau
- À analyser
- Analyse en cours
- Document prêt
- Envoyé
- Appel programmé
- Terminé

## 8. Données et sécurité

- Le Google Sheet ne doit pas être rendu public.
- Les accès au Sheet et au projet Apps Script doivent être limités aux personnes qui traitent les dossiers.
- L'URL Apps Script est nécessairement visible dans le code envoyé au navigateur. Elle ne donne pas accès en lecture au Sheet.
- Un champ invisible anti-robot est présent dans le formulaire.
- Les valeurs commençant par `=`, `+`, `-` ou `@` doivent être neutralisées côté Apps Script avant insertion afin d'éviter leur interprétation comme formules Sheets.
- Le script utilise un verrou lors de l'écriture afin de limiter les collisions entre plusieurs soumissions simultanées.
- Le formulaire ne collecte que les informations nécessaires au point personnalisé.
- La mention affichée annonce une conservation maximale de trois ans après le dernier contact et fournit l'adresse `bonjour@clubpilot.fr` pour l'exercice des droits.

Le champ anti-robot réduit les soumissions simples automatisées, mais ne constitue pas un CAPTCHA. Si du spam apparaît après une diffusion importante, une protection complémentaire devra être étudiée.

## 9. Limites connues

- Le formulaire utilise une requête navigateur `no-cors` vers Apps Script. Le navigateur peut confirmer que la requête a été envoyée, mais il ne peut pas lire la réponse du script.
- L'écran de confirmation ne garantit donc pas à lui seul que la ligne a bien été écrite. Il faut surveiller le Sheet, particulièrement après une modification du script ou de son déploiement.
- GitHub Pages héberge uniquement le frontend statique. Il ne stocke aucune réponse.
- Le jugement métier et la création du document personnalisé ne sont pas automatisés.
- La version publique est actuellement marquée `noindex` : elle est partageable par lien, mais demande aux moteurs de recherche de ne pas l'indexer.
- Les aperçus sociaux utilisent un titre et une description, mais aucune image Open Graph dédiée n'est encore configurée.

## 10. Test fonctionnel

Effectuer ce test après toute modification importante :

1. Ouvrir <https://mamoudousarr14-crypto.github.io/clubpilot-point-subventions/>.
2. Vérifier qu'une étape vide refuse de continuer.
3. Tester la sélection puis la désélection de `Aucun autre` à la question 2.
4. Tester le bouton `Retour` et vérifier que les réponses sont conservées.
5. Tester une adresse email invalide.
6. Soumettre un dossier nommé clairement `TEST — ClubPilot`.
7. Vérifier qu'une seule ligne apparaît dans l'onglet `Réponses`.
8. Vérifier les accents et les réponses multiples.
9. Supprimer la ligne de test du Sheet.
10. Refaire un test sur téléphone.

## 11. Développement local

Prérequis : Node.js et npm.

```powershell
cd "C:\Users\Mamoud\Documents\claude projet\clubpilot-point-subventions"
npm.cmd ci
npm.cmd run dev
```

Vite affiche ensuite l'adresse locale à ouvrir dans le navigateur.

Pour vérifier la version de production :

```powershell
npm.cmd run build
```

Le résultat est créé dans `dist/`.

## 12. Procédure de modification et publication

GitHub Pages publie `docs/`, pas directement `dist/`. Après une modification :

1. Modifier les fichiers source : `index.html`, `styles.css` ou `src/main.js`.
2. Compiler :

   ```powershell
   npm.cmd run build
   ```

3. Remplacer le contenu de `docs/` par le contenu généré dans `dist/`.
4. Vérifier localement les fichiers compilés.
5. Enregistrer et publier :

   ```powershell
   git add -A
   git commit -m "Décrire la modification"
   git push
   ```

6. Attendre la fin de la publication GitHub Pages.
7. Tester l'adresse publique et une soumission complète si le formulaire ou Apps Script a changé.

Ne jamais modifier uniquement un fichier généré dans `docs/` sans reporter aussi la modification dans les fichiers source : la prochaine compilation écraserait ce changement.

## 13. Mise à jour de Google Apps Script

Après une modification du code Apps Script :

1. Ouvrir le projet depuis le Google Sheet avec **Extensions → Apps Script**.
2. Enregistrer le script.
3. Ouvrir **Déployer → Gérer les déploiements**.
4. Modifier le déploiement existant.
5. Sélectionner une nouvelle version.
6. Déployer.
7. Conserver l'URL `/exec` si Google ne la change pas ; sinon, mettre à jour la balise `clubpilot-form-endpoint` dans `index.html`.
8. Recompiler, recopier `dist/` dans `docs/`, pousser sur GitHub et effectuer une soumission test.

## 14. Diagnostic rapide

### Le formulaire s'affiche mais aucun bouton ne fonctionne

- Vérifier dans les outils du navigateur que le fichier JavaScript est chargé.
- Vérifier que le chemin `/clubpilot-point-subventions/assets/...` répond sans erreur 404.
- Recompiler et republier le dossier `docs`.

### Le formulaire affiche une erreur de configuration

- Vérifier la balise `clubpilot-form-endpoint` dans `index.html`.
- Vérifier que son attribut `content` contient bien l'URL Apps Script `/exec`.

### Le formulaire confirme l'envoi mais aucune ligne n'apparaît

- Vérifier le bon onglet et le bon Google Sheet.
- Vérifier les exécutions dans Apps Script.
- Vérifier que le déploiement est toujours accessible à `Tout le monde`.
- Vérifier que le script est exécuté avec le compte propriétaire.
- Redéployer une nouvelle version du script, puis refaire une soumission test.

### Une modification n'apparaît pas en ligne

- Vérifier que `npm.cmd run build` a été exécuté.
- Vérifier que le contenu de `dist/` a été recopié dans `docs/`.
- Vérifier que le commit a été poussé sur `origin/main`.
- Contrôler **Settings → Pages** dans GitHub.
- Recharger la page sans cache.

## 15. Évolutions possibles, non réalisées

Ces éléments ne font pas partie de la version actuelle :

- domaine personnalisé plus court ;
- image dédiée aux aperçus LinkedIn, Facebook et X ;
- protection anti-spam avancée ;
- notification interne à chaque nouveau dossier ;
- génération assistée du Google Docs ;
- lien de réservation intégré à l'écran final ;
- tableau de bord de suivi.

Toute automatisation future doit conserver la validation humaine avant l'envoi d'une recommandation au club.
