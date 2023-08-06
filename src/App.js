import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    height: 240px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const pokemons = [
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
    evolved: false,
    weight: 6.9,
    color: "Green",
    image:
      "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png",
    id: 20,
  },
  {
    name: "Ivysaur",
    type: "Grass/Poison",
    evolved: true,
    weight: 13.0,
    color: "Green",
    image: "https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png",
    id: 30,
  },
  {
    name: "Venusaur",
    type: "Grass/Poison",
    evolved: true,
    weight: 100.0,
    color: "Green",
    image:
      "https://archives.bulbagarden.net/media/upload/6/6b/0003Venusaur.png",
    id: 2,
  },
];

function App() {
  const [PokemonId, setPokemonId] = useState(0);

  const evolvePokemon = () => {
    if (PokemonId < pokemons.length - 1) {
      setPokemonId((Id) => Id + 1);
    }
  };

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard
          key={pokemons.id}
          pokemon={pokemons[PokemonId]}
          evolvePokemon={evolvePokemon}
        />
      </FlexContainer>
    </>
  );
}

export default App;
