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

const PokemonDetail = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  types: z.array(
    z.object({
      type: z.object({
        name: z.nativeEnum(PokemonType),
      }),
    })
  ),
  stats: z.array(
    z.object({
      base_stat: z.number(),
      stat: z.object({
        name: z.string(),
      }),
    })
  ),
  sprites: z.object({
    front_default: z.string().url(),
    back_default: z.string().url(),
  }),
});
export type TPokemonDetail = z.infer<typeof PokemonDetail>;
