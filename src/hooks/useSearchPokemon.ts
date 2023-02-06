import Fuse from 'fuse.js';
import { useMemo } from 'react';
import { TPokemon } from '../models/Pokemon';
import useGetAllPokemon from '../queries/useGetAllPokemon';

function useSearchPokemon(query: string): {
  pokemon: TPokemon[];
  isLoading: boolean;
} {
  const { data, isLoading } = useGetAllPokemon();

  const pokemon = useMemo(() => {
    if (!query?.length) return data ?? [];
    return new Fuse(data ?? [], {
      keys: ['name'],
      shouldSort: true,
      threshold: 0.0,
    })
      .search(query)
      .map(({ item }) => item);
  }, [data, query]);

  return { pokemon, isLoading };
}

export default useSearchPokemon;
