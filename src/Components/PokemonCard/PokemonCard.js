import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evolouir")
  props.setPokemon(
    {
      ...props.pokemon,
  name:"Raichu",
  type: "Eletric",
  evolved: true,
  weight: 30,
  color: 'yellow',
  image: 'https://archives.bulbagarden.net/media/upload/8/88/026Raichu.png',
  id: 26
  })

          console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard