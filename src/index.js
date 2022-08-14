import { load } from '../modules/load.js';
import { pokemonCount } from '../modules/count.js';
import { likeButton } from '../modules/like.js';
import './style.css';
import modal from '../modules/modal.js';
import mobile from '../modules/mobile.js';
import routes from '../modules/routes.js';
import about from '../modules/about.js';

await load();
mobile();
pokemonCount();
likeButton();
modal();
routes();
about();