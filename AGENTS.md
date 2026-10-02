# SUPER ACE Website Project Rules

## GitHub

- Keep this `AGENTS.md` file local; do not push it to GitHub.

## Stack

- Vite, React 18, and TypeScript.
- Tailwind CSS v4 through `@tailwindcss/vite`; define design tokens in `src/styles/index.css` with `@theme`.
- React Router for page routes.
- Self-hosted Barlow Condensed and Montserrat via `@fontsource`.
- Use `cn()` from `src/lib/cn.ts` to combine Tailwind classes.
- ESLint and Prettier are the project quality tools.

## Structure

- `src/app/` owns app composition, router, and entry providers.
- `src/components/ui/` contains reusable primitives; `layout/` contains shared chrome; `sections/` contains reusable page sections.
- `src/pages/` contains route-level components. Keep page copy in typed objects under `src/content/`, not embedded in JSX.
- `src/config/` owns site metadata and navigation. `src/assets/brand/` contains logo assets and `src/assets/images/` contains imagery.
- Use the `@/` alias for imports from `src/`.

## Brand Rules

- Never stretch, squash, recolor, or add drop-shadows to the logo.
- Electric Blue and Pure White are fixed accents; do not introduce other brand colors.
- Use at most one neon/reserved accent color per layout.
- Use no fonts beyond Barlow Condensed and Montserrat. The logo wordmark font belongs only inside logo assets, never in UI text.
- Prefer a dark navy background for technical and marketing sections.
- Keep brand colors and typography token-driven through the `@theme` definitions; do not add hardcoded color values elsewhere.
