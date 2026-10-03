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
      description:
        "Training apparel engineered for movement, comfort and durability.",
    },
    {
      title: "Sports Apparel",
      to: "/categories/sportswear",
      image: images["sports-apparel"],
      description:
        "Versatile sportswear built for fit, style and everyday performance.",
    },
    {
      title: "Combat Sports",
      to: "/categories/combat",
      image: images.combat,
      description:
        "Performance apparel and gear built for combat sports athletes.",
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
      description:
        "Training apparel engineered for movement, comfort and durability.",
    },
    // { title: "Uniforms", to: "/categories/uniforms", image: uniforms },
  ] satisfies CategoryItem[],
};
