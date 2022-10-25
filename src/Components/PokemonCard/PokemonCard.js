import React, { useState } from 'react'
import {Card, PokemonName, PokemonType, EvolveButton, Main} from './styles'



const PokemonCard = () => {


  const [pokemon, setPokemon] = useState([{
    name: 'Braviary',
    type: 'Normal Flying',
    color: 'white',
    weight: 41.0,
    evolution: 'Evoluir!',
    img: 'https://archives.bulbagarden.net/media/upload/thumb/c/cf/628Braviary.png/375px-628Braviary.png'
  }])

  const evoluirPokemon = () => {
    setPokemon([{
      name: 'Hisuian Braviary',
      color: 'white',
      type: 'Psychic Flying',
      weight: 43.4,
      evolution: 'Evoluido!',
      img: 'https://archives.bulbagarden.net/media/upload/thumb/1/16/628Braviary-Hisui.png/165px-628Braviary-Hisui.png'
    }])}

  const [pokemon2, setPokemon2] = useState([{
    name: 'Charizard',
    type: 'Fire Flying',
    weight: 90.5,
    color: '#DB925A',
    evolution: 'Evoluir!',
    img: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/375px-006Charizard.png'
  }])

  const evoluirPokemon2 = () => {
    setPokemon2([{
      name: 'Mega Charizard X',
      color: '#DB925A',
      type: 'Fire Dragon',
      weight: 110.5,
      evolution: 'Evoluido!',
      img: 'https://archives.bulbagarden.net/media/upload/thumb/3/36/006Charizard-Mega_X.png/165px-006Charizard-Mega_X.png'
    }])}
  
    
  return (
  <Main>  
    <Card color={pokemon[0].color}>
        <img src={pokemon[0].img} alt={`Pokemon`} height='50px'/>
        <PokemonName>{pokemon[0].name}</PokemonName>
        <PokemonType>{pokemon[0].type}</PokemonType>
        <p>{pokemon[0].weight}kg</p>
        <EvolveButton onClick={() => evoluirPokemon()}>{pokemon[0].evolution}</EvolveButton>
    </Card>

    <Card color={pokemon2[0].color}>
        <img src={pokemon2[0].img} alt={`Pokemon`} height='50px'/>
        <PokemonName>{pokemon2[0].name}</PokemonName>
        <PokemonType>{pokemon2[0].type}</PokemonType>
        <p>{pokemon2[0].weight}kg</p>
        <EvolveButton onClick={() => evoluirPokemon2()}>{pokemon2[0].evolution}</EvolveButton>
    </Card>

  </Main>
  )
}

export default PokemonCard