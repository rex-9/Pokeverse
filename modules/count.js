import pokemons from './pokemons.js';

const pokemonCount = () => {
  const total = document.querySelector('.nav-content');
  total.innerHTML += `
        <li id="pokemons" style="text-decoration: underline; font-weight: bold;">Pokemons(${pokemons.length})</li>
        <li>Nature</li>
        <li>Contest</li>`;
  return pokemons.length;
};

export default pokemonCount;