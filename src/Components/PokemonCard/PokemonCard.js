import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({nome, tipo,evolucao,peso,cor,imagem, id, setPokemon}) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
        setPokemon({
          nome: "Pikachu",
          evolucao : true,
          peso: 6,
          imagem: 'https://archives.bulbagarden.net/media/upload/archive/4/4a/20100904002342%210025Pikachu.png'
        })
        console.log(nome)

        console.log(evolucao)
    }
    
  return (
    <Card color={cor}>
        <img src={imagem} alt={`Pokemon`}/>
        <PokemonName>{nome}</PokemonName>
        <PokemonType>{tipo}</PokemonType>
        <p>{peso}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard