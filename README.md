# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # SUPER ACE International Website

  Vite + React 18 + TypeScript scaffold for the SUPER ACE International corporate website.

  ## Setup

  ```sh
  npm install
````

## Run locally

```sh
npm run dev
```

## Verify and build

```sh
npm run lint
npm run build
```

Use `npm run preview` to serve the production build locally. Route placeholders are available at `/`, `/about`, `/capabilities`, `/products`, `/sustainability`, and `/contact`.
