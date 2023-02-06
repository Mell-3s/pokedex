import { useState } from 'react';
import Card from '../components/Card';
import useSearchPokemon from '../hooks/useSearchPokemon';

function Overview() {
  const [search, setSearch] = useState<string>('');
  const { pokemon, isLoading } = useSearchPokemon(search);

  return (
    <main className="justify-between p-2">
      <h1 className="mb-2 text-3xl font-bold">Pokédex</h1>
      <input
        placeholder="Pokemon zoeken"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="w-full rounded bg-blue-50 p-2"
      />

      {isLoading && <p>Loading...</p>}
      {!pokemon?.length && <p>Can&apos;t find any pokemon</p>}
      {pokemon?.map((p) => (
        <Card pokemon={p} key={p.id} />
      ))}
    </main>
  );
}
export default Overview;
