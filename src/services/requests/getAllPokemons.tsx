import { Pokemon, request } from "../../shared/types/Pokemon";
import api from "../api";

export async function getAllPokemons(setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>) {
  const response = await api.get("/pokemon");
  const { results } = response.data;

  const payloadPokemons = await Promise.all(
    results.map(async (pokemon: Pokemon) => {
      const { id, types, image } = await getMoreInfo(pokemon.url);

      return {
        name: pokemon.name,
        id,
        types,
        image
      };
    })
  );
  setPokemons(payloadPokemons);
}

async function getMoreInfo(url: string): Promise<request> {
  const reponse = await api.get(url);
  const { id, types, sprites } = reponse.data;

  return {
    id,
    types,
    image: sprites.other['official-artwork'].front_default,
  };
}
