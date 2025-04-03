import { pokemonApi } from "@/lib/api";
import React from "react";
import PokemonDetail from "./component/pokemonDetail";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pokemon = await pokemonApi.getPokemonById(+id);
  return (
    <main className="p-6 max-w-xl mx-auto">
      <PokemonDetail pokemon={pokemon} />
    </main>
  );
}

export default Page;
