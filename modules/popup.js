import {
  pokemonApi,
} from './load.js';
import pokemons from './pokemons.js';

const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/comments';
const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

const popUpMenu = () => {
  const modal = document.getElementById('modal');

  pokemons.forEach((pokemon) => {
    const commentBtn = document.getElementById(`comment${pokemon.name}`);
    commentBtn.addEventListener('click', async () => {

      const pokeReq = new Request(`${pokeApi}${pokemon.name.toLowerCase()}`);
      const pokeRes = await fetch(pokeReq);
      let pokeData = await pokeRes.json();

      const req = new Request(`${commentApi}?item_id=${pokemon.name}`);
      const res = await fetch(req);
      let comments = await res.json();
      if (comments.hasOwnProperty('error')) {
        comments = [];
      }
      modal.style.display = 'block';
      modal.innerHTML = `
      <img src="${pokemonApi + pokemon.image}" alt="${pokemon.name}">
        <button id="cancel-btn">&times;</button>
        <div id="body">
          <div id="details">
            <h2 id="name">${pokemon.name}</h2>
            <ul id="abilities">

            </ul>
          </div>
          <div id="comment">
            <h3 id="commentCount">Comments(${comments.length})</h3>
            <div style="display: flex; width: 100%; justify-content: space-between;">
              <ul id="dates" style="text-align: start;">

              </ul style="text-align: start;">
              <ul id="usernames" style="text-align: start;">

              </ul style="text-align: start;">
              <ul id="comments" style="text-align: start;">

              </ul style="text-align: start;">
            </div>
          </div>
          <div id="form">
            <h3>Add a comment</h3>
            <input required type="text" name="username" id="username" placeholder="Your Name"><br>
            <textarea required name="insight" id="insight" placeholder="Your Insights" cols="30" rows="5"></textarea><br>
            <button id="comment-btn">comment</button>
          </div>
        </div>
      `;

      const abilities = document.getElementById('abilities')
      pokeData.abilities.forEach((ability) => {
        const move = document.createElement('li');
        move.innerHTML = ability.ability.name;
        abilities.appendChild(move);
      })

      const dateContainer = document.getElementById('dates');
      const usernameContainer = document.getElementById('usernames');
      const insightContainer = document.getElementById('comments');
      comments.forEach((comment) => {
        const date = document.createElement('li');
        date.innerHTML = comment.creation_date;
        dateContainer.appendChild(date);
        const username = document.createElement('li');
        username.innerHTML = comment.username;
        usernameContainer.appendChild(username);
        const insight = document.createElement('li');
        insight.innerHTML = comment.comment;
        insightContainer.appendChild(insight);
      });

      const cancel = document.getElementById('cancel-btn');
      cancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      document.addEventListener('mouseup', (e) => {
        if (!modal.contains(e.target)) {
          modal.style.display = 'none';
        }
      });
      const comment = document.getElementById('comment-btn');

      const username = document.getElementById('username');
      const insight = document.getElementById('insight');
      comment.addEventListener('click', async () => {
        if (username.value === '' || insight.value === '') {

          const form = document.getElementById('form');
          const error = document.createElement('p');
          error.id = 'error';
          error.style.cssText = 'color: red; font-weight: bold;';
          error.innerHTML = 'Form should not be empty!'
          form.appendChild(error)
        } else {
          const data = {
            method: 'POST',
            body: JSON.stringify({
              item_id: pokemon.name,
              username: username.value,
              comment: insight.value,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          };
          const req = new Request(commentApi);
          await fetch(req, data);

          const newUsername = document.createElement('li');
          newUsername.innerHTML = username.value;
          usernameContainer.appendChild(newUsername);
          const newInsight = document.createElement('li');
          newInsight.innerHTML = insight.value;
          insightContainer.appendChild(newInsight);

          username.value = '';
          insight.value = '';
        }

      });
    });
  });
};

export default popUpMenu;