import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState();
  const token = localStorage.getItem("token");
  const fetchPokemons = async () => {
    await axios
      .get("http://localhost:8080/api/pokemons", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setPokemons(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col max-w-full h-full relative overflow-y-hidden">
      <h1 className="ml-4 text-3xl font-medium mt-2">Mes Pokemons</h1>
      <div>
        <div className="h-[calc(100vh-8rem)] w-[99%] m-4 flex flex-wrap items-start justify-evenly  rounded-tl grid-flow-col auto-cols-max gap-4 !overflow-y-scroll">
          {pokemons &&
            pokemons?.map((pokemon) => (
              <PokemonCard
                id={pokemon._id}
                numero_pokedex={pokemon.numero_pokedex}
                nom={pokemon.nom}
                image={pokemon.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
