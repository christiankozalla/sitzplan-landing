<h1><img src="./src/static/logo.svg" style="width: 2rem; height: 2rem; margin-right: 1rem" alt="Seaty Logo">Landing Page for Seaty Web App</h1>

## Contents

- [Project overview](#project-overview)
- [Getting started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Working locally](#working-locally)
  - [Creating a production build](#creating-a-production-build)
- [Credits](#credits)

---

## Project Overview

This is the landing page for the web app Seaty. Seaty's source code is located [here on GitHub](https://github.com/christiankozalla/sitzplan).

As the app is currently written in german, so is this landing page.

- The project uses [Eleventy](https://11ty.dev) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/)
- PostCSS set up to handle:
  - TailwindCSS
  - CSS Imports
  - Autoprefixer
- HTML minified in production
- CSS inlined and minified in production
- [esbuild](https://esbuild.github.io/) used to bundle and minify scripts
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

---

## Getting Started

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify HTML, minify JS, inline and minify CSS.

```
npm run build
```

---

#### Credits

- [Eleventy](https://11ty.dev)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss)
  - Autoprefixer
  - PostCSS Import
- [esbuild](https://esbuild.github.io/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)
