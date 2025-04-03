// hooks/usePokemon.ts
import { useEffect, useRef, useState } from "react";
import { PokemonByType } from "../types/pokemon";
import { pokemonApi } from "../api";

export const usePokemon = ({
  initalPokemon,
}: {
  initalPokemon: PokemonByType | undefined;
}) => {
  const [allPokemon, setAllPokemon] = useState<PokemonByType | undefined>(
    initalPokemon
  );
  const [filteredPokemon, setFilteredPokemon] = useState<
    PokemonByType | undefined
  >();
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let filtered = allPokemon;
    if (search && allPokemon) {
      filtered = {
        ...allPokemon,
        pokemon: allPokemon.pokemon.filter((p) =>
          p.pokemon.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
    }
    setFilteredPokemon(filtered);
  }, [search]);

  useEffect(() => {
    if (type)
      pokemonApi.getPokemonByType(type).then((res) => {
        setAllPokemon(res);
        setFilteredPokemon(res);
      });
  }, [type]);

  const handleSearch = () => {
    if (inputRef.current) {
      setSearch(inputRef.current.value);
    }
  };

  return {
    filteredPokemon,
    search,
    setSearch,
    type,
    setType,
    inputRef,
    handleSearch,
  };
};
