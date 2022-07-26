import pokemons from './pokemons.js';

const likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ia58UmcsbOOzLVcpoayr/likes';

const getLikes = async () => {
  const req = new Request(likeApi);
  const res = await fetch(req);
  const json = await res.json();
  return json;
};

const postLike = async (name) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      item_id: name,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const req = new Request(likeApi);
  await fetch(req, data);

  const likes = await getLikes();
  let like = likes.filter((like) => like.item_id === name);
  if (like.length === 0) {
    like = '0 like';
  } else {
    like = like[0].likes;
    if (like === 1) {
      like = `${like} like`;
    } else {
      like = `${like} likes`;
    }
  }
  const liked = document.getElementById(`getLikes${name}`);
  liked.innerHTML = `${like}`;
  const title = document.getElementById(`postLike${name}`);
  title.classList.remove('fa-regular');
  title.classList.add('fa-solid');
};

const likeButton = () => {
  for (let i = 0; i < pokemons.length; i += 1) {
    const love = document.getElementById(`postLike${pokemons[i].name}`);
    love.addEventListener('click', () => {
      postLike(pokemons[i].name);
    });
  }
};

export {
  likeButton,
  getLikes,
};