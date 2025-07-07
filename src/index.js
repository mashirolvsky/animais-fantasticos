import initTabNav from "./modules/init-tab-navigation.js";
import SmoothScroll from "./modules/init-smooth-scroll.js";
import initAnimateScroll from "./modules/init-animate-scroll.js";
import initAccordion from "./modules/init-accordion.js";
import initModal from "./modules/init-modal-handler.js";
import initTooltip from "./modules/init-tooltip-handler.js";
import initDropdownMenu from "./modules/init-dropdown-menu-handler.js";
import initMenuMobile from "./modules/init-menu-mobile.js";
import initOperation from "./modules/init-operation.js";
import initFetchAnimais from "./modules/init-fetch-animais.js";
import initFetchBitcoin from "./modules/init-fetch-bitcoin.js";

initTabNav();
initAccordion();
const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");

initAnimateScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimais();
initFetchBitcoin();

smoothScroll.init();
