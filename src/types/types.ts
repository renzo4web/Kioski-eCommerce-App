export interface Planet {
  name: string;
  overview: Geology;
  structure: Geology;
  geology: Geology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}

export interface Geology {
  content: string;
  source: string;
}

export interface Images {
  planet: string;
  internal: string;
  geology: string;
}

// Generated by https://quicktype.io

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}