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
};

export type request = {
  id: number;
  types: PokemonType[];
};

export type PokemonCardProps = { 
  theme: ThemeType;
  type: string;
}