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

/***/ "./modules/comment.js":
/*!****************************!*\
  !*** ./modules/comment.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./modules/load.js\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n\r\n\r\n\r\nconst commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/comments';\r\n\r\nconst popUpMenu = () => {\r\n  const modal = document.getElementById('modal');\r\n\r\n  _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((pokemon) => {\r\n    const commentBtn = document.getElementById(`comment${pokemon.name}`);\r\n    commentBtn.addEventListener('click', async () => {\r\n      const req = new Request(`${commentApi}?item_id=${pokemon.name}`);\r\n      const res = await fetch(req);\r\n      let comments = await res.json();\r\n      if (comments.hasOwnProperty('error')) {\r\n        comments = [];\r\n      }\r\n      modal.style.display = 'block';\r\n      modal.innerHTML = `\r\n      <img src=\"${_load_js__WEBPACK_IMPORTED_MODULE_0__.pokemonApi + pokemon.image}\" alt=\"${pokemon.name}\">\r\n        <button id=\"cancel-btn\">&times;</button>\r\n        <div id=\"body\">\r\n          <div id=\"details\">\r\n            <h2 id=\"pokemon-name\">${pokemon.name}</h2>\r\n            <ul id=\"pokemon-description\">\r\n              <li>Power1: Titanum</li>\r\n              <li>Power2: 400</li>\r\n              <li>Power3: 10000</li>\r\n              <li>Power4: 100000</li>\r\n            </ul>\r\n          </div>\r\n          <div id=\"comment\">\r\n            <h3 id=\"commentCount\">Comments(${comments.length})</h3>\r\n            <div style=\"display: flex; width: 100%; justify-content: space-between;\">\r\n              <ul id=\"dates\" style=\"text-align: start;\">\r\n\r\n              </ul style=\"text-align: start;\">\r\n              <ul id=\"usernames\" style=\"text-align: start;\">\r\n\r\n              </ul style=\"text-align: start;\">\r\n              <ul id=\"comments\" style=\"text-align: start;\">\r\n\r\n              </ul style=\"text-align: start;\">\r\n            </div>\r\n          </div>\r\n          <div id=\"form\">\r\n            <h3>Add a comment</h3>\r\n            <input type=\"text\" name=\"username\" id=\"username\" placeholder=\"Your Name\"><br>\r\n            <textarea name=\"insight\" id=\"insight\" placeholder=\"Your Insights\" cols=\"30\" rows=\"5\"></textarea><br>\r\n            <button id=\"comment-btn\">comment</button>\r\n          </div>\r\n        </div>\r\n      `;\r\n\r\n      const dateContainer = document.getElementById('dates');\r\n      const usernameContainer = document.getElementById('usernames');\r\n      const insightContainer = document.getElementById('comments');\r\n      comments.forEach((comment) => {\r\n        const date = document.createElement('li');\r\n        date.innerHTML = comment.creation_date;\r\n        dateContainer.appendChild(date);\r\n        const username = document.createElement('li');\r\n        username.innerHTML = comment.username;\r\n        usernameContainer.appendChild(username);\r\n        const insight = document.createElement('li');\r\n        insight.innerHTML = comment.comment;\r\n        insightContainer.appendChild(insight);\r\n      });\r\n\r\n      const cancel = document.getElementById('cancel-btn');\r\n      cancel.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n      });\r\n      document.addEventListener('mouseup', (e) => {\r\n        if (!modal.contains(e.target)) {\r\n          modal.style.display = 'none';\r\n        }\r\n      });\r\n      const comment = document.getElementById('comment-btn');\r\n      comment.addEventListener('click', async () => {\r\n        const username = document.getElementById('username');\r\n        const insight = document.getElementById('insight');\r\n        const data = {\r\n          method: 'POST',\r\n          body: JSON.stringify({\r\n            item_id: pokemon.name,\r\n            username: username.value,\r\n            comment: insight.value,\r\n          }),\r\n          headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n          },\r\n        };\r\n        const req = new Request(commentApi);\r\n        await fetch(req, data);\r\n\r\n        const newUsername = document.createElement('li');\r\n        newUsername.innerHTML = username.value;\r\n        usernameContainer.appendChild(newUsername);\r\n        const newInsight = document.createElement('li');\r\n        newInsight.innerHTML = insight.value;\r\n        insightContainer.appendChild(newInsight);\r\n\r\n        username.value = '';\r\n        insight.value = '';\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUpMenu);\n\n//# sourceURL=webpack://pokeverse/./modules/comment.js?");

/***/ }),

/***/ "./modules/count.js":
/*!**************************!*\
  !*** ./modules/count.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCount\": () => (/* binding */ commentCount),\n/* harmony export */   \"pokemonCount\": () => (/* binding */ pokemonCount)\n/* harmony export */ });\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n\r\n\r\nconst pokemonCount = () => {\r\n  const total = document.querySelector('.nav-content');\r\n  const mobileTotal = document.querySelector('.mobile-nav-menu');\r\n  total.innerHTML += `\r\n        <li id=\"pokemons\" style=\"text-decoration: underline; font-weight: bold;\">Pokemons(${_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length})</li>\r\n        <li>Nature</li>\r\n        <li>Contest</li>`;\r\n  mobileTotal.innerHTML += `\r\n  <li id=\"mobile-pokemons\" class=\"mobile-li\" style=\"text-decoration: underline; font-weight: bold;\">Pokemons(${_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length})</li>\r\n  <li class=\"mobile-li\">Nature</li>\r\n  <li class=\"mobile-li\">Contest</li>`;\r\n  return _pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\r\n};\r\n\r\nconst commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/comments';\r\n\r\nconst commentCount = (pokemon) => {\r\n  const commentBtn = document.getElementById(`comment${pokemon}`);\r\n  commentBtn.addEventListener('click', async () => {\r\n    const req = new Request(`${commentApi}?item_id=${pokemon}`);\r\n    const res = await fetch(req);\r\n    let comments = await res.json();\r\n    if (comments.hasOwnProperty === 'error') {\r\n      comments = [];\r\n    }\r\n    document.getElementById('commentCount').innerHTML = `Comments(${comments.length})`;\r\n    return comments.length;\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://pokeverse/./modules/count.js?");

/***/ }),

/***/ "./modules/like.js":
/*!*************************!*\
  !*** ./modules/like.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"likeButton\": () => (/* binding */ likeButton)\n/* harmony export */ });\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n\r\n\r\nconst likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DYVkVDoJjOcdS6u668lb/likes';\r\n\r\nconst getLikes = async () => {\r\n  const req = new Request(likeApi);\r\n  const res = await fetch(req);\r\n  const json = await res.json();\r\n  return json;\r\n};\r\n\r\nconst postLike = async (name) => {\r\n  const data = {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: name,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  };\r\n\r\n  const req = new Request(likeApi);\r\n  await fetch(req, data);\r\n\r\n  const likes = await getLikes();\r\n  let like = likes.filter((like) => like.item_id === name);\r\n  if (like.length === 0) {\r\n    like = 0;\r\n  } else {\r\n    like = like[0].likes;\r\n  }\r\n  const liked = document.getElementById(`getLikes${name}`);\r\n  liked.innerHTML = `${like} likes`;\r\n};\r\n\r\nconst likeButton = () => {\r\n  for (let i = 0; i < _pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\r\n    const love = document.getElementById(`postLike${_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name}`);\r\n    love.addEventListener('click', () => {\r\n      postLike(_pokemons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name);\r\n    });\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://pokeverse/./modules/like.js?");

/***/ }),

/***/ "./modules/load.js":
/*!*************************!*\
  !*** ./modules/load.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load),\n/* harmony export */   \"pokemonApi\": () => (/* binding */ pokemonApi)\n/* harmony export */ });\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.js */ \"./modules/like.js\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.js */ \"./modules/pokemons.js\");\n\r\n\r\n\r\nconst pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';\r\n\r\nconst load = async () => {\r\n  const likes = await (0,_like_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\r\n  for (let i = 0; i < _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; i += 1) {\r\n    let like = likes.filter((like) => like.item_id === _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name);\r\n    let heart = 'fa-regular';\r\n    if (like.length === 0) {\r\n      like = '0 like';\r\n    } else {\r\n      like = like[0].likes;\r\n      heart = 'fa-solid';\r\n      if (like === 1) {\r\n        like = `${like} like`;\r\n      } else {\r\n        like = `${like} likes`;\r\n      }\r\n    }\r\n    const container = document.getElementById('container');\r\n    container.innerHTML += `\r\n    <div id=\"card\">\r\n        <img id=\"image\"\r\n            src=${pokemonApi + _pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].image}\r\n            alt=${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}>\r\n        <div id=\"title\">\r\n            <div style=\"font-weight: bold; font-size: 20px;\">${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}</div>\r\n            <div><i style=\"color: red;\" id=\"postLike${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}\" class=\"${heart} fa-heart\"></i><div style=\"padding-top: 5px;\" id=\"getLikes${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}\">${like}</div></div>\r\n        </div>\r\n        <button id=\"comment${_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].name}\">comment</button>\r\n    </div>`;\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://pokeverse/./modules/load.js?");

/***/ }),

/***/ "./modules/pokemons.js":
/*!*****************************!*\
  !*** ./modules/pokemons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokemons = [{\r\n  name: 'Charmander',\r\n  image: '4.svg',\r\n}, {\r\n  name: 'Charmeleon',\r\n  image: '5.svg',\r\n}, {\r\n  name: 'Charizard',\r\n  image: '6.svg',\r\n}, {\r\n  name: 'Squirtle',\r\n  image: '7.svg',\r\n}, {\r\n  name: 'Wartortle',\r\n  image: '8.svg',\r\n}, {\r\n  name: 'Blastoise',\r\n  image: '9.svg',\r\n}, {\r\n  name: 'Bulbasaur',\r\n  image: '1.svg',\r\n}, {\r\n  name: 'Ivysaur',\r\n  image: '2.svg',\r\n}, {\r\n  name: 'Venusaur',\r\n  image: '3.svg',\r\n}];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemons);\n\n//# sourceURL=webpack://pokeverse/./modules/pokemons.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Gill Sans', Courier, monospace;\\r\\n  background: linear-gradient(to top right, #00cffd, #fff);\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 250px;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#card {\\r\\n  width: 210px;\\r\\n  padding: 0 10px 5px 10px;\\r\\n  margin: 15px;\\r\\n  text-align: center;\\r\\n  background-color: azure;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n#card:hover {\\r\\n  background: linear-gradient(to top left, #000, #d4edfa, #0069fd);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#image {\\r\\n  width: 150px;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\ni {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  margin: 5px 0 3px 0;\\r\\n  cursor: pointer;\\r\\n  border: 2px solid black;\\r\\n  background: none;\\r\\n  font: inherit;\\r\\n  font-weight: bold;\\r\\n  outline: inherit;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  transform: scale(1.1);\\r\\n  color: white;\\r\\n  border: 2px double transparent;\\r\\n  background-image: linear-gradient(#6305b0, #090916), radial-gradient(circle at left top, #f00, #fff000);\\r\\n  background-origin: border-box;\\r\\n  background-clip: padding-box, border-box;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  margin: 15px 0 15px 0;\\r\\n  padding: 15px;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.bar {\\r\\n  height: 3px;\\r\\n  width: 40px;\\r\\n  margin: 5px 0 5px 0;\\r\\n  border: 1px solid;\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\n.bars {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 35px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.mobile-nav-menu {\\r\\n  display: flex;\\r\\n  gap: 50px;\\r\\n  padding: 20px;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.mobile-menu {\\r\\n  display: none;\\r\\n  justify-content: space-between;\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.cancel {\\r\\n  font-size: 40px;\\r\\n  font-weight: 600;\\r\\n  padding: 5px 5px 0 0;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-ul {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 5px 15px 5px 15px;\\r\\n  border: 2px solid;\\r\\n}\\r\\n\\r\\n.nav-content {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  gap: 40px;\\r\\n}\\r\\n\\r\\n.nav-content-li {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.brand {\\r\\n  margin: 0;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.pokemon-description {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n}\\r\\n\\r\\n#modal-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#modal {\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  top: 10px;\\r\\n  background-color: antiquewhite;\\r\\n  padding: 10px 20px 5px 20px;\\r\\n  text-align: center;\\r\\n  overflow-y: auto;\\r\\n  height: 97%;\\r\\n}\\r\\n\\r\\n#modal img {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\n#cancel-btn {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n#pokemon-description {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n  width: 400px;\\r\\n}\\r\\n\\r\\n#pokemon-description li {\\r\\n  width: 150px;\\r\\n  text-align: start;\\r\\n}\\r\\n\\r\\n#modal #body #details {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  .bars {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .nav-content-li {\\r\\n    display: flex;\\r\\n  }\\r\\n\\r\\n  .mobile-nav-menu {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .nav-ul {\\r\\n    display: flex;\\r\\n    padding: 10px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokeverse/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/load.js */ \"./modules/load.js\");\n/* harmony import */ var _modules_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/count.js */ \"./modules/count.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/like.js */ \"./modules/like.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/comment.js */ \"./modules/comment.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst brandContainer = document.querySelector(\".nav-brand\");\r\nconst brandImage = __webpack_require__(/*! ../Assets/pokemon.png */ \"./Assets/pokemon.png\");\r\nconst desktopNav = document.querySelector(\".nav-ul\");\r\nconst mobileContainer = document.querySelector(\".mobile-menu\");\r\nconst cancelBtn = document.querySelector(\".cancel\");\r\nconst hamburger = document.querySelector(\".bars\");\r\nconst imageContainer = document.createElement(\"img\");\r\nimageContainer.src = brandImage;\r\nbrandContainer.appendChild(brandImage);\r\nhamburger.addEventListener(\"click\", () => {\r\n  mobileContainer.style.display = \"flex\";\r\n  desktopNav.style.display = \"none\";\r\n});\r\ncancelBtn.addEventListener(\"click\", () => {\r\n  mobileContainer.style.display = \"none\";\r\n  desktopNav.style.display = \"flex\";\r\n});\r\n\r\nawait (0,_modules_load_js__WEBPACK_IMPORTED_MODULE_0__.load)();\r\n(0,_modules_count_js__WEBPACK_IMPORTED_MODULE_1__.pokemonCount)();\r\n(0,_modules_like_js__WEBPACK_IMPORTED_MODULE_2__.likeButton)();\r\n(0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://pokeverse/./src/index.js?");

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