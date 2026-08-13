# Point subventions ClubPilot

Formulaire autonome destiné aux clubs de football amateur normands et diffusé sur les réseaux sociaux.

Les réponses sont transmises à Google Sheets par une application web Google Apps Script. L'analyse des réponses et la rédaction du point personnalisé restent humaines.

La documentation complète d'exploitation est disponible dans [DOCUMENTATION.md](./DOCUMENTATION.md).

## Développement local

```bash
npm install
npm run dev
```

## Publication

Le contenu compilé du dossier `docs` est publié avec GitHub Pages depuis la branche `main` sur <https://point.clubpilot.fr/>.

```bash
npm run build
```
