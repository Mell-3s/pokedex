import { NavLink } from 'react-router-dom';
import { TPokemon } from '../models/Pokemon';
import Type from './Type';

type TProps = {
  pokemon: TPokemon;
};

function Card({ pokemon }: TProps) {
  return (
    <NavLink
      to={`/${pokemon.id}`}
      className="flex items-center justify-between rounded p-1 shadow-lg hover:bg-blue-50"
    >
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="flex-1">
        <p className="text-lg font-bold capitalize">{pokemon.name}</p>
        <p className="text-gray-400">Nr. {pokemon.id}</p>
      </div>
      <div className="flex gap-1">
        {pokemon.types.map(({ type }) => (
          <Type value={type.name} key={`${pokemon.name}__${type.name}`} />
        ))}
      </div>
    </NavLink>
  );
}
export default Card;
