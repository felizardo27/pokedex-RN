import { ThemeType } from "styled-components";

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
  image: PokemonImage;
};

export type request = {
  id: number;
  types: PokemonType[];
  image: string;
};

export type TypeProps = { 
  theme: ThemeType;
  type: TypeName;
}

export type PokemonType = {
  type: {
    name: TypeName,
  };
};

export type TypeName =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

  export type PokemonProps = {
    abilities: Ability[];
    id: number;
    name: string;
    stats: Stats[];
    color: string;
    types: PokemonType[];
    sprites: PokemonImage;
  };

  type Ability = {
    ability: {
      name: string;
    };
  };

  type Stats = {
    base_stat: number;
    stat: {
      name: string;
    };
  };

  type PokemonImage = {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };