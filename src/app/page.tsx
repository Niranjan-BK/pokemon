import Pokemon from "@/components/pokemon";

import { pokemonApi } from "@/lib/api";

export default async function Home() {
  const pokemonTypes = await pokemonApi.getPokemonTypes();
  const pokemons = await pokemonApi.getPokemonByType("normal");

  return (
    <main className="p-6 max-w-xl mx-auto">
      <Pokemon pokemonTypes={pokemonTypes} pokemons={pokemons} />
    </main>
  );
}
