import React from "react";
import * as S from './styles'
import { TouchableOpacityProps } from "react-native";

type Props = {
    title: string;
} & TouchableOpacityProps

export function Button({title}: Props) {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
}
