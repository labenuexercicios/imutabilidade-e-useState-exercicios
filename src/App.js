import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })
  const [pokemon2, setPokemon2] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 2,
    color: 'Red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
    id: 0
  })
  const [pokemon3, setPokemon3] = useState({
    name: "Squirtle",
    type: "Whater",
    evolved: false,
    weight: 2,
    color: 'Blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
    id: 0
  })


  // Para fazer seus próximos pokemons, crie novos estados!

  const evoluir = () => {
  const novoPokemon={
    ...pokemon,
    name: "pikachu",
    image: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"
  }
  setPokemon(novoPokemon)
}
  const evoluir2 = () => {
  const novoPokemon2={
    ...pokemon2,
    name: "Charmeleon",
    image: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png"
  }
  setPokemon2(novoPokemon2)
}
  const evoluir3 = () => {
  const novoPokemon3={
    ...pokemon3,
    name: "Wartortle",
    image: "https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png"
  }
  setPokemon3(novoPokemon3)
}

 
 return ( <>
  <GlobalStyles/>
    <FlexContainer>
      <PokemonCard 
       name={pokemon.name}
       type={pokemon.type}
       evolved={pokemon.evolved} 
       weight={pokemon.weight}
       color={pokemon.color}
       image={pokemon.image}
       id={pokemon.id}
       trocaPokemon={evoluir}/>
      
      <PokemonCard 
       name={pokemon2.name}
       type={pokemon2.type}
       evolved={pokemon2.evolved} 
       weight={pokemon2.weight}
       color={pokemon2.color}
       image={pokemon2.image}
       id={pokemon2.id}
       trocaPokemon={evoluir2}/>
      
      <PokemonCard 
       name={pokemon3.name}
       type={pokemon3.type}
       evolved={pokemon3.evolved} 
       weight={pokemon3.weight}
       color={pokemon3.color}
       image={pokemon3.image}
       id={pokemon3.id}
       trocaPokemon={evoluir3}/>


    </FlexContainer>
  </>
    
  );
}

export default App;
