import styled, { css } from "styled-components/native";
import ITheme from "../../shared/types/ITheme";
import { ThemeType } from "styled-components";
import { PokemonCardProps } from "../../shared/types/Pokemon";

export const PokemonCard = styled.TouchableOpacity<PokemonCardProps>`
  ${({ theme, type }: PokemonCardProps) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
  `}
`;

export const LeftSide = styled.View`
  ${({ theme }: ITheme) => css`
    width: 50%;
    position: relative;
  `}
`;

export const PokemonId = styled.Text`
  ${({ theme }: ITheme) => css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }: ITheme) => css`
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.colors.text_white};
  `}
`;

export const ImageCardDetailLeftSide = styled.Image`
  ${({ theme }: ITheme) => css`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
  `}
`;

export const PokemonContentType = styled.View`
  ${({ theme }: ITheme) => css`
    flex-direction: row;
  `}
`;

export const PokemonType = styled.View`
  ${({ theme, type }: PokemonCardProps) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }: ITheme) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.text_white};
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.View`
  ${({ theme }: ITheme) => css``}
`;
