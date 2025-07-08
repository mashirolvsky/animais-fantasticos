import TabNav from "./modules/init-tab-navigation.js";
import SmoothScroll from "./modules/init-smooth-scroll.js";
import initAnimateScroll from "./modules/init-animate-scroll.js";
import Accordion from "./modules/init-accordion.js";
import Modal from "./modules/modal-handler.js";
import initTooltip from "./modules/init-tooltip-handler.js";
import initDropdownMenu from "./modules/init-dropdown-menu-handler.js";
import initMenuMobile from "./modules/init-menu-mobile.js";
import initOperation from "./modules/init-operation.js";
import initFetchAnimais from "./modules/init-fetch-animais.js";
import initFetchBitcoin from "./modules/init-fetch-bitcoin.js";

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
const accordion = new Accordion("[data-anime='accordion'] dt");
const modal = new Modal("[data-modal='open']", "[data-modal='container']", "[data-modal='close']");

initAnimateScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimais();
initFetchBitcoin();

smoothScroll.init();
accordion.init();
tabNav.init();
modal.init()