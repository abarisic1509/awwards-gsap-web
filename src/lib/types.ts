export type Flavor = {
  name: string;
  color: string;
  rotation: string;
};

export type Nutrient = { label: string; amount: string };

export type Card = {
  src: string;
  rotation: string;
  name: string;
  img: string;
  translation?: string;
};
