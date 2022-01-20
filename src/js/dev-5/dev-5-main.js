console.log(`5`);

import ApiService from '../dev-1/api.js';
import { renderTrends, renderLibrary } from '../dev-1/renders';
import movieTpl from '../../templates/film-card-library.hbs';
import { idToGenre } from '../dev-2/dev-2-main';
import pagination from '../dev-1/pagination';

////////////////// Когда жмешь на кнопку Home, то рисуется галлерея

const apiService = new ApiService();

const homeBtn = document.querySelector('.btn-home-js');

homeBtn.addEventListener('click', onHomeBtnClick);

function onHomeBtnClick(e) {
  e.preventDefault();
  apiService.resetPage();
  pagination.reset();
  apiService.fetchMovieTrends().then(idToGenre).then(renderTrends);
}

/////////////////////////////////// MyLibrary

const refs = {
  watched: document.querySelector('.btn-watched-js'),
  queue: document.querySelector('.btn-queue-js'),
  libraryBtn: document.querySelector('.btn-myLibrary-js'),
  gallery: document.querySelector('.cards-gallery__list'),
};

refs.libraryBtn.addEventListener('click', onClickLibraryBtn);

function onClickLibraryBtn(e) {
  e.preventDefault();
  apiService.resetPage();
  pagination.reset();
  // refs.watched.classList.add('active');
  // apiService.fetchMovieTrends().then(renderLibrary);
  moviesLibraryMarkup();
}

// const watched = JSON.parse(localStorage.getItem('watched'));
// const queue = JSON.parse(localStorage.getItem('queue'));

const WATCHED = 'WATCHED';
const QUEUE = 'QUEUE';

let buttonClick = null;

function moviesLibraryMarkup(localStorageMovies) {
  if (!localStorageMovies) {
    clearFilmsGallery();
    const message =
      '<div class = "gallery-warning"><p>Sorry, you have not added any movies to the list. Return to the <a class = "gallery-warning__span" href="./index.html">HOME</a> </p><div>';
    refs.gallery.insertAdjacentHTML('beforeend', message);
  }
}

function clearFilmsGallery() {
  refs.gallery.innerHTML = '';
}
