const search_term = document.getElementById("search_q");
const search_btn = document.getElementById("search-btn");

const getPokemonData = async (term) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${term}`;
  const response = await fetch(url);

  const pokemon = await response.json();
  debugger;

  document
    .getElementById("update_img")
    .setAttribute("src", pokemon.sprites.front_default);
  document.getElementById("update_name").innerHTML = pokemon.name;
  document.getElementById(
    "update_type"
  ).innerHTML = `${pokemon.types[0].type.name}`;
  document.getElementById("update_weight").innerHTML = `${
    pokemon.weight / 10
  }kg`;
  document.getElementById("update_height").innerHTML = `${
    pokemon.height / 10
  }m`;
};
search_btn.addEventListener("click", () => getPokemonData(search_term.value));