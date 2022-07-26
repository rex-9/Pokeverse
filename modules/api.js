import {
    getLikes
} from './like.js';
import pokemons from './pokemons.js';

const pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const load = async () => {
    const likes = await getLikes();
    const container = document.getElementById('container');
    for (let i = 0; i < pokemons.length; i += 1) {
        let like = likes.filter(like => like.item_id === pokemons[i].name);
        if (like.length === 0) {
            like = 0;
        } else {
            like = like[0].likes;
        }
        container.innerHTML += `
    <div id="card">
        <img id="image"
            src=${pokemonApi + pokemons[i].image}
            alt=${pokemons[i].name}>
        <div id="title">
            <p>${pokemons[i].name}</p>
            <div><i id="like${pokemons[i].name}" class="fa-regular fa-heart"></i><br>${ like } likes</div>
        </div>
        <button>comment</button>
    </div>`;
    }
};

export default load;