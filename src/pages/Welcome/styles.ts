import styled, { css } from "styled-components/native";
import { ITheme } from "../../shared/interfaces/ITheme";

export const Container = styled.View`
    ${({theme}: ITheme) => css`
        flex: 1;
        background-color: ${theme.colors.background_type_water};
    `}
`;

export const Content = styled.View`
    height: 70%;
    align-items: center;
    justify-content: center;
`;

export const WrapperAnimation = styled.View`
    ${({theme}: ITheme) => css`
        height: 300px;
        width: 200px;
        background-color: ${theme.colors.types.water};
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        transform: rotate(30deg);
    `}
`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg);

`;

export const Title = styled.Text`
    ${({theme}: ITheme) => css`
        margin-top: 20px;
        font-size: 40px;
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

export const Footer = styled.View`
    ${({theme}: ITheme) => css`
        justify-content: center;
        align-items: center;
        height: 30%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: ${theme.colors.background_white};
        padding: 20px;
    `}
`;

