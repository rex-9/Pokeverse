/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/about.js":
/*!**************************!*\
  !*** ./modules/about.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n  const aboutPage = document.getElementById('about');\n  const child = document.createElement('div');\n  child.innerHTML = `<div id=\"bio\"><h1>Present to you by Rex!</h1><br>The friendly spiritual developer, who loves mindfulness, has a passion for\n    contributing to the mindful communities.<br><br>The projects I've built are beautifully displayed in my <a href=\"https://htetnaing0814.github.io/Portfolio/\">portfolio</a>\n    .<br><br>Anyone can kindly find my resume <a href=\"https://docs.google.com/document/d/1DgeSJuHl44cCu-xupH8gZ3ZD3rpcuY4I9R118GC0a8Q\"> here</a>.</div>\n  <div id=\"footer\">\n    <div style=\"padding-top: 9px;\"><a href=\"https://github.com/HtetNaing0814\"><i\n          class=\"fa-brands fa-github fa-2x\"></i></a></div>\n    <div style=\"padding-top: 9px;\"><a href=\"https://www.linkedin.com/in/htetnaing0814/\"><i\n          class=\"fa-brands fa-linkedin fa-2x\"></i></a></div>\n    <div class=\"whatsmail\"><i class=\"fa-brands fa-whatsapp fa-2x\"></i>\n      <p>: +959443112251</p>\n    </div>\n    <div class=\"whatsmail\"><i class=\"fa-solid fa-envelope fa-2x\"></i>\n      <p>: htetnaing0814@gmail.com</p>\n    </div>\n  </div>`;\n  aboutPage.appendChild(child);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://pokeverse/./modules/about.js?");

/***/ }),

/***/ "./modules/count.js":
/*!**************************!*\
  !*** ./modules/count.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCount\": () => (/* binding */ commentCount),\n/* harmony export */   \"pokemonCount\": () => (/* binding */ pokemonCount)\n/* harmony export */ });\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n\n\nconst pokemonCount = () => {\n  const nav = document.querySelector('.nav');\n  const mobileNav = document.querySelector('.mobile-nav');\n  nav.innerHTML += `\n        <li class=\"pokemons\">Pokemons(${_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length})</li>\n        <li class=\"about\">About</li>`;\n  mobileNav.innerHTML += `\n  <li class=\"mobile-pokemons\">Pokemons(${_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length})</li>\n  <li class=\"mobile-about\">About</li>`;\n  return _pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n};\n\nconst commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ia58UmcsbOOzLVcpoayr/comments';\n\nconst commentCount = (pokemon) => {\n  const commentBtn = document.getElementById(`comment${pokemon}`);\n  commentBtn.addEventListener('click', async () => {\n    const req = new Request(`${commentApi}?item_id=${pokemon}`);\n    const res = await fetch(req);\n    let comments = await res.json();\n    if (comments.hasOwnProperty === 'error') {\n      comments = [];\n    }\n    document.getElementById('commentCount').innerHTML = `Comments(${comments.length})`;\n    return comments.length;\n  });\n};\n\n\n\n//# sourceURL=webpack://pokeverse/./modules/count.js?");

/***/ }),

/***/ "./modules/like.js":
/*!*************************!*\
  !*** ./modules/like.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"likeButton\": () => (/* binding */ likeButton)\n/* harmony export */ });\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n\n\nconst likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ia58UmcsbOOzLVcpoayr/likes';\n\nconst getLikes = async () => {\n  const req = new Request(likeApi);\n  const res = await fetch(req);\n  const json = await res.json();\n  return json;\n};\n\nconst postLike = async (name) => {\n  const data = {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: name,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  };\n\n  const req = new Request(likeApi);\n  await fetch(req, data);\n\n  const likes = await getLikes();\n  let like = likes.filter((like) => like.item_id === name);\n  if (like.length === 0) {\n    like = '0 like';\n  } else {\n    like = like[0].likes;\n    if (like === 1) {\n      like = `${like} like`;\n    } else {\n      like = `${like} likes`;\n    }\n  }\n  const liked = document.getElementById(`getLikes${name}`);\n  liked.innerHTML = `${like}`;\n  const title = document.getElementById(`postLike${name}`);\n  title.classList.remove('fa-regular');\n  title.classList.add('fa-solid');\n};\n\nconst likeButton = () => {\n  for (let i = 0; i < _pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    const love = document.getElementById(`postLike${_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name}`);\n    love.addEventListener('click', () => {\n      postLike(_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name);\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://pokeverse/./modules/like.js?");

/***/ }),

/***/ "./modules/load.js":
/*!*************************!*\
  !*** ./modules/load.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load),\n/* harmony export */   \"pokemonApi\": () => (/* binding */ pokemonApi)\n/* harmony export */ });\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.js */ \"./modules/like.js\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n\n\n\nconst pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';\n\nconst load = async () => {\n  const likes = await (0,_like_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  for (let i = 0; i < _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; i += 1) {\n    let like = likes.filter((like) => like.item_id === _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name);\n    let heart = 'fa-regular';\n    if (like.length === 0) {\n      like = '0 like';\n    } else {\n      like = like[0].likes;\n      heart = 'fa-solid';\n      if (like === 1) {\n        like = `${like} like`;\n      } else {\n        like = `${like} likes`;\n      }\n    }\n    const container = document.getElementById('pokemons-container');\n    container.innerHTML += `\n    <div id=\"card\">\n        <img id=\"image\"\n            src=${pokemonApi + _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].image}\n            alt=${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}>\n        <div id=\"content\">\n          <div id=\"title\">\n            <div style=\"font-weight: bold; font-size: 20px;\">${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}</div>\n            <div><i style=\"color: red;\" id=\"postLike${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}\" class=\"${heart} fa-heart\"></i><div style=\"padding-top: 5px;\" id=\"getLikes${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}\">${like}</div></div>\n          </div>\n          <button id=\"comment${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}\">comment</button>\n        </div>\n    </div>`;\n  }\n};\n\n\n\n//# sourceURL=webpack://pokeverse/./modules/load.js?");

/***/ }),

/***/ "./modules/mobile.js":
/*!***************************!*\
  !*** ./modules/mobile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Assets_pokemon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/pokemon.png */ \"./Assets/pokemon.png\");\n\n\nconst mobile = () => {\n  const brandContainer = document.querySelector('.logo-container');\n  const desktopNav = document.querySelector('.nav-ul');\n  const mobileContainer = document.querySelector('.mobile-menu');\n  const cancelBtn = document.querySelector('.cancel');\n  const hamburger = document.querySelector('.menu');\n  const logo = new Image();\n  logo.src = _Assets_pokemon_png__WEBPACK_IMPORTED_MODULE_0__;\n  logo.classList.add('logo');\n  brandContainer.appendChild(logo);\n  hamburger.addEventListener('click', () => {\n    mobileContainer.style.display = 'flex';\n    desktopNav.style.display = 'none';\n  });\n  cancelBtn.addEventListener('click', () => {\n    mobileContainer.style.display = 'none';\n    desktopNav.style.display = 'flex';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobile);\n\n\n//# sourceURL=webpack://pokeverse/./modules/mobile.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./modules/load.js\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n/* eslint-disable no-prototype-builtins */\n\n\n\nconst commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ia58UmcsbOOzLVcpoayr/comments';\nconst pokeApi = 'https://pokeapi.co/api/v2/pokemon/';\n\nconst modal = () => {\n  const modal = document.getElementById('modal');\n\n  _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((pokemon) => {\n    const commentBtn = document.getElementById(`comment${pokemon.name}`);\n    commentBtn.addEventListener('click', async () => {\n      const pokeReq = new Request(`${pokeApi}${pokemon.name.toLowerCase()}`);\n      const pokeRes = await fetch(pokeReq);\n      const pokeData = await pokeRes.json();\n\n      const req = new Request(`${commentApi}?item_id=${pokemon.name}`);\n      const res = await fetch(req);\n      let comments = await res.json();\n      if (comments.hasOwnProperty('error')) {\n        comments = [];\n      }\n      modal.style.display = 'block';\n      modal.innerHTML = `\n      <img src=\"${_load_js__WEBPACK_IMPORTED_MODULE_0__.pokemonApi + pokemon.image}\" alt=\"${pokemon.name}\">\n        <button id=\"cancel-btn\">&times;</button>\n        <div id=\"body\">\n          <div id=\"details\">\n            <h1 id=\"name\">${pokemon.name}</h1>\n            <ul id=\"abilities\">\n\n            </ul>\n          </div>\n          <div id=\"comment\">\n            <h3 id=\"commentCount\">Comments(${comments.length})</h3>\n            <div style=\"display: flex; width: 100%; justify-content: space-between;\">\n              <ul id=\"dates\" style=\"text-align: start;\">\n\n              </ul style=\"text-align: start;\">\n              <ul id=\"usernames\" style=\"text-align: start;\">\n\n              </ul style=\"text-align: start;\">\n              <ul id=\"comments\" style=\"text-align: start;\">\n\n              </ul style=\"text-align: start;\">\n            </div>\n          </div>\n          <div id=\"form\">\n            <h3>Add a comment</h3>\n            <input required type=\"text\" name=\"username\" id=\"username\" placeholder=\"Your Name\"><br>\n            <textarea required name=\"insight\" id=\"insight\" placeholder=\"Your Insights\" cols=\"30\" rows=\"5\"></textarea><br>\n            <button id=\"comment-btn\">comment</button>\n          </div>\n        </div>\n      `;\n\n      const abilities = document.getElementById('abilities');\n      pokeData.abilities.forEach((ability) => {\n        const move = document.createElement('li');\n        move.innerHTML = ability.ability.name;\n        abilities.appendChild(move);\n      });\n\n      const dateContainer = document.getElementById('dates');\n      const usernameContainer = document.getElementById('usernames');\n      const insightContainer = document.getElementById('comments');\n      comments.forEach((comment) => {\n        const date = document.createElement('li');\n        date.innerHTML = comment.creation_date;\n        dateContainer.appendChild(date);\n        const username = document.createElement('li');\n        username.innerHTML = comment.username;\n        usernameContainer.appendChild(username);\n        const insight = document.createElement('li');\n        insight.innerHTML = comment.comment;\n        insightContainer.appendChild(insight);\n      });\n\n      const cancel = document.getElementById('cancel-btn');\n      cancel.addEventListener('click', () => {\n        modal.style.display = 'none';\n      });\n      document.addEventListener('mouseup', (e) => {\n        if (!modal.contains(e.target)) {\n          modal.style.display = 'none';\n        }\n      });\n      const comment = document.getElementById('comment-btn');\n\n      const username = document.getElementById('username');\n      const insight = document.getElementById('insight');\n      comment.addEventListener('click', async () => {\n        const existingError = document.getElementById('error');\n        if (username.value === '' || insight.value === '') {\n          const form = document.getElementById('form');\n          if (existingError === null) {\n            const error = document.createElement('p');\n            error.id = 'error';\n            error.style.cssText = 'color: red; font-weight: bold;';\n            error.innerHTML = 'Form should not be empty!';\n            form.appendChild(error);\n          }\n        } else {\n          const data = {\n            method: 'POST',\n            body: JSON.stringify({\n              item_id: pokemon.name,\n              username: username.value,\n              comment: insight.value,\n            }),\n            headers: {\n              'Content-type': 'application/json; charset=UTF-8',\n            },\n          };\n          const req = new Request(commentApi);\n          await fetch(req, data);\n\n          const newUsername = document.createElement('li');\n          newUsername.innerHTML = username.value;\n          usernameContainer.appendChild(newUsername);\n          const newInsight = document.createElement('li');\n          newInsight.innerHTML = insight.value;\n          insightContainer.appendChild(newInsight);\n\n          username.value = '';\n          insight.value = '';\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://pokeverse/./modules/modal.js?");

/***/ }),

/***/ "./modules/pokemons.js":
/*!*****************************!*\
  !*** ./modules/pokemons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokemons = [{\n  name: 'Charmander',\n  image: '4.svg',\n}, {\n  name: 'Charmeleon',\n  image: '5.svg',\n}, {\n  name: 'Charizard',\n  image: '6.svg',\n}, {\n  name: 'Squirtle',\n  image: '7.svg',\n}, {\n  name: 'Wartortle',\n  image: '8.svg',\n}, {\n  name: 'Blastoise',\n  image: '9.svg',\n}, {\n  name: 'Bulbasaur',\n  image: '1.svg',\n}, {\n  name: 'Ivysaur',\n  image: '2.svg',\n}, {\n  name: 'Venusaur',\n  image: '3.svg',\n}, {\n  name: 'Onix',\n  image: '95.svg',\n}, {\n  name: 'Snorlax',\n  image: '143.svg',\n}, {\n  name: 'Gyarados',\n  image: '130.svg',\n}, {\n  name: 'Dratini',\n  image: '147.svg',\n}, {\n  name: 'Dragonair',\n  image: '148.svg',\n}, {\n  name: 'Dragonite',\n  image: '149.svg',\n}, {\n  name: 'Mew',\n  image: '151.svg',\n}, {\n  name: 'MewTwo',\n  image: '150.svg',\n}, {\n  name: 'Chikorita',\n  image: '152.svg',\n}, {\n  name: 'Bayleef',\n  image: '153.svg',\n}, {\n  name: 'Meganium',\n  image: '154.svg',\n}, {\n  name: 'Cyndaquil',\n  image: '155.svg',\n}, {\n  name: 'Quilava',\n  image: '156.svg',\n}, {\n  name: 'Typhlosion',\n  image: '157.svg',\n}, {\n  name: 'Totodile',\n  image: '158.svg',\n}, {\n  name: 'Croconaw',\n  image: '159.svg',\n}, {\n  name: 'Feraligatr',\n  image: '160.svg',\n}, {\n  name: 'Pikachu',\n  image: '25.svg',\n}, {\n  name: 'Raichu',\n  image: '26.svg',\n}, {\n  name: 'Chimchar',\n  image: '390.svg',\n}, {\n  name: 'Monferno',\n  image: '391.svg',\n}, {\n  name: 'Infernape',\n  image: '392.svg',\n}, {\n  name: 'Piplup',\n  image: '393.svg',\n}, {\n  name: 'Prinplup',\n  image: '394.svg',\n}, {\n  name: 'Empoleon',\n  image: '395.svg',\n}, {\n  name: 'Luxio',\n  image: '404.svg',\n}, {\n  name: 'Luxray',\n  image: '405.svg',\n}, {\n  name: 'Riolu',\n  image: '447.svg',\n}, {\n  name: 'Lucario',\n  image: '448.svg',\n}, {\n  name: 'Gible',\n  image: '443.svg',\n}, {\n  name: 'Gabite',\n  image: '444.svg',\n}, {\n  name: 'Garchomp',\n  image: '445.svg',\n}, {\n  name: 'Eevee',\n  image: '133.svg',\n}, {\n  name: 'Vaporeon',\n  image: '134.svg',\n}, {\n  name: 'Jolteon',\n  image: '135.svg',\n}, {\n  name: 'Flareon',\n  image: '136.svg',\n}];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemons);\n\n//# sourceURL=webpack://pokeverse/./modules/pokemons.js?");

/***/ }),

/***/ "./modules/routes.js":
/*!***************************!*\
  !*** ./modules/routes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst routes = () => {\n  const pokemonsPage = document.getElementById('pokemons-container');\n  const aboutPage = document.getElementById('about');\n\n  const count = document.querySelector('.pokemons');\n  const about = document.querySelector('.about');\n  count.addEventListener('click', () => {\n    pokemonsPage.style.display = 'flex';\n    aboutPage.style.display = 'none';\n  });\n  about.addEventListener('click', () => {\n    pokemonsPage.style.display = 'none';\n    aboutPage.style.display = 'block';\n  });\n\n  const mobileCount = document.querySelector('.mobile-pokemons');\n  const mobileAbout = document.querySelector('.mobile-about');\n  mobileCount.addEventListener('click', () => {\n    pokemonsPage.style.display = 'flex';\n    aboutPage.style.display = 'none';\n  });\n  mobileAbout.addEventListener('click', () => {\n    pokemonsPage.style.display = 'none';\n    aboutPage.style.display = 'block';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://pokeverse/./modules/routes.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Gill Sans\\\", Courier, monospace;\\r\\n  background: linear-gradient(to top right, #00cffd, #fff);\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 250px;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n#pokemons-container {\\r\\n  display: flex;\\r\\n\\r\\n  /* display: none; */\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#about {\\r\\n  display: none;\\r\\n\\r\\n  /* display: block; */\\r\\n  height: 83vh;\\r\\n}\\r\\n\\r\\n#about #footer {\\r\\n  width: 100%;\\r\\n  position: absolute;\\r\\n  bottom: 100px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#about #bio {\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n  padding: 100px;\\r\\n  line-height: 20px;\\r\\n}\\r\\n\\r\\n#about #footer a {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n.whatsmail {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n#card {\\r\\n  width: 210px;\\r\\n  margin: 15px;\\r\\n  text-align: center;\\r\\n  background-color: azure;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n#card:hover {\\r\\n  background: linear-gradient(to top left, #000, #d4edfa, #0069fd);\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n#image {\\r\\n  width: 150px;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n#content {\\r\\n  padding: 10px 10px 5px 10px;\\r\\n  border-radius: 0 0 10px 10px;\\r\\n  background-color: #1d1f26;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\ni {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ni:hover {\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  margin: 5px 0 3px 0;\\r\\n  cursor: pointer;\\r\\n  border: 2px solid white;\\r\\n  color: white;\\r\\n  background: none;\\r\\n  font: inherit;\\r\\n  font-weight: bold;\\r\\n  outline: inherit;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  transform: scale(1.1);\\r\\n  color: white;\\r\\n  border: 2px double transparent;\\r\\n  background-image:\\r\\n    linear-gradient(#6305b0, #090916),\\r\\n    radial-gradient(circle at left top, #f00, #fff000);\\r\\n  background-origin: border-box;\\r\\n  background-clip: padding-box, border-box;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  margin: 15px 0 15px 0;\\r\\n  padding: 15px;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.bar {\\r\\n  width: 40px;\\r\\n  margin: 0 0 8px 0;\\r\\n  border: 3px solid;\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 35px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.mobile-nav {\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  padding: 20px 0 20px 50px;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.mobile-menu {\\r\\n  display: none;\\r\\n  justify-content: space-between;\\r\\n  background-color: rgba(255, 255, 255, 0.5);\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.pokemons,\\r\\n.about,\\r\\n.mobile-pokemons,\\r\\n.mobile-about {\\r\\n  text-decoration: underline;\\r\\n  font-weight: bold;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.cancel {\\r\\n  font-size: 80px;\\r\\n  font-weight: 600;\\r\\n  padding: 0 20px 0 0;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-ul {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 5px 15px 5px 15px;\\r\\n  border: 2px solid;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  font-size: 18px;\\r\\n  width: 500px;\\r\\n}\\r\\n\\r\\n.nav-content-li {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.brand {\\r\\n  margin: 0;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n#modal-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#modal {\\r\\n  display: none;\\r\\n  background-image: linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet);\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  top: 80px;\\r\\n  color: black;\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  overflow: auto;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n#modal img {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\n#cancel-btn {\\r\\n  float: right;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n#modal #body {\\r\\n  color: white;\\r\\n  background-color: #1d1f26;\\r\\n  padding: 0 20px 10px 20px;\\r\\n}\\r\\n\\r\\n#abilities {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n  width: 400px;\\r\\n}\\r\\n\\r\\n#abilities li {\\r\\n  width: 150px;\\r\\n  text-align: start;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  height: 60px;\\r\\n  width: 130px;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n#modal #body #details {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  .menu {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .nav-content-li {\\r\\n    display: flex;\\r\\n  }\\r\\n\\r\\n  .mobile-nav-menu {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .nav-ul {\\r\\n    display: flex;\\r\\n    padding: 0 10px 0 10px;\\r\\n  }\\r\\n\\r\\n  #modal {\\r\\n    display: none;\\r\\n    justify-content: center;\\r\\n    position: fixed;\\r\\n    top: 10px;\\r\\n    border-radius: 10px;\\r\\n    background-color: white;\\r\\n    color: black;\\r\\n    padding-top: 25px;\\r\\n    text-align: center;\\r\\n    overflow-y: auto;\\r\\n    z-index: 10;\\r\\n  }\\r\\n\\r\\n  #about #footer {\\r\\n    padding: 5px 0 5px 0;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-around;\\r\\n    background-color: rgba(255, 255, 255, 0.8);\\r\\n    border-bottom: 0;\\r\\n  }\\r\\n\\r\\n  #about #footer a {\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    border-bottom: 0;\\r\\n  }\\r\\n\\r\\n  .whatsmail {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    border-bottom: 0;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokeverse/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pokeverse/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pokeverse/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokeverse/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pokeverse/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokeverse/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokeverse/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokeverse/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokeverse/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokeverse/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/load.js */ \"./modules/load.js\");\n/* harmony import */ var _modules_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/count.js */ \"./modules/count.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/like.js */ \"./modules/like.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/mobile.js */ \"./modules/mobile.js\");\n/* harmony import */ var _modules_routes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/routes.js */ \"./modules/routes.js\");\n/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/about.js */ \"./modules/about.js\");\n\n\n\n\n\n\n\n\n\nawait (0,_modules_load_js__WEBPACK_IMPORTED_MODULE_0__.load)();\n(0,_modules_mobile_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_count_js__WEBPACK_IMPORTED_MODULE_1__.pokemonCount)();\n(0,_modules_like_js__WEBPACK_IMPORTED_MODULE_2__.likeButton)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_routes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_about_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://pokeverse/./src/index.js?");

/***/ }),

/***/ "./Assets/pokemon.png":
/*!****************************!*\
  !*** ./Assets/pokemon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"456eda0b26ebbb2945d6.png\";\n\n//# sourceURL=webpack://pokeverse/./Assets/pokemon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			if(queue) queue.moduleId = module.id;
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			promise.moduleId = module.id;
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;