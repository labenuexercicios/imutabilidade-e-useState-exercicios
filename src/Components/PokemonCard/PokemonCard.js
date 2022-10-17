import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = (props) => {
  const evoluirPokemon = (valor) => {
    if (valor === "Pichu"){
      props.pikachu()
    }
    else{
      props.raichu()
    }

    

    
    console.log("Cliquei no botão de evoluir");
  };

  return (
    <Card color={props.nome.color}>
      <img src={props.nome.image} alt={`Pokemon`} />
      <PokemonName>{props.nome.name}</PokemonName>
      <PokemonType>{props.nome.type}</PokemonType>
      <p>{props.nome.weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon(props.nome.name)}>Evoluir!</EvolveButton>
    </Card>

  );


};

export default PokemonCard;
