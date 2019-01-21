import React, { Component } from 'react';


export default class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon">
        <h4>{this.props.singlePokemon.name}</h4>
      </div>
    )
  }
}
