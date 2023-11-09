import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const PokemonCard = ({ id, numero_pokedex, nom, image }) => {
  return (
    <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img
        class="w-full h-56 object-cover object-center"
        src={"http://localhost:8080/public/" + image}
        alt="avatar"
      />
      <div class="flex items-center px-6 py-3 bg-gray-900">
        <h1 class="mx-3 text-white font-semibold text-lg">
          N° {numero_pokedex}
        </h1>
      </div>
      <div class="flex justify-between items-center py-4 px-3">
        <h1 class="text-2xl font-semibold text-gray-800">{nom}</h1>
        <Link to={"/pokemons/details/" + id}>
          <Button text={"Details"} />
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
