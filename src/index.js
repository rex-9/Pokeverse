import { load } from '../modules/load.js';
import pokemonCount from '../modules/count.js';
import { likeButton } from '../modules/like.js';
import './style.css';
import popUpMenu from '../modules/comment.js';

const desktopNav = document.querySelector('.nav-ul');
const mobileContainer = document.querySelector('.mobile-menu');
const cancelBtn = document.querySelector('.cancel');
const hamburger = document.querySelector('.bars');
hamburger.addEventListener('click', () => {
  mobileContainer.style.display = 'flex';
  desktopNav.style.display = 'none';
});
cancelBtn.addEventListener('click', () => {
  mobileContainer.style.display = 'none';
  desktopNav.style.display = 'flex';
});

await load();
pokemonCount();
likeButton();
popUpMenu();
