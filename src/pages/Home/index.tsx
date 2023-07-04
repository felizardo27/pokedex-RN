import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { FlatList } from "react-native";
import { getAllPokemons } from "../../services/requests/getAllPokemons";
import { Pokemon } from "../../shared/types/Pokemon";
import { Card } from "../../components/Card";
import pokeballHeader from "../../assets/images/pokeball.png";

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { navigate } = useNavigation();
  function handlerNavigation(pokemonId: number) {
    navigate("About", {
      pokemonId,
    });
  }

  useEffect(() => {
    getAllPokemons(setPokemons);
  }, []);

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader} />
            <S.Title>Pokédex</S.Title>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <Card data={pokemon} onPress={() => handlerNavigation(pokemon.id)} />
        )}
      />
    </S.Container>
  );
}
