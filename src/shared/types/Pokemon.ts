type PokemonType = {
  type: string;
};

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

export type request = {
  id: number;
  types: PokemonType[];
};
