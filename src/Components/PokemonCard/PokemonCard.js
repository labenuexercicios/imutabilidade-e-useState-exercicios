import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = ({ pokemon, evolvePokemon }) => {
  return (
    <Card color={pokemon.color}>
      <img src={pokemon.image} alt={`Pokemon`} />
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonType>{pokemon.type}</PokemonType>
      <p>{pokemon.weight}kg</p>

      <EvolveButton onClick={evolvePokemon}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;
