import pokemonCount from '../modules/count.js';

document.body.innerHTML = `
<ul class="nav-content">

</ul>
`;
test('Check the pokemon count', () => {
  pokemonCount();
  const total = document.getElementById('pokemons');
  expect(total.innerHTML).toEqual('Pokemons(9)');
});
