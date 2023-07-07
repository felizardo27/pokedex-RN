import styled, { css } from "styled-components/native";
import { TypeName } from ".";
import ITheme from "../../shared/types/ITheme";

type TypeProps = {
  theme: ITheme;
  type: TypeName;
};

export const Header = styled.View<TypeProps>`
  ${({ theme, type }: TypeProps) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    height: 340px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    position: relative;
  `}
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 40px;
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const Content = styled.View`
  margin-left: 30px;
`;

export const PokemonId = styled.Text`
  ${({ theme }: TypeProps) => css`
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }: TypeProps) => css`
    text-transform: capitalize;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;
    color: ${theme.colors.text_white};
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View`
  ${({ theme, type }: TypeProps) => css`
    width: 65px;
    height: 25px;
    padding: 5px;
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }: TypeProps) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.text_white};
    text-transform: capitalize;
  `}
`;

export const DotsImage = styled.Image`
  width: 85px;
  position: absolute;
  right: -20px;
  top: 220px;
`;

export const Container = styled.View`
  ${({theme}: TypeProps) => css`
    flex: 1;
    padding: 20px;
    background-color: ${theme.colors.background_white};
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    margin-top: -40px;
  `}
`;

export const Title = styled.Text<TypeProps>`
  ${({theme, type}: TypeProps) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    color: ${theme.colors.boxType[type]};
  `}
`;
