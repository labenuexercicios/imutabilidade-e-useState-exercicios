import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';
import { useStates } from 'react';

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
    name: "Fennekin",
    type: "Fire",
    evolved: false,
    weight: 9.4,
    color: '#f05868',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/3d/653Fennekin.png/250px-653Fennekin.png',
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "Vulpix",
    type: "Fire",
    evolved: false,
    weight: 9.9,
    color: '#b07030',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/6/60/037Vulpix.png/250px-037Vulpix.png',
    id: 0
  })
  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon}
      setPokemon={setPokemon}
      />
      {/* Crie aqui seus próximos pokemons! */}
      <PokemonCard pokemon={pokemon1}
      setPokemon={setPokemon1}
      />
      <PokemonCard pokemon={pokemon2}
      setPokemon={setPokemon2}
      />
    </FlexContainer>
  </>
    
  )
}

export default App;
