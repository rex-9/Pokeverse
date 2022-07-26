import pokemons from './pokemons.js';

const pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const load = () => {
  const container = document.getElementById('container');
  for (let i = 0; i < pokemons.length; i += 1) {
    container.innerHTML += `
    <div id="card">
        <img id="image"
            src=${pokemonApi + pokemons[i].image}
            alt=${pokemons[i].name}>
        <div id="title">
            <p>${pokemons[i].name}</p>
            <div><i id="like${pokemons[i].name}" class="fa-regular fa-heart"></i><br>5 likes</div>
        </div>
        <button>comment</button>
    </div>`;
  }
};

export default load;