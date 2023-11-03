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
  const [figurinha, setFigurinha] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: true,
    weight: 2,
    color: "yellow",
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  });

   const novoPokemon = {
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6, 
    color: "yellow",
    ImagePokemon: "https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png",
    id: 25 
   }

   const pokemonRaboot = {
    name: "Raboot",
    type: "Fire",
    evolved: false,
    weight: 19.8, 
    color: "Gray",
    image: 'https://archives.bulbagarden.net/media/upload/2/20/0814Raboot.png',
    id: 814 
   }

   const pokemonRegidrago = {
    name: "Regidrago",
    type: "Dragon",
    evolved: false,
    weight: 440, 
    color: "Green",
    image: "https://archives.bulbagarden.net/media/upload/7/79/0895Regidrago.png",
    id: 895 
   }
  
 

  return (<>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard figurinha={figurinha} setFigurinha={setFigurinha} />
    
      {/* Crie aqui seus próximos pokemons! */}
      <PokemonCard figurinha={pokemonRaboot} setFigurinha={setFigurinha}/>
      <PokemonCard figurinha={novoPokemon} setFigurinha={setFigurinha}/>
      <PokemonCard figurinha={pokemonRegidrago} setFigurinha={setFigurinha}/>
        
    </FlexContainer>
  </>

  );
}

export default App;
