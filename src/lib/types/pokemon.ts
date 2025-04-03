export type PokemonTypeList = {
  count: number;
  next: string | null;
  prev: string | null;
  results: PokemonType[];
};

export type PokemonType = {
  name: string;
  url: string;
};

export type PokemonByType = {
  moves: PokemonType[];
  name: string;
  pokemon: Pokemon[];
};

export type Pokemon = {
  pokemon: PokemonType;
  slot: number;
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type Abilities = Ability[];

export type PokemonDetail = {
  abilities: Abilities;
  name: string;
  id: number;
  weight: number;
  moves: {
    move: PokemonType;
  }[];
};
