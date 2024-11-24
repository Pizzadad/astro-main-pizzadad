export interface ParfamWithImages {
  url: string;
  name: string;
  desiger: string;
  slug: string;
  image: string;
  gender: string;
  rating: number;
  votes: number;
  description: string;
  accords: Record<string, number>;
  topNotes: string[];
  midNotes: string[];
  baseNotes: string[];
  hour:{
    día: number;
    noche: number;
  }
  season: {
    invierno: number;
    primavera: number;
    verano: number;
    otoño: number;
  };
  types: Type[];
}

export interface Type {
  size: string
  price: number
}