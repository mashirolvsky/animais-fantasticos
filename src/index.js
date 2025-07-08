import TabNav from "./modules/tab-navigation.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimateScroll from "./modules/init-animate-scroll.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal-handler.js";
import Tooltip from "./modules/tooltip-handler.js";
import initDropdownMenu from "./modules/init-dropdown-menu-handler.js";
import initMenuMobile from "./modules/init-menu-mobile.js";
import initOperation from "./modules/init-operation.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
const accordion = new Accordion("[data-anime='accordion'] dt");
const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='container']",
  "[data-modal='close']"
);
const tooltip = new Tooltip("[data-tooltip]");

initAnimateScroll();
initDropdownMenu();
initMenuMobile();
initOperation();

smoothScroll.init();
accordion.init();
tabNav.init();
modal.init();
tooltip.init();

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
fetchAnimais("../animaisapi.json", ".numeros-grid");
