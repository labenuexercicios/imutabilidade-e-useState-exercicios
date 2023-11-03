import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton } from './styles'




const PokemonCard = ({figurinha, setFigurinha}) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
        if (!figurinha.evolved) {
          const novoPokemonEvoluido = {
            ...figurinha,
            name: "Pikachu Evoluído",
            type: "Electric Evoluído",
            evolved: true,
          };
          setFigurinha(novoPokemonEvoluido);
        } else {
          console.log("Pokémon já evoluiu!");
        }
      
      
    }

  return (
    <Card color={figurinha.color}>
        <img src={figurinha.imagem} alt={`Pokemon`}/>
        <PokemonName>{figurinha.name}</PokemonName>
        <PokemonType>{figurinha.type}</PokemonType>
        <p>{figurinha.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard