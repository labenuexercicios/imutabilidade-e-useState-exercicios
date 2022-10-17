import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 5,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0
  });

  // Para fazer seus próximos pokemons, crie novos estados!
  function pikachu() {
    setPokemon({
      ...pokemon,
      name: "pikachu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"
    });
  }
  function raichu() {
    setPokemon({
      ...pokemon,
      name: "raichu",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png"
    });
  }

    const [pokemon2, setPokemon2] = useState({
      name: "Slowpoke",
      type: "Psíquico/Água",
      evolved: false,
      weight: 15,
      color: "Pink",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/7/70/079Slowpoke.png/250px-079Slowpoke.png"
      
    });
    function slowpoke2() {
      setPokemon2({
        ...pokemon2,
        name: "Slowbro",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/8/80/080Slowbro.png/250px-080Slowbro.png"
        
      });
    }
    
  
  
  return (
    <div>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard nome={pokemon} pikachu={pikachu} raichu={raichu} />
        <PokemonCard nome={pokemon2} slowpoke={slowpoke2}  />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </div>
  );
}

export default App;
