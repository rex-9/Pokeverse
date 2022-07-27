import {
  pokemonApi,
} from './load.js';
import pokemons from './pokemons.js';

const popUpMenu = () => {
  const modal = document.getElementById('modal');

  pokemons.forEach((pokemon) => {
    const commentBtn = document.getElementById(`comment${pokemon.name}`);
    commentBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.innerHTML = `
      <img src="${pokemonApi + pokemon.image}" alt="${pokemon.name}">
        <button id="cancel-btn">&times;</button>
        <div id="body">
          <div id="details">
            <h2 id="pokemon-name">${pokemon.name}</h2>
            <ul id="pokemon-description">
              <li>Power1: Titanum</li>
              <li>Power2: 400</li>
              <li>Power3: 10000</li>
              <li>Power4: 100000</li>
            </ul>
          </div>
          <div id="comments">
            <h3>Comments(2)</h3>
            <div style="display: flex; width: 100%; justify-content: space-between;">
              <ul style="text-align: start;">
                <li>11/2/2012</li>
                <li>15/6/2018</li>
              </ul style="text-align: start;">
              <ul style="text-align: start;">
                <li>Alex:</li>
                <li>Mia:</li>
              </ul style="text-align: start;">
              <ul style="text-align: start;">
                <li>How cute!</li>
                <li>How adorable!</li>
              </ul style="text-align: start;">
            </div>
          </div>
          <div id="form">
            <h3>Add a comment</h3>
            <input type="text" name="username" id="username" placeholder="Your Name"><br>
            <textarea name="insight" id="insight" placeholder="Your Insights" cols="30" rows="5"></textarea><br>
            <button>comment</button>
          </div>
        </div>
      `;
      const cancel = document.getElementById('cancel-btn');
      cancel.addEventListener('click', () => { modal.style.display = 'none'; });
      document.addEventListener('mouseup', (e) => {
        if (!modal.contains(e.target)) {
          modal.style.display = 'none';
        }
      });
    });
  });
};

export default popUpMenu;