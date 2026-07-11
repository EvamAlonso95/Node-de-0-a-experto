import { httpClientPlugin } from "../../plugins/index.js";

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClientPlugin.get(url);

  //   const response = await fetch(url);
  //   const pokemon = await response.json();
  return pokemon.name;

  //   return fetch(url)
  //     .then((resp) => resp.json())
  //     .then(() => {
  //       throw new Error("Pokemon no existe");
  //     })
  //     .then((pokemon) => pokemon.name);

  //   fetch(url).then((response) => {
  //     response.json().then((pokemon) => {
  //       callback(pokemon.name);
  //     });
  //   });
  //   return "pokemon";
};

export { getPokemonById };
