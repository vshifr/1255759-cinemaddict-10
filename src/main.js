import {createHeaderTemplate} from './components/header.js';
import {createMenu} from './components/menu.js';
import {createFilters} from './components/filter.js';
import {createMainBoard} from './components/board.js';
import {createFilmCard} from './components/film-card.js';
import {createShowMoreBtn} from './components/show-button.js';
import {createPopUp} from './components/menu.js';


const CARD_COUNT = 5;
const EXTRA_CARD_COUNT = 2;
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const userProfile = document.querySelector(`.header__profile`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(headerElement, createHeaderTemplate(), `beforeend`);
render(mainElement, createMenu(), `beforeend`);
render(mainElement, createFilters(), `beforeend`);
render(mainElement, createMainBoard(), `beforeend`);

const filmMainBoard = document.querySelector(`.films-list`);
const filmExtraBoards = document.querySelectorAll(`.films-list--extra`);

const renderFilmCards = (cardCount, parent) => {
  const container = parent.querySelector(`.films-list__container`);
  [...Array(cardCount)].forEach(() => render(container, createFilmCard(), `beforeend`));
};
renderFilmCards(CARD_COUNT, filmMainBoard);
filmExtraBoards.forEach((section)=> renderFilmCards(EXTRA_CARD_COUNT, section));

render(filmMainBoard, createShowMoreBtn(), `beforeend`);
