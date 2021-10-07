import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
    }
  }

  handleChangePokemon(incDec) {
    this.setState((previusState, { pokemons }) => {
      const len = pokemons.length;
      const pokemonIndex = previusState.pokemonIndex + incDec >= len ? 0
        : previusState.pokemonIndex + incDec < 0 ? len - 1
          : previusState.pokemonIndex + incDec;
      return {
        pokemonIndex,
      };
    });
  }
  render() {
    const pokemon = this.props.pokemons[this.state.pokemonIndex]
    return (
      <div className="pokedex">
        <button onClick={() => this.handleChangePokemon(-1)}>Previus</button>
        <Pokemon key={pokemon.id} pokemon={pokemon} />
        <button onClick={() => this.handleChangePokemon(1)}>Next</button>
      </div>
    );
  }
}

export default Pokedex;