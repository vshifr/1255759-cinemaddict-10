import {createHeaderTemplate} from './components/header.js';
import {createMenu} from './components/menu.js';
import {createFilters} from './components/filter.js';
import {createMainBoard} from './components/board.js';
import {createFilmCard} from './components/film-card.js';
import {createShowMoreBtn} from './components/show-button.js';
import {createPopUp} from './components/menu.js';


const CARD_COUNT = 5;
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const EXTRA_CARD_COUNT = 2;
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

[...Array(CARD_COUNT)].forEach(() => render(filmMainBoard.querySelector(`div`), createFilmCard(), `beforeend`));
filmExtraBoards.forEach((section)=> {
  for (let i = 0; i < EXTRA_CARD_COUNT; i++) {
    render(section.querySelector(`div`), createFilmCard(), `beforeend`);
  }
});

render(filmMainBoard, createShowMoreBtn(), `beforeend`);


