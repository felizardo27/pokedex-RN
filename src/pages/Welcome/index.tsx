import React from "react";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from './pokemon.json';
import * as S from './styles';

export function Welcome() {
    return (
        <S.Container>
            <S.Content>
                <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
            </S.Content>
            <S.Footer>
                <S.Title>Bem Vindo</S.Title>
                <S.SubTitle>Encontre todos os pokemons em um só lugar</S.SubTitle>
            </S.Footer>
        </S.Container>
    );
}