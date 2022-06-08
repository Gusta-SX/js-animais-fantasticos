import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import TabNav from './modules/tabnav.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimals from './modules/fetch.js';
import fetchBitcoin from './modules/bitcoin.js';
import ScrollAnima from './modules/animacao-scroll.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Functioning from './modules/functioning.js';

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Functioning('[data-semana]', 'open');
console.log(funcionamento);
funcionamento.init();

fetchAnimals('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-price')