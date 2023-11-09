import React, { useEffect, useState } from "react";
import PokemonCardDetails from "./PokemonCardDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const fetchPokemons = async () => {
    await axios
      .get("http://localhost:8080/api/pokemons/" + id, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="flex flex-col max-w-full h-full relative overflow-y-hidden">
      <h1 className="ml-4 text-3xl font-medium mt-2">
        Caractéristique de {pokemon?.nom}
      </h1>
      <div>
        <PokemonCardDetails
          numero_pokedex={pokemon?.numero_pokedex}
          nom={pokemon?.nom}
          taille={pokemon?.taille}
          poids={pokemon?.poids}
          image={pokemon?.image}
          types={pokemon?.types}
          competences={pokemon?.competences}
        />
      </div>
    </div>
  );
};

export default PokemonDetails;
