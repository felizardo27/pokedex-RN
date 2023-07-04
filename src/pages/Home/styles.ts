import styled, { css } from "styled-components/native";
import ITheme from "../../shared/types/ITheme";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    ${({theme}: ITheme) => css`
        flex: 1;
        background-color: ${theme.colors.background_white};
    `}
`;

export const Header = styled.ImageBackground`
    ${({theme}: ITheme) => css`
        width: ${windowWidth}px;
        height: 220px;
        background-color: ${theme.colors.background_white};
        margin-left: -20px;
    `}
`;


export const Title = styled.Text`
    ${({theme}: ITheme) => css`
        font-size: 32px;
        line-height: 38px;
        font-weight: bold;
        color: ${theme.colors.light_text};
    `}
`;

