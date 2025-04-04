"use client";
import { PokemonByType, PokemonType } from "@/lib/types/pokemon";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import PokemonCard from "./pokemonCard";
import { usePokemon } from "@/lib/hooks/usePokemon";

function Pokemon({
  pokemonTypes,
  pokemons,
}: {
  pokemonTypes: PokemonType[] | undefined;
  pokemons: PokemonByType | undefined;
}) {
  const { setType, filteredPokemon, handleSearch, inputRef } = usePokemon({
    initalPokemon: pokemons,
  });

  if (!pokemonTypes) {
    return <div className="h-10 w-24 animate-pulse bg-gray-300"></div>;
  }
  return (
    <>
      <Select
        defaultValue={pokemonTypes[0].name}
        onValueChange={(val) => setType(val)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select pokemon" />
        </SelectTrigger>
        <SelectContent>
          {pokemonTypes.map((pokemonType) => (
            <SelectItem key={pokemonType.name} value={pokemonType.name}>
              {pokemonType.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex items-center mt-2">
        <Input ref={inputRef} name="search" placeholder="Search pokemon..." />
        <button onClick={handleSearch} className="bg-blue-400 px-2 h-9 rounded">
          Search
        </button>
      </div>
      <div className="grid lg:grid-cols-3 gap-1 md:grid-cols-2 grid-cols-1">
        {filteredPokemon?.pokemon.map((pm) => (
          <PokemonCard key={pm.pokemon.name} pokemon={pm} />
        ))}
      </div>
    </>
  );
}

export default Pokemon;
