import { z } from 'zod';
import PokemonType from './PokemonType';

const Pokemon = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    front_default: z.string().url(),
  }),
  types: z.array(
    z.object({
      type: z.object({
        name: z.nativeEnum(PokemonType),
      }),
    })
  ),
});
export type TPokemon = z.infer<typeof Pokemon>;
