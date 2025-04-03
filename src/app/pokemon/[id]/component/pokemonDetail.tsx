"use client";
import PokemonDetailCard from "@/components/pokemonDetailCard";
import { PokemonDetail } from "@/lib/types/pokemon";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function PokemonDetailPage({
  pokemon,
}: {
  pokemon: PokemonDetail | undefined;
}) {
  const router = useRouter();
  if (!pokemon) {
    return <p>Loading...</p>;
  }
  return (
    <main className="p-6 max-w-xl mx-auto">
      <ArrowLeft onClick={() => router.back()} />
      <PokemonDetailCard pokemon={pokemon} />
    </main>
  );
}

export default PokemonDetailPage;
