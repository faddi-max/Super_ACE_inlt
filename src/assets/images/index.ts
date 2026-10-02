const imageModules = import.meta.glob<string>(
  ["./**/*.{avif,gif,jpg,jpeg,png,svg,webp}", "../brand/**/*.{avif,gif,jpg,jpeg,png,svg,webp}"],
  {
    eager: true,
    import: "default",
  },
);

export const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, source]) => [
    path.split("/").at(-1)?.replace(/\.[^.]+$/, ""),
    source,
  ]),
) as Record<string, string>;