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
  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  const [Pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:"https://vignette.wikia.nocookie.net/pokemon/images/9/9d/Pichu.png/revision/latest?cb=20160503093526",
    id: 1,
  },);

  const Pikachu = {
    name: "Pikachu",
    type: "Electric",
    evolved: false,
    weight: 3,
    color: "yellow",
    image:"https://th.bing.com/th/id/R.3153d3bb0b99d9bca9ff21d5ef3669e6?rik=PaNUlRPzTCIA%2bQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fpvA2GrC.png&ehk=yS8BdI6cZX9WBD8blPkqqfOgchJrCmH6ZCqp844cGa0%3d&risl=&pid=ImgRaw&r=0",
    id: 2,
  };

    const [Bulbasaur,setBulbasaur] = useState ({
      name: "Bulbasaur",
      type: "Grass",
      evolved: true,
      weight: 0.7,
      color: "Green",
      image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      id2: 4,
  });

  const Venosaur = {
    name: "Venosaur",
    type: "Electric",
    evolved: false,
    weight: 3,
    color: "Green",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    id: 2,
  };


  


  
  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard Pokemon={Pokemon}Pikachu={Pikachu} setPokemon={setPokemon}  />
        <PokemonCard Pokemon={Bulbasaur}Pikachu={Venosaur} setPokemon={setBulbasaur}  />
     
     
    
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
