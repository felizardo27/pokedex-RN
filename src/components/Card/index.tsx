import React from "react";
import { TouchableOpacityProps } from "react-native";
import dotsImage from "../../assets/images/dots.png";
import pokeball from "../../assets/images/pokeballCard.png";
import * as S from "./styles";
import { Pokemon } from "../../shared/types/Pokemon";

type Props = {
  data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImage} />

        <S.PokemonContentType>
          {data.types.map((PokemonType) => (
            <S.PokemonType
              key={PokemonType.type.name}
              type={PokemonType.type.name}
            >
              <S.PokemonTypeText>{PokemonType.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>

      <S.RightSide>
        <S.PokeballDetail source={pokeball} />
        <S.PokemonImage
          source={{
            uri: data.image,
          }}
        />
      </S.RightSide>
    </S.PokemonCard>
  );
}
