import { ThemeType } from "styled-components";
import styled, { css } from "styled-components/native";

interface ITheme {
    theme: ThemeType;
}

export const Container = styled.View`
    ${({theme}: ITheme) => css`
        flex: 1;
        background-color: ${theme.colors.background_white};
    `}
`;

export const Content = styled.View`
    height: 70%;
`;

export const Footer = styled.View`
    ${({theme}: ITheme) => css`
        justify-content: center;
        align-items: center;
        height: 30%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        
        background-color: ${theme.colors.background_type_water};
    `}
`;

export const Title = styled.Text`
    ${({theme}: ITheme) => css`
        font-size: 25px;
        color: ${theme.colors.text_white}
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}: ITheme) => css`
        margin-top: 20px;
        font-size: 15px;
        color: ${theme.colors.text_white}
    `}
`;
