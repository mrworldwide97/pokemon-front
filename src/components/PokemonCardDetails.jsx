import React from "react";

const PokemonCardDetails = ({
  numero_pokedex,
  nom,
  taille,
  poids,
  image,
  types,
  competences,
}) => {
  return (
    <div class="min-h-screen grid place-items-center font-mono bg-white">
      <div class="bg-gray-900 flex rounded-md h-[30rem] shadow-lg">
        <div class="xl:flex items-center  px-4 leading-none max-w-6xl">
          <div class="flex-none ">
            <img
              src={"http://localhost:8080/public/" + image}
              alt="pic"
              class="h-72 w-56 rounded-md  object-cover transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div class="flex-col text-gray-300">
            <p class="pt-4 text-2xl font-bold text-center">{nom}</p>
            <hr class="hr-text" data-content="" />
            <div class="text-md flex justify-between px-4 my-2 mb-4">
              <span class="font-bold">Taille | {taille}</span>
              <span class="font-bold">Poids | {poids}</span>
              <span class="font-bold">N° | {numero_pokedex}</span>
            </div>

            <p class="flex text-md px-4 my-2">Compétences</p>
            <div class="text-xs flex flex-col">
              {competences?.map((comp) => (
                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  {comp.nom} | Puissance: {comp.puissance} | Precision :{" "}
                  {comp.precision} | PP-Max: {comp.pp_max}
                </button>
              ))}
            </div>
            <p class="flex text-md px-4 my-2">Types</p>
            <div class="text-xs">
              {types?.map((type) => (
                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  {type.nom}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDetails;
