import { PokemonByType, PokemonDetail, PokemonTypeList } from "./types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/";
export const pokemonApi = {
  getPokemonTypes: async () => {
    try {
      const res = await fetch(`${BASE_URL}type?limit=25`);
      const data = (await res.json()) as PokemonTypeList;
      return data.results;
    } catch (error) {
      console.log(error);
    }
  },
  getPokemonByType: async (name: string) => {
    try {
      const res = await fetch(`${BASE_URL}type/${name}`);
      const data = (await res.json()) as PokemonByType;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getPokemonById: async (id: number) => {
    try {
      const res = await fetch(`${BASE_URL}pokemon/${id}`);
      const data = (await res.json()) as PokemonDetail;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
