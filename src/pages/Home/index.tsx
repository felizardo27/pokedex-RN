import React, { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import { Text } from "react-native";

type PokemonType = {
  type: string;
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type request = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payloadPokemons);
    }
    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<request> {
    const reponse = await api.get(url);
    const { id, types } = reponse.data;

    return {
      id,
      types,
    };
  }

  return (
    <S.Container>
      {pokemons.map((pokemon) => (
        <Text>{pokemon.name}</Text>
      ))}
    </S.Container>
  );
}
