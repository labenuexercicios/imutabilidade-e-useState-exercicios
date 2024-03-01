import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'




const PokemonCard = (props) => {


const {setPokemon, Pokemon, Pikachu }=props  

const {name,type,evolved,weight,color,image,id} = Pokemon







const evoluirPokemon = () => {
  setPokemon(Pikachu)


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