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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init_tab_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init-tab-navigation.js */ \"./src/modules/init-tab-navigation.js\");\n/* harmony import */ var _modules_init_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init-smooth-scroll.js */ \"./src/modules/init-smooth-scroll.js\");\n/* harmony import */ var _modules_init_animate_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/init-animate-scroll.js */ \"./src/modules/init-animate-scroll.js\");\n/* harmony import */ var _modules_init_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/init-accordion.js */ \"./src/modules/init-accordion.js\");\n/* harmony import */ var _modules_init_modal_handler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/init-modal-handler.js */ \"./src/modules/init-modal-handler.js\");\n/* harmony import */ var _modules_init_tooltip_handler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/init-tooltip-handler.js */ \"./src/modules/init-tooltip-handler.js\");\n/* harmony import */ var _modules_init_dropdown_menu_handler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/init-dropdown-menu-handler.js */ \"./src/modules/init-dropdown-menu-handler.js\");\n/* harmony import */ var _modules_init_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/init-menu-mobile.js */ \"./src/modules/init-menu-mobile.js\");\n/* harmony import */ var _modules_init_operation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/init-operation.js */ \"./src/modules/init-operation.js\");\n/* harmony import */ var _modules_init_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/init-fetch-animais.js */ \"./src/modules/init-fetch-animais.js\");\n/* harmony import */ var _modules_init_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/init-fetch-bitcoin.js */ \"./src/modules/init-fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_init_tab_navigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_init_accordion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_init_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_init_animate_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_init_modal_handler_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_init_tooltip_handler_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_init_dropdown_menu_handler_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_init_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_init_operation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_init_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_init_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/index.js?");

/***/ }),

/***/ "./src/modules/init-accordion.js":
/*!***************************************!*\
  !*** ./src/modules/init-accordion.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n  const accordionList = document.querySelectorAll(\r\n    \"[data-anime='accordion'] dt\"\r\n  );\r\n  const accordionClassToInit = \"active\";\r\n  function activeAccordion(event) {\r\n    event.currentTarget.classList.toggle(accordionClassToInit);\r\n    event.currentTarget.nextElementSibling.classList.toggle(\r\n      accordionClassToInit\r\n    );\r\n  }\r\n  if (accordionList.length) {\r\n    accordionList[0].classList.add(\"ativo\");\r\n    accordionList[0].nextElementSibling.classList.add(\"ativo\");\r\n  }\r\n  accordionList.forEach(item => {\r\n    item.addEventListener(\"click\", activeAccordion);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-accordion.js?");

/***/ }),

/***/ "./src/modules/init-animate-scroll.js":
/*!********************************************!*\
  !*** ./src/modules/init-animate-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateScroll)\n/* harmony export */ });\nfunction initAnimateScroll() {\r\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\r\n  if (sections.length) {\r\n    const halfWindow = window.innerHeight * 0.6;\r\n    const animateScroll = () => {\r\n      sections.forEach(section => {\r\n        let sectionTop = section.getBoundingClientRect().top;\r\n        const isSectionVisible = sectionTop - halfWindow < 0;\r\n        if (isSectionVisible) section.classList.add(\"active\");\r\n        else if (section.classList.contains(\"active\"))\r\n          section.classList.remove(\"active\");\r\n      });\r\n    };\r\n    animateScroll();\r\n    window.addEventListener(\"scroll\", animateScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-animate-scroll.js?");

/***/ }),

/***/ "./src/modules/init-dropdown-menu-handler.js":
/*!***************************************************!*\
  !*** ./src/modules/init-dropdown-menu-handler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _init_outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-outside-click.js */ \"./src/modules/init-outside-click.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  const dropdownMenu = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  dropdownMenu.forEach(menu => {\r\n    [\"touchstart\", \"click\"].forEach(userEvent => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    console.log(event);\r\n    this.classList.add(\"active\");\r\n    (0,_init_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\r\n      this.classList.remove(\"active\");\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-dropdown-menu-handler.js?");

/***/ }),

/***/ "./src/modules/init-fetch-animais.js":
/*!*******************************************!*\
  !*** ./src/modules/init-fetch-animais.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _init_number_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-number-animation.js */ \"./src/modules/init-number-animation.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  return fetchAnimais(\"./animaisapi.json\");\r\n}\r\n\r\nasync function fetchAnimais(url) {\r\n  try {\r\n    const data = await fetch(url);\r\n    const jsonData = await data.json();\r\n    const containerNumber = document.querySelector(\".numeros-grid\");\r\n    jsonData.forEach(element => {\r\n      const divAnimal = createAnimal(element);\r\n      containerNumber.appendChild(divAnimal);\r\n    });\r\n    (0,_init_number_animation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\nfunction createAnimal(animal) {\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"animais-numeros\");\r\n\r\n  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n  return div;\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-fetch-animais.js?");

/***/ }),

/***/ "./src/modules/init-fetch-bitcoin.js":
/*!*******************************************!*\
  !*** ./src/modules/init-fetch-bitcoin.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  try {\r\n    fetch(\"https://blockchain.info/ticker\")\r\n      .then(r => {\r\n        r.json();\r\n      })\r\n      .then(bitcoin => {\r\n        const btc = document.querySelector(\".btc-preco\");\r\n        return (btc.innerText = (200 / bitcoin.BRL.sell).toFixed(6));\r\n      });\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-fetch-bitcoin.js?");

/***/ }),

/***/ "./src/modules/init-menu-mobile.js":
/*!*****************************************!*\
  !*** ./src/modules/init-menu-mobile.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _init_outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-outside-click.js */ \"./src/modules/init-outside-click.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector(\"[data-menu='button']\");\r\n  const menuList = document.querySelector(\"[data-menu='list']\");\r\n  const events = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    menuList.classList.add(\"active\");\r\n    menuButton.classList.add(\"active\");\r\n    (0,_init_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\r\n      menuList.classList.remove(\"active\");\r\n      menuButton.classList.remove(\"active\");\r\n    });\r\n  }\r\n  events.forEach(userEvent => {\r\n    menuButton.addEventListener(userEvent, openMenu);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-menu-mobile.js?");

/***/ }),

/***/ "./src/modules/init-modal-handler.js":
/*!*******************************************!*\
  !*** ./src/modules/init-modal-handler.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const buttonAnchor = document.querySelector(\"[data-modal='open']\");\r\n  const modalContainer = document.querySelector(\"[data-modal='container']\");\r\n  const modalButtonClose = document.querySelector(\"[data-modal='close']\");\r\n\r\n  const toggleModal = event => {\r\n    event.preventDefault();\r\n    return modalContainer.classList.toggle(\"active\");\r\n  };\r\n\r\n  const handleClickOutModal = event => {\r\n    if (event.target === this) toggleModal(event);\r\n  };\r\n\r\n  buttonAnchor.addEventListener(\"click\", toggleModal);\r\n  modalButtonClose.addEventListener(\"click\", toggleModal);\r\n  modalContainer.addEventListener(\"click\", handleClickOutModal);\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-modal-handler.js?");

/***/ }),

/***/ "./src/modules/init-number-animation.js":
/*!**********************************************!*\
  !*** ./src/modules/init-number-animation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumberAnimation)\n/* harmony export */ });\nfunction initNumberAnimation() {\r\n  const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n  function animateNumbers() {\r\n    numeros.forEach(numero => {\r\n      const total = Number(numero.innerText);\r\n      let incremento = Math.floor(total / 80);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start = start + incremento;\r\n        numero.innerText = start;\r\n        if (start >= total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 45 * Math.random());\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"active\")) {\r\n      observer.disconnect();\r\n      animateNumbers();\r\n    }\r\n  }\r\n\r\n  const observeTarget = document.querySelector(\".numeros\");\r\n  const observer = new MutationObserver(handleMutation);\r\n  observer.observe(observeTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-number-animation.js?");

/***/ }),

/***/ "./src/modules/init-operation.js":
/*!***************************************!*\
  !*** ./src/modules/init-operation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOperation)\n/* harmony export */ });\nfunction initOperation() {\r\n  const operation = document.querySelector(\"[data-semana]\");\r\n  const weekdays = operation.dataset.semana.split(\",\").map(Number);\r\n  const weekhour = operation.dataset.horario.split(\",\").map(Number);\r\n\r\n  const now = new Date();\r\n\r\n  const today = now.getDay();\r\n\r\n  const openWeekday = weekdays.indexOf(today) !== -1;\r\n  const openingHours = today >= weekhour[0] || today < weekhour[1];\r\n  if (openWeekday && openingHours) operation.classList.add(\"openned\");\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-operation.js?");

/***/ }),

/***/ "./src/modules/init-outside-click.js":
/*!*******************************************!*\
  !*** ./src/modules/init-outside-click.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOutsideClick)\n/* harmony export */ });\nfunction initOutsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      element.setAttribute(outside, \"\");\r\n\r\n      function handleOutsideClick(event) {\r\n        if (!element.contains(event.target)) {\r\n          element.removeAttribute(outside);\r\n          events.forEach(userEvent => {\r\n            html.removeEventListener(userEvent, handleOutsideClick);\r\n          });\r\n          callback();\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-outside-click.js?");

/***/ }),

/***/ "./src/modules/init-smooth-scroll.js":
/*!*******************************************!*\
  !*** ./src/modules/init-smooth-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSmoothScroll)\n/* harmony export */ });\nfunction initSmoothScroll() {\r\n  const linkInterno = document.querySelectorAll(\r\n    \"[data-menu='suave'] a[href^='#']\"\r\n  );\r\n\r\n  const scrollToSection = event => {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n\r\n  linkInterno.forEach(link => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-smooth-scroll.js?");

/***/ }),

/***/ "./src/modules/init-tab-navigation.js":
/*!********************************************!*\
  !*** ./src/modules/init-tab-navigation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll(\"[data-tab='menu'] li\");\r\n  const tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\r\n\r\n  const tabClassToInit = \"active\";\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(tabClassToInit);\r\n\r\n    const activeTabs = (index, value) => {\r\n      tabContent.forEach(item => {\r\n        item.classList.remove(value);\r\n      });\r\n\r\n      const direction = tabContent[index].dataset.anime;\r\n      console.log(direction);\r\n      tabContent[index].classList.add(value, direction);\r\n    };\r\n\r\n    tabMenu.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => {\r\n        activeTabs(index, tabClassToInit);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-tab-navigation.js?");

/***/ }),

/***/ "./src/modules/init-tooltip-handler.js":
/*!*********************************************!*\
  !*** ./src/modules/init-tooltip-handler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {}\r\nconst tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\nconst createTooltipBox = element => {\r\n  const tooltipBox = document.createElement(\"div\");\r\n  const text = element.getAttribute(\"aria-label\");\r\n  tooltipBox.classList.add(\"tooltip\");\r\n  tooltipBox.insertAdjacentText(\"afterbegin\", text);\r\n  return document.body.appendChild(tooltipBox);\r\n};\r\n\r\nfunction onMouseOver(event) {\r\n  const tooltipBox = createTooltipBox(this);\r\n  tooltipBox.style.top = `calc(${event.pageY}px - 4%)`;\r\n  tooltipBox.style.left = `calc(${event.pageX}px + 1%)`;\r\n  onMouseLeave.tooltip = tooltipBox;\r\n  onMouseMove.tooltip = tooltipBox;\r\n  onMouseLeave.element = this;\r\n  this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  this.addEventListener(\"mousemove\", onMouseMove);\r\n}\r\n\r\nconst onMouseLeave = {\r\n  handleEvent() {\r\n    this.tooltip.remove();\r\n    this.removeEventListener(\"mouseleave\", onMouseLeave);\r\n  },\r\n};\r\n\r\nconst onMouseMove = {\r\n  handleEvent(event) {\r\n    this.tooltip.style.top = `calc(${event.pageY}px - 4%)`;\r\n    this.tooltip.style.left = `calc(${event.pageX}px + 1%)`;\r\n  },\r\n};\r\n\r\ntooltips.forEach(tip => {\r\n  tip.addEventListener(\"mouseover\", onMouseOver);\r\n});\r\n\n\n//# sourceURL=webpack://8.2-eslint-animais-fantasticos/./src/modules/init-tooltip-handler.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;