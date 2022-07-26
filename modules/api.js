import pokemons from "./pokemons";

const pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/likes';

const love = `<i id="like" class="fa-regular fa-heart"></i>`;
const loved = `<i class="fa-solid fa-heart"></i>`;

const like = async (name) => {
    console.log(name);
    // console.log(name);
    //     const data = {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       item_id: name,
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   };

    //   const req = new Request(involvementApi);
    //   await fetch(req, data);
    //   window.location.reload();
}

const loadPokemons = () => {
    const container = document.getElementById('container');
    for (let i = 0; i < pokemons.length; i++) {
        container.innerHTML += `
    <div id="card">
        <img id="image"
            src=${ pokemonApi + pokemons[i].image }
            alt=${ pokemons[i].name }>
        <div id="title">
            <p>${ pokemons[i].name }</p>
            <div><i id="like${pokemons[i].name}" class="fa-regular fa-heart"></i><br>5 likes</div>
        </div>
        <button>comment</button>
    </div>`
    }
};

const lovePokemons = () => {
    for (let i = 0; i < pokemons.length; i++) {
        const love = document.getElementById(`like${pokemons[i].name}`);
        console.log(love);
        love.addEventListener('click', (e) => {
            // console.log('name');
            like(pokemons[i].name);
        });
    }
}

export {
    loadPokemons,
    lovePokemons
}