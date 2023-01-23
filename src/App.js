import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
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
  const [pokemon1, setPokemon1] = useState({
    name: "Bulbassauro",
    type: "planta",
    evolved: false,
    weight: 3,
    color: 'verde',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
    id: 0
  })
  return (<>
    <GlobalStyles />
    <FlexContainer>
      <PokemonCard
        pokemon={pokemon}
        setPokemon={setPokemon}
      />
      <PokemonCard
        pokemon={pokemon1}
        setPokemon={setPokemon1}
      />
      <PokemonCard
        pokemon={pokemon1}
        setPokemon={setPokemon1}
      />
    </FlexContainer>
  </>

  );
}

export default App;
