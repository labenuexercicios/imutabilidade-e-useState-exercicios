import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
import { useState } from 'react'



const PokemonCard = (props) => {
    const evoluirPokemon = () => {
        props.setPokemon("pokemon")
        console.log("Cliquei no botão de evoluir", props.pokemon)
    }

  return (
    <Card color={props.color}>
        <img src={props.image} alt={`Pokemon`}/>
        <PokemonName>{props.name}</PokemonName>
        <PokemonType>{props.type}</PokemonType>
        <p>{props.weight}kg</p>

        <EvolveButton onClick={props.trocaPokemon}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard