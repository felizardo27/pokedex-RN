import styled, { css } from "styled-components/native";
import ITheme from "../../shared/types/ITheme";

export const Container = styled.TouchableOpacity`
    ${({theme}: ITheme) => css`
        width: 100%;
        height: 50px;
        background-color: ${theme.colors.types.water};
        align-items: center;
        justify-content: center;
        border-radius: 20px;
    `}
`;

export const Title = styled.Text`
    ${({theme}: ITheme) => css`
        font-size: 14px;
        color: ${theme.colors.text_white};
    `}
`;