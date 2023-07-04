import { ThemeType } from "styled-components";

type PokemonType = {
  type: {
    name: string,
  };
};

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
  image: string;
};

export type request = {
  id: number;
  types: PokemonType[];
  image: string;
};

export type PokemonCardProps = { 
  theme: ThemeType;
  type: string;
}