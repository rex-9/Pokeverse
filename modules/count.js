import pokemons from './pokemons.js';

const pokemonCount = () => {
  const nav = document.querySelector('.nav');
  const mobileNav = document.querySelector('.mobile-nav');
  nav.innerHTML += `
        <li class="pokemons">Pokemons(${pokemons.length})</li>
        <li class="about">About</li>`;
  mobileNav.innerHTML += `
  <li class="mobile-pokemons">Pokemons(${pokemons.length})</li>
  <li class="mobile-about">About</li>`;
  return pokemons.length;
};

const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ia58UmcsbOOzLVcpoayr/comments';

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