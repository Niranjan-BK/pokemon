import { PokemonDetail } from "@/lib/types/pokemon";
import Image from "next/image";
import React from "react";

function PokemonCard({ pokemon }: { pokemon: PokemonDetail }) {
  const pokemonId = pokemon.id;

  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  return (
    <div className="flex flex-col rounded-md shadow-md">
      <div className="relative w-full flex justify-center h-[150px]">
        <Image
          src={pokemonImg}
          fill
          className="object-contain bg-blue-200"
          alt={pokemon.name}
          loading="lazy"
        />
      </div>
      <div className="bg-gray-200 flex flex-col  justify-between p-4">
        <div>
          <span className="font-medium">Name: </span>
          <span>{pokemon.name}</span>
        </div>
        <div>
          <span className="font-medium">Weight: </span>
          <span>{pokemon.weight}</span>
        </div>
        <div>
          <span className="font-medium">Abilities: </span>
          <span>
            {pokemon.abilities.map((ability) => ability.ability.name).join(",")}
          </span>
        </div>
        <div>
          <span className="font-medium">Moves: </span>
          <span>
            {pokemon.moves
              .map((move) => move.move.name)
              .slice(0, 4)
              .join(",")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
