import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import TabNav from './modules/tabnav.js';
import Tooltip from './modules/tooltip.js';

import initAnimacaoScroll from './modules/animacao-scroll.js';
import initDropdown from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/functioning.js';
import initBitcoin from './modules/bitcoin.js';
import fetchAnimals from './modules/fetch.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimals('../../animaisapi.json', '.numeros-grid');

initAnimacaoScroll();
initDropdown();
initMenuMobile();
initFuncionamento();
initBitcoin();