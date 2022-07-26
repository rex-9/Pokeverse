import pokemons from "./pokemons";

const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/likes';

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

const love = () => {
    for (let i = 0; i < pokemons.length; i++) {
        const love = document.getElementById(`like${pokemons[i].name}`);
        love.addEventListener('click', (e) => {
            // console.log('name');
            like(pokemons[i].name);
        });
    }
}

export {
    love
}