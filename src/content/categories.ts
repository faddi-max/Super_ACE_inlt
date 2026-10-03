import { images } from "@/assets/images";

export interface CategoryItem {
  title: string;
  to: string;
  image: string;
  description?: string;
}

export const categoriesContent = {
  eyebrow: "Categories",
  title: "Explore Our Premium Categories",
  cta: "Explore Category",
  items: [
    {
      title: "Teamwear",
      to: "/categories/teamwear",
      image: images.teamwear,
      description:
        "Custom team kits, jerseys and performance garments for global sports brands.",
    },
    {
      title: "Fitness & Training",
      to: "/categories/fitness",
      image: images.fitness,
    },
    {
      title: "Sports Apparel",
      to: "/categories/sportswear",
      image: images["sports-apparel"],
    },
    {
      title: "Combat Sports",
      to: "/categories/combat",
      image: images.combat,
    },
    {
      title: "Teamwear",
      to: "/categories/teamwear",
      image: images.teamwear,
      description:
        "Custom team kits, jerseys and performance garments for global sports brands.",
    },
    {
      title: "Fitness & Training",
      to: "/categories/fitness",
      image: images.fitness,
    },
    // { title: "Uniforms", to: "/categories/uniforms", image: uniforms },
  ] satisfies CategoryItem[],
};
