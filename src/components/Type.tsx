import Color from '../models/Color';
import PokemonType from '../models/PokemonType';

type TProps = {
  value: PokemonType;
};

function Type({ value }: TProps) {
  return (
    <span
      className="rounded-xl py-1 px-2 capitalize text-white"
      style={{ backgroundColor: Color[value] }}
    >
      {value}
    </span>
  );
}

export default Type;
