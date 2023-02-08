import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'


//const PokemonCard = (props) => {
const PokemonCard = ({ pokemon, setPokemon }) => {

  //const { img, color, name, type, weight, pokemon } = props -> em vez de fazer isso, dá pra passar o array inteiro de pokemon desestruturado como parâmetro
  console.log(pokemon)
  const { color, image, name, type, weight } = pokemon
  
  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evoluir")
    if(name === 'Pichu'){
      const evolvedPokemon = {
        ...pokemon,
        name: "Pikachu",
        type: "Electric",
        evolved: true,
        weight: 6,
        color: "yellow",
        image:
          "https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png",
        id: 0
      };
      setPokemon(evolvedPokemon)
    }  
    if(name === 'Bulbasauro'){
      const evolvedPokemon2 = {
        ...pokemon[1],
        name: "Ivysauro",
        type: "Plant",
        evolved: true, 
        weight:  13,
        color: "green",
        image:
          "https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png",
        id: 0
      };
      setPokemon(evolvedPokemon2)
    }  
  }


    
  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard


//const PokemonCard = ({ pokemon: { color, name, type, weight } }) -> isso é a desestruturação da desestruturação. Aí, em Card não precisaria colocar pokemon.name, colocaria direto name. Mas fazendo assim, você perde todos os dados do objeto


//a chamada de um componente é tipo invocar uma função