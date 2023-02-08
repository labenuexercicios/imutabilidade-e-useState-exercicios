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
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png",
    id: 0
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Bulbasauro",
    type: "Plant",
    evolved: false,
    weight: 4,
    color: 'green',
    image: 'https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Clipart.png',
    id: 0
  });

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  /*{
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  }
  */
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      
      <PokemonCard 
      /* color={pokemon.color} 
      img={pokemon.image}
      name={pokemon.name}
      type={pokemon.type}
      weight={pokemon.weight} */
      pokemon={pokemon} setPokemon={setPokemon}
      />
      
      <PokemonCard 
      /* color={pokemon2.color} 
      img={pokemon2.image}
      name={pokemon2.name}
      type={pokemon2.type}
      weight={pokemon2.weight} */
      pokemon={pokemon2} setPokemon={setPokemon2}
      />
      
    </FlexContainer>
  </>
    
  );
}

export default App;
