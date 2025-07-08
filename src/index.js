import TabNav from "./modules/tab-navigation.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import AnimateScroll from "./modules/animate-scroll.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal-handler.js";
import Tooltip from "./modules/tooltip-handler.js";
import DropdownMenu from "./modules/dropdown-menu-handler.js";
import MenuMobile from "./modules/menu-mobile.js";
import Operation from "./modules/operation.js";
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

const animateScroll = new AnimateScroll("[data-anime='scroll']", "active");

const dropdownMenu = new DropdownMenu(
  "[data-dropdown]",
  ["click", "touchstart"],
  "active"
);

const menuMobile = new MenuMobile(
  "[data-menu='button']",
  "[data-menu='list']",
  ["click", "touchstart"],
  "active"
);

const operation = new Operation("[data-semana]", "active");

operation.init();
smoothScroll.init();
accordion.init();
tabNav.init();
modal.init();
tooltip.init();
animateScroll.init();
dropdownMenu.init();
menuMobile.init();

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
fetchAnimais("../animaisapi.json", ".numeros-grid");
