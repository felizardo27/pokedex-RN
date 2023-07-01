import { Pokemon, request } from "../../shared/types/Pokemon";
import api from "../api";

export async function getAllPokemons(setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>) {
  const response = await api.get("/pokemon");
  const { results } = response.data;

  const payloadPokemons = await Promise.all(
    results.map(async (pokemon: Pokemon) => {
      const { id, types } = await getMoreInfo(pokemon.url);

      return {
        name: pokemon.name,
        id,
        types,
      };
    })
  );
  setPokemons(payloadPokemons);
}

async function getMoreInfo(url: string): Promise<request> {
  const reponse = await api.get(url);
  const { id, types } = reponse.data;

  return {
    id,
    types,
  };
}
