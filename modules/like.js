import pokemons from './pokemons.js';

const invApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/likes';

const getLikes = async () => {
    const req = new Request(invApi);
    const res = await fetch(req);
    const json = await res.json();
    return json;
}

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

    const req = new Request(invApi);
    await fetch(req, data);

    const likes = await getLikes();
        let like = likes.filter(like => like.item_id === name);
        if (like.length === 0) {
            like = 0;
        } else {
            like = like[0].likes;
        }
    const liked = document.getElementById(`getLikes${name}`);
    liked.innerHTML = `${ like } likes`;
    // window.location.reload();
};

const likeButton = () => {
    for (let i = 0; i < pokemons.length; i += 1) {
        const love = document.getElementById(`postLike${pokemons[i].name}`);
        love.addEventListener('click', () => {
            postLike(pokemons[i].name);
        });
    }
};

export { likeButton, getLikes };