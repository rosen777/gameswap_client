import React, { Component } from 'react';
import Pokemon from '../components/Pokemon'

export default class PokemonContainer extends Component {
  render() {
    return (
      <div className="container">
      {
        this.props.allPokemon.map(pokemon => <Pokemon singlePokemon={pokemon} />)
      }
      </div>
    )
  }
}
