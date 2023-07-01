import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Text } from "react-native";
import { getAllPokemons } from "../../services/requests/getAllPokemons";
import { Pokemon } from "../../shared/types/Pokemon";

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getAllPokemons(setPokemons)
  }, []);

  return (
    <S.Container>
      {pokemons.map((pokemon) => (
        <Text>{pokemon.name}</Text>
      ))}
    </S.Container>
  );
}
