import { Pokemon } from "@/lib/types/pokemon";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const pokemonId = pokemon.pokemon.url.split("/").filter(Boolean).pop();

  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  return (
    <Link href={`/pokemon/${pokemonId}`}>
      <div className="flex flex-col rounded-md shadow-md">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={pokemonImg}
            fill
            className="object-cover"
            alt={pokemon.pokemon.name}
            loading="lazy"
          />
        </div>
        <div className="bg-gray-200 flex flex-col h-[100px] justify-between p-4">
          <span>{pokemon.pokemon.name}</span>
          <p className="flex items-center gap-1">
            Details <ArrowBigRight />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
