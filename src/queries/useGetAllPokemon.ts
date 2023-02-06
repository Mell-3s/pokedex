import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { TPokemon } from '../models/Pokemon';

function getAllPokemon(): Promise<AxiosResponse<TPokemon[]>> {
  return axios.get<TPokemon[]>(
    'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
  );
}

function useGetAllPokemon() {
  return useQuery(['getAllPokemon'], getAllPokemon, {
    select: ({ data }) => data ?? [],
  });
}

export default useGetAllPokemon;
