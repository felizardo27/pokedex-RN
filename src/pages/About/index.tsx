import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as S from "./styles";
import api from "../../services/api";
import { useTheme } from "styled-components";
import { FadeAnimation } from "../../components/FadeAnimation";
import { Feather } from "@expo/vector-icons";
import circle from "../../assets/images/circle.png";
import dots from "../../assets/images/dots.png";
import { PokemonProps, TypeName } from "../../shared/types/Pokemon";

type RouteParams = {
  pokemonId: number;
};

export function About() {
  const route = useRoute();
  const { goBack } = useNavigation();
  const { pokemonId } = route.params as RouteParams;
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetails(pokemonId: number) {
      try {
        const response = await api.get(`/pokemon/${pokemonId}/`);
        const { abilities, id, name, stats, types, sprites } = response.data;

        const currentType = types[0].type.name as TypeName;
        const color = colors.backgroundCard[currentType];

        setPokemon({
          abilities,
          id,
          name,
          stats,
          color,
          types,
          sprites,
        });
      } catch (e) {
        Alert.alert("Oops! Something went wrong!");
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetails(pokemonId);
  }, []);

  function handleGoBak() {
    goBack();
  }

  return (
    <>
      {load ? (
        <>
          <Text style={{ marginTop: 200 }}>Carregando...</Text>
        </>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          <S.Header type={pokemon.types[0].type.name}>
            <S.BackButton onPress={handleGoBak}>
              <Feather name="chevron-left" size={24} color="#FFF" />
            </S.BackButton>

            <S.ContentImage>
              <S.CircleImage source={circle} />
              <FadeAnimation>
                <S.PokemonImage
                  source={{
                    uri: pokemon.sprites.other["official-artwork"]
                      .front_default,
                  }}
                />
              </FadeAnimation>
            </S.ContentImage>

            <S.Content>
              <S.PokemonId>#{pokemon.id}</S.PokemonId>
              <S.PokemonName>{pokemon.name}</S.PokemonName>
              <S.PokemonTypeContainer>
                {pokemon.types.map((PokemonType) => (
                  <S.PokemonType
                    key={PokemonType.type.name}
                    type={PokemonType.type.name}
                  >
                    <S.PokemonTypeText>
                      {PokemonType.type.name}
                    </S.PokemonTypeText>
                  </S.PokemonType>
                ))}
              </S.PokemonTypeContainer>
            </S.Content>
            <S.DotsImage source={dots} />
          </S.Header>

          <S.Container>
            <S.Title type={pokemon.types[0].type.name}> Base States </S.Title>
            {pokemon.stats.map((attribute) => (
              <S.StatusBar key={attribute.stat.name}>
                <S.Attributes>{attribute.stat.name}</S.Attributes>
                <S.AttributeValue>{attribute.base_stat}</S.AttributeValue>
                <S.ContentBar>
                  <S.ProgressBar
                    type={pokemon.types[0].type.name}
                    borderWidth={0}
                    progress={100}
                    width={attribute.base_stat}
                    color={pokemon.color}
                  />
                </S.ContentBar>
              </S.StatusBar>
            ))}

            <S.Title type={pokemon.types[0].type.name}> Abilities </S.Title>
            {pokemon.abilities.map((currentAbility) => (
              <S.StatusBar key={currentAbility.ability.name}>
                <S.Ability>{currentAbility.ability.name}</S.Ability>
              </S.StatusBar>
            ))}
          </S.Container>
        </ScrollView>
      )}
    </>
  );
}
