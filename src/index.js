import load from "../modules/api.js";
import love from "../modules/like.js";
import displayMenu from "../modules/mobileMenu.js";
import popUpMenu from "../modules/comment.js";
import "./style.css";

const logo = require("../");
const desktopNav = document.querySelector(".nav-ul");
const mobileContainer = document.querySelector(".mobile-menu");
const cancelBtn = document.querySelector(".cancel");
const hamburger = document.querySelector(".bars");
hamburger.addEventListener("click", () => {
  mobileContainer.style.display = "flex";
  desktopNav.style.display = "none";
});
cancelBtn.addEventListener("click", () => {
  mobileContainer.style.display = "none";
  desktopNav.style.display = "flex";
});

load();
love();
popUpMenu();
displayMenu();
