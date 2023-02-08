import { NavLink } from 'react-router-dom';
import Type from '../components/Type';
import Color from '../models/Color';
import useGetPokemon from '../queries/useGetPokemon';

function Detail() {
  const { data: pokemon, isLoading } = useGetPokemon();

  if (isLoading) return <p>Loading ...</p>;
  if (!pokemon) return null;
  return (
    <main
      className="min-h-screen p-2"
      style={{ backgroundColor: Color[pokemon.types[0].type.name] }}
    >
      <header className="mb-2 text-white">
        <NavLink to="/">Terug</NavLink>
      </header>
      <h1 className="text-3xl font-bold capitalize text-white">
        {pokemon.name}
      </h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-full max-w-md"
      />
      <p className="mb-2 uppercase text-white">About</p>
      <div className="grid grid-cols-2 rounded bg-white p-2">
        <p className="text-gray-400">Type</p>
        <div className="flex gap-1">
          {pokemon.types.map(({ type }) => (
            <Type value={type.name} key={`${pokemon.name}__${type.name}`} />
          ))}
        </div>
        <p className="text-gray-400">Number</p>
        <p>Nr. {pokemon.id}</p>
        <p className="text-gray-400">Hoogte</p>
        <p>{pokemon.height} cm</p>
        <p className="text-gray-400">Gewicht</p>
        <p>{pokemon.weight / 10} kg</p>
      </div>
      <p className="my-2 mb-2 uppercase text-white">Statistieken</p>
      <div className=" rounded bg-white p-2">
        {pokemon.stats.map(({ base_stat, stat }) => (
          <div key={stat.name} className="grid grid-cols-3 gap-2">
            <p className="uppercase text-gray-400">{stat.name}</p>
            <p>{base_stat}</p>
            <div className="h-2 flex-1 rounded bg-gray-200">
              <div
                className="h-2 rounded"
                style={{
                  width: `${base_stat}%`,
                  backgroundColor: base_stat >= 50 ? 'green' : 'red',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Detail;
