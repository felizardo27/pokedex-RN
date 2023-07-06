import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as S from "./styles";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import { useTheme } from "styled-components";
import circle from "../../assets/images/circle.png";

type RouteParams = {
  pokemonId: number;
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

type PokemonType = {
  type: {
    name: TypeName;
  };
};

type PokemonProps = {
  abilities: Ability[];
  id: number;
  name: string;
  stats: Stats[];
  color: string;
  types: PokemonType[];
};

export function About() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetails(pokemonId: number) {
      try {
        const response = await api.get(`/pokemon/${pokemonId}/`);
        const { abilities, id, name, stats, types } = response.data;

        const currentType = types[0].type.name as TypeName;
        const color = colors.backgroundCard[currentType];

        setPokemon({
          abilities,
          id,
          name,
          stats,
          color,
          types,
        });
      } catch (e) {
        Alert.alert("Oops! Something went wrong!");
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetails(pokemonId);
  }, []);

  return (
    <>
      {load  ? 
        <>
          <Text style={{ marginTop: 200 }}>Carregando...</Text>
        </>
       : 
        <ScrollView>
          <S.Header type={pokemon.types[0].type.name}>
            <S.BackButton>
              <Feather name="chevron-left" size={24} color="#FFF" />
            </S.BackButton>

            {/* <S.ContentImage>
              <S.CircleImage source={circle} />
              <S.PokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}
              />
            </S.ContentImage> */}
          </S.Header>
        </ScrollView>
      }
    </>
  );
}
