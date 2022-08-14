const routes = () => {
  const pokemonsPage = document.getElementById('pokemons-container');
  const aboutPage = document.getElementById('about');

  const count = document.querySelector('.pokemons');
  const about = document.querySelector('.about');
  count.addEventListener('click', () => {
    pokemonsPage.style.display = 'flex';
    aboutPage.style.display = 'none';
  });
  about.addEventListener('click', () => {
    pokemonsPage.style.display = 'none';
    aboutPage.style.display = 'block';
  });

  const mobileCount = document.querySelector('.mobile-pokemons');
  const mobileAbout = document.querySelector('.mobile-about');
  mobileCount.addEventListener('click', () => {
    pokemonsPage.style.display = 'flex';
    aboutPage.style.display = 'none';
  });
  mobileAbout.addEventListener('click', () => {
    pokemonsPage.style.display = 'none';
    aboutPage.style.display = 'block';
  });
};

export default routes;