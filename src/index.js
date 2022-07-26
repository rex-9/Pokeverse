import load from '../modules/api.js';
import pokemonCount from '../modules/count.js';
import { likeButton } from '../modules/like.js';
import './style.css';

await load();
pokemonCount();
likeButton();