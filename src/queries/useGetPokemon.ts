import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { TPokemonDetail } from '../models/Pokemon';

function getPokemon(id: string): Promise<AxiosResponse<TPokemonDetail>> {
  return axios.get<TPokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function useGetPokemon() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return useQuery(['getPokemon', id], () => getPokemon(id ?? ''), {
    select: ({ data }) => data,
    enabled: !!id?.length,
    onError: () => navigate('/'),
  });
}

export default useGetPokemon;
