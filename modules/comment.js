import pokemons from "./pokemons.js";

const popUpMenu = () => {
  const commentBtn = document.querySelectorAll(".comment-btn");
  const menuContainer = document.querySelector(".modal-container");

  // for (let i = 0; i < pokemons.length; i++) {
  //   menuContainer.innerHTML = `
  //   <div class="modal-top">
  //     <div class="modal-img">
  //     <img src="${pokemons.image}" alt="">
  //     </div>
  //     <button class="cancel-btn">&times;</button>
  //   </div>
  //   <div class="modal-body">
  //     <div class="modal-details">
  //       <h2 class="pokemon-name">${pokemons.name}</h2>
  //       <ul class="pokemon-description">
  //         <li>Power1: Titanum</li>
  //         <li>Power2: 400</li>
  //         <li>Power3: 10000</li>
  //         <li>Power4: 100000</li>
  //       </ul>
  //     </div>
  //   </div>
  //   `;
  // }

  pokemons.forEach((element, i) => {
    menuContainer.innerHTML = `
    <div class="modal-top">
      <div class="modal-img">
        <img src="${pokemons.image[i]}" alt="">
      </div>
      <button class="cancel-btn">&times;</button>
    </div>
    <div class="modal-body">
      <div class="modal-details">
        <h2 class="pokemon-name">${pokemons.name[i]}</h2>
        <ul class="pokemon-description">
          <li>Power1: Titanum</li>
          <li>Power2: 400</li>
          <li>Power3: 10000</li>
          <li>Power4: 100000</li>
        </ul>
      </div>
    </div>
    `;
  });

  commentBtn.forEach((n) => {
    const cancelBtn = document.querySelector(".cancel-btn");
    n.addEventListener("click", () => {});
  });
};

export default popUpMenu;
