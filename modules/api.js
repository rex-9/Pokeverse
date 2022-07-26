import {
    getLikes
} from './like.js';
import pokemons from './pokemons.js';

const pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const load = async () => {
    const likes = await getLikes();
    for (let i = 0; i < pokemons.length; i += 1) {
        let like = likes.filter(like => like.item_id === pokemons[i].name);
        if (like.length === 0) {
            like = 0;
        } else {
            like = like[0].likes;
        }
        if (like === 1 || like === 0) {
            like = `${ like } like`;
        } else {
            like = `${ like } likes`;
        }
        const container = document.getElementById('container');
        container.innerHTML += `
    <div id="card">
        <img id="image"
            src=${pokemonApi + pokemons[i].image}
            alt=${pokemons[i].name}>
        <div id="title">
            <p>${pokemons[i].name}</p>
            <div><i id="postLike${pokemons[i].name}" class="fa-regular fa-heart"></i><br><p id="getLikes${pokemons[i].name}">${ like }</p></div>
        </div>
        <button>comment</button>
    </div>`;
    }
};

export default load;