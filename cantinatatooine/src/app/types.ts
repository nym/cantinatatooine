export default interface Person {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld_name: string;
  homeworld: string;
  id: number;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface Planet {
  diameter: string;
  id: number;
  name: string;
  population: string;
  rotation_period: string;
  url: string;
}

export interface Film {
  characters: string[];
  director: string;
  id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  vehicles: string[];
}
