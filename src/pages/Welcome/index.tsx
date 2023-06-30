import React from "react";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from './pokemon.json';
import * as S from './styles';
import { Button } from "../../components/Button";

export function Welcome() {
    return (
        <S.Container>
            <S.Content>
                <S.WrapperAnimation>
                    <S.WrapperImage>
                        <AnimatedLottieView
                            style={{width:200}}
                            source={pokemonAnimation}
                            autoPlay
                            loop
                        />
                    </S.WrapperImage>
                </S.WrapperAnimation>
                <S.Title>Bem Vindo</S.Title>
                <S.SubTitle>Encontre todos os pokemons em um só lugar</S.SubTitle>
            </S.Content>
            <S.Footer>
                <Button title="Iniciar" />
            </S.Footer>
        </S.Container>
    );
}