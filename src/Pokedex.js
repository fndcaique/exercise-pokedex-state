import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      filter: '',
    }

    this.handleChangePokemon = this.handleChangePokemon.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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

  handleFilter(filter) {
    this.setState({ filter });
  }

  render() {

    const pokemon = this.props.pokemons
      .filter((({ type }) => type.toLowerCase().includes(this.state.filter)))[this.state.pokemonIndex]

    return (
      <div className="pokedex">
        <button onClick={() => this.handleChangePokemon(-1)}>Previus</button>
        <Pokemon key={pokemon.id} pokemon={pokemon} />
        <button onClick={() => this.handleChangePokemon(1)}>Next</button>
        <div className="filters">
          <button onClick={() => this.handleFilter('fire')}>Fire</button>
          <button onClick={() => this.handleFilter('psychic')}>Psychic</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;