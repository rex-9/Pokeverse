import { pokemonCount, commentCount } from '../modules/count.js';

document.body.innerHTML = `
<ul class="nav">

</ul>
<ul class="mobile-nav">

</ul>

<button id="commentCharmander"></button>
<h3 id="commentCount">Comments(3)</h3>

`;

describe('Test counting', () => {
  test('Check the pokemon count', () => {
    pokemonCount();
    const total = document.getElementById('pokemons');
    const mobileTotal = document.getElementById('mobile-pokemons');
    expect(total.innerHTML).toEqual('Pokemons(9)');
    expect(mobileTotal.innerHTML).toEqual('Pokemons(9)');
  });
  test('Check the comment count', () => {
    const count = document.createElement('h3');
    count.id = 'commentCount';
    commentCount('Charmander');
    const commentCountElement = document.getElementById('commentCount');
    expect(commentCountElement.innerHTML).toEqual('Comments(3)');
  });
});