export type PageCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type NavigationItem = {
  label: string;
  to: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type HeroPart = { text: string; accent?: boolean };

export type PageHeroContent = {
  image: string;
  imageAlt: string;
  eyebrow: HeroPart[];
  /** One array per visible line; parts inside a line can be accented */
  titleLines: HeroPart[][];
  description: string;
  stats?: { value: string; label: string }[];
};
