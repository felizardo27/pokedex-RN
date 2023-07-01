import styled, { css } from "styled-components/native";
import ITheme from "../../shared/interfaces/ITheme";

export const Container = styled.View`
    ${({theme}: ITheme) => css`
        flex: 1;
        background-color: ${theme.colors.background_white};
    `}
`;
