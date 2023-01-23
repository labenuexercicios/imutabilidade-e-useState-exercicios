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

  const [pokemon1, setPokemon1] = useState({
    name: "Bulbasaur",
    type: "grass",
    evolved: true,
    weight: 6.9,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png',
    id: 1
  })

  const Evoluir = () => {
    const novoPokemon = {
      ...pokemon,
      color: `red`
    }
    setPokemon(novoPokemon)
  }

  const Evoluir1 = () => {
    const novoPokemon1 = {
      ...pokemon1,
      color: `red`
    }
   setPokemon1(novoPokemon1)
  }



  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
            <PokemonCard name={pokemon.name}
            type={pokemon.type}
            evolved={pokemon.evolved}
            weight={pokemon.weight}
            color={pokemon.color}
            image={pokemon.image}
            evoluirPokemon={Evoluir}              />
            <PokemonCard
            name={pokemon1.name}
            type={pokemon1.type}
            evolved={pokemon1.evolved}
            weight={pokemon1.weight}
            color={pokemon1.color}
            image={pokemon1.image}
            evoluirPokemon={Evoluir1}
            />

      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
