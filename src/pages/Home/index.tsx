import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FlatList, Text } from "react-native";
import { getAllPokemons } from "../../services/requests/getAllPokemons";
import { Pokemon } from "../../shared/types/Pokemon";
import { Card } from "../../components/Card";

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getAllPokemons(setPokemons)
  }, []);

  return (
    <S.Container>
      <FlatList 
        data={pokemons}
        keyExtractor={pokemon => pokemon.id.toString()}
        renderItem={({item: pokemon}) => (
          <Card data={pokemon} />
        )}
      />
    </S.Container>
  );
}
