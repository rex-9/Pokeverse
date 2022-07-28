import { load } from '../modules/load.js';
import { pokemonCount } from '../modules/count.js';
import { likeButton } from '../modules/like.js';
import './style.css';
import popUpMenu from '../modules/popup.js';
import mobile from '../modules/mobile.js';

await load();
mobile();
pokemonCount();
likeButton();
popUpMenu();
