import styled, { css } from "styled-components/native";
import ITheme from "../../shared/types/ITheme";
import { Dimensions } from "react-native";
import { TypeProps } from "../../shared/types/Pokemon";

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    ${({theme}: TypeProps) => css`
        flex: 1;
        background-color: ${theme.colors.background_white};
    `}
`;

export const Header = styled.ImageBackground`
    ${({theme}: TypeProps) => css`
        width: ${windowWidth}px;
        height: 220px;
        background-color: ${theme.colors.background_white};
        margin-left: -20px;
    `}
`;


export const Title = styled.Text`
    ${({theme}: TypeProps) => css`
        font-size: 32px;
        line-height: 38px;
        font-weight: bold;
        color: ${theme.colors.light_text};
    `}
`;

