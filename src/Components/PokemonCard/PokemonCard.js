import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'




const PokemonCard = (props) => {


const {setPokemon, Pokemon, Pikachu ,Bulbasaur, setBulbasaur, Venosaur}=props  

const {name,type,evolved,weight,color,image,id} = Bulbasaur







const evoluirPokemon = () => {
  setPokemon(Pikachu)
  setBulbasaur(Venosaur)

}




  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`} />
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() =>evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>

 
  )
}

export default PokemonCard