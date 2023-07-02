import React from "react";
import dotsImage from "../../assets/images/dots.png";
import * as S from "./styles";
import { Pokemon } from "../../shared/types/Pokemon";
import { TouchableOpacityProps } from "react-native";

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
            <S.PokemonType type={PokemonType.type.name}>
              <S.PokemonTypeText key={PokemonType.type.name}>
                {PokemonType.type.name}
              </S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide></S.RightSide>
    </S.PokemonCard>
  );
}
