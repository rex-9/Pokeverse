import pokemons from './pokemons.js';

const pokemonCount = () => {
  const total = document.querySelector('.nav-content');
  const mobileTotal = document.querySelector('.mobile-nav-menu');
  total.innerHTML += `
        <li id="pokemons" style="text-decoration: underline; font-weight: bold;">Pokemons(${pokemons.length})</li>
        <li>Nature</li>
        <li>Contest</li>`;
  mobileTotal.innerHTML += `
  <li id="mobile-pokemons" style="text-decoration: underline; font-weight: bold;">Pokemons(${pokemons.length})</li>
  <li>Nature</li>
  <li>Contest</li>`;
  return pokemons.length;
};

const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/comments';

const commentCount = (pokemon) => {
  const commentBtn = document.getElementById(`comment${pokemon}`);
  commentBtn.addEventListener('click', async () => {
    const req = new Request(`${commentApi}?item_id=${pokemon}`);
    const res = await fetch(req);
    let comments = await res.json();
    if (comments.hasOwnProperty === 'error') {
      comments = [];
    }
    document.getElementById('commentCount').innerHTML = `Comments(${comments.length})`;
    return comments.length;
  });
};

export { pokemonCount, commentCount };