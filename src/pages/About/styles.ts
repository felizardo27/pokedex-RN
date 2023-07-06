import styled, { css } from "styled-components/native";
import { TypeName } from ".";
import ITheme from "../../shared/types/ITheme";

type TypeProps = {
  theme: ITheme;
  type: TypeName;
}

export const Header = styled.View<TypeProps>`
  ${({ theme, type}: TypeProps) => css`
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

export const ContentImage = styled.View``;

export const CircleImage = styled.Image``;

export const PokemonImage = styled.Image``;