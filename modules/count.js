import pokemons from './pokemons.js';

const pokemonCount = () => {
  const total = document.querySelector('.nav-content');
  const mobileTotal = document.querySelector('.mobile-nav-menu');
  total.innerHTML += `
        <li id="pokemons" style="text-decoration: underline; font-weight: bold;">Pokemons(${pokemons.length})</li>
        <li>Nature</li>
        <li>Contest</li>`;
  mobileTotal.innerHTML += `
  <li class="mobile-li" style="text-decoration: underline; font-weight: bold;">Pokemons(${pokemons.length})</li>
  <li class="mobile-li">Nature</li>
  <li class="mobile-li">Contest</li>`;
  return pokemons.length;
};

export default pokemonCount;