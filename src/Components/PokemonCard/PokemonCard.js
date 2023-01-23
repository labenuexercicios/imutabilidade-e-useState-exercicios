import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {
// console.log(props)
    const evoluirPokemon = (mudarPokemon) => {
      console.log("Clicou no botão de evoluir!")
      if(mudarPokemon === 'Pichu'){
      props.setPokemon({
        ...props.pokemon,
      name: "Pikachu",
      color: '#f0d048',
      type: "Electric",
      weight: 6,
      evolved: true,
      image: 'https://archives.bulbagarden.net/media/upload/thumb/6/63/Pokk%C3%A9n_Pikachu_Libre.png/220px-Pokk%C3%A9n_Pikachu_Libre.png',
      id:25,
    })
  }
    if(mudarPokemon === 'Fennekin'){
    props.setPokemon({
      ...props.pokemon,
      name: "Braixen",
      color: '#f05868',
      type: "Fire",
      weight: 14.5,
      evolved: true,
      image: 'https://archives.bulbagarden.net/media/upload/thumb/8/8c/Pokk%C3%A9n_Braixen.png/200px-Pokk%C3%A9n_Braixen.png',
  })
  } 
  else if(mudarPokemon === 'Vulpix'){
    props.setPokemon({
      ...props.pokemon,
      name: "Ninetales",
      color: '#f0d048',
      type: "Fire",
      weight: 19.9,
      evolved: true,
      image: 'https://archives.bulbagarden.net/media/upload/thumb/6/64/HOME038.png/200px-HOME038.png',
    })
  }
}
      return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(props.pokemon.name)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard