# Greater-Boston-Anti-Displacement-Toolkit
Organizing toolkit for Anti-Displacement struggles in the greater Boston area. Produced by Research Action Design, with MIT CoLab, GreenRoots and Everett Community Health Partnership.

Thanks to [Maria Lamardo](https://github.com/mlama007) for initial code architecture and front end development, [Queer Black Editing](https://www.queerblackediting.com/) for copy editing, and Xenia Barahona for translation. Illustrations by Agustín Cepeda and Natalia Coachman.

This site is covered under the GNU General Public License (see LICENSE document in repo for more information).

## Deployment

This site is currently deployed via Netlify from the master branch. The live site lives at https://www.greaterbostontoolkit.org

[![Netlify Status](https://api.netlify.com/api/v1/badges/518285fa-ae52-4f5e-95c9-0f69138ed443/deploy-status)](https://app.netlify.com/sites/greater-boston-anti-displacement-toolkit/deploys)

## Translations & Toolkit Contents

Translations of shorter string snippets are stored in the `/src/locales/en.json` and `/src/locales/es.json` files. Each toolkit also has an corresponding object in the translations file with its title, header question, header image, links to google doc & pdfs, etc.

Full toolkit content in long-form is written out in the `/src/components/Toolkit_en` and `/src/components/Toolkit_es` folders. To make updates to toolkit contents, check these folders first. At build time, the `/src/views/Toolkit/*.vue` files dynamically load the corresponding English or Spanish toolkit component and populate metadata from the translation files in the `toolkit` object.

## Project setup
```
npm install
```

Then copy `.env.example` to `.env`.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
