import {
  getLikes,
} from './like.js';
import pokemons from './pokemons.js';

const pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const load = async () => {
  const likes = await getLikes();
  for (let i = 0; i < pokemons.length; i += 1) {
    let like = likes.filter((like) => like.item_id === pokemons[i].name);
    let heart = 'fa-regular';
    if (like.length === 0) {
      like = '0 like';
    } else {
      like = like[0].likes;
      heart = 'fa-solid';
      if (like === 1) {
        like = `${like} like`;
      } else {
        like = `${like} likes`;
      }
    }
    const container = document.getElementById('pokemons-container');
    container.innerHTML += `
    <div id="card">
        <img id="image"
            src=${pokemonApi + pokemons[i].image}
            alt=${pokemons[i].name}>
        <div id="content">
          <div id="title">
            <div style="font-weight: bold; font-size: 20px;">${pokemons[i].name}</div>
            <div><i style="color: red;" id="postLike${pokemons[i].name}" class="${heart} fa-heart"></i><div style="padding-top: 5px;" id="getLikes${pokemons[i].name}">${like}</div></div>
          </div>
          <button id="comment${pokemons[i].name}">comment</button>
        </div>
    </div>`;
  }
};

export { load, pokemonApi };