import ApiService from '../dev-1/api.js';
import { renderTrends, renderLibrary } from '../dev-1/renders';
import movieTpl from '../../templates/film-card-library.hbs';
import { idToGenre, genreData } from '../dev-2/dev-2-main';
import pagination from '../dev-1/pagination';

////////////////// Когда жмешь на кнопку Home, то рисуется галлерея

const apiService = new ApiService();

const paginationCont = document.querySelector('.pagination-container');

const refs = {
  watched: document.querySelector('.btn-watched-js'),
  queue: document.querySelector('.btn-queue-js'),
  homeBtn: document.querySelector('.btn-home-js'),
  libraryBtn: document.querySelector('.btn-myLibrary-js'),
  gallery: document.querySelector('.cards-gallery__list'),
  mainLogo: document.querySelector('.nav-logo'),
};

refs.homeBtn.addEventListener('click', onHomeBtnClick);
refs.mainLogo.addEventListener('click', onHomeBtnClick);

function onHomeBtnClick(e) {
  e.preventDefault();

  //apiService.resetPage();
  pagination._options.totalItems = 10000;

  refs.homeBtn.classList.add('current-link');
  refs.libraryBtn.classList.remove('current-link');

  pagination.reset();
  apiService.fetchMovieTrends().then(idToGenre).then(genreData);
  paginationCont.classList.remove('pagination-container-is-hidden');
  sessionStorage.clear();
  document.querySelector('.search-form_input').value = '';
  
}

/////////////////////////////////// MyLibrary

refs.watched.addEventListener('click', onClickWatchedFilms);
refs.queue.addEventListener('click', onClickQueueFilms);
refs.libraryBtn.addEventListener('click', onClickLibraryBtn);

function onClickLibraryBtn(e) {
  paginationCont.classList.add('pagination-container-is-hidden');
  //apiService.resetPage();
  //pagination.reset();

  onClickWatchedFilms();
  refs.watched.classList.add('active');
  refs.queue.classList.remove('active');
}

function moviesLibraryMarkup() {
  clearFilmsGallery();
  const message =
    '<div class = "gallery-warning"><p>Sorry, you have not added any movies to the list. Return to the <a class = "gallery-warning__span" href="./index.html">HOME</a> </p><div>';
  refs.gallery.insertAdjacentHTML('beforeend', message);
}

////////// Watched Button
function onClickWatchedFilms() {
  refs.watched.classList.add('active');
  refs.queue.classList.remove('active');
  const watched = JSON.parse(localStorage.getItem('watched'));
  clearFilmsGallery();
  if (watched === null || watched.length === 0) {
    moviesLibraryMarkup();
  } else {
    renderMovies(watched);
  }
  return;
}

/////////////// Queue Button
function onClickQueueFilms() {
  refs.watched.classList.remove('active');
  refs.queue.classList.add('active');
  const queue = JSON.parse(localStorage.getItem('queue'));
  clearFilmsGallery();
  if (queue === null || queue.length === 0) {
    moviesLibraryMarkup();
  } else {
    renderMovies(queue);
  }
  return;
}

/////////////////Render

function renderMovies(data) {
  let filmArray = [];
  for (let film of data) {
    if (film.release_date !== '' && film.release_date !== undefined) {
      film.release_date = film.release_date.slice(0, 4);
    } else {
      film.release_date = 'No information';
    }

    filmArray.push(film);
  }
 const markup = movieTpl(filmArray);
  refs.gallery.innerHTML = markup;
}

// function renderMovies(data) {
//   const markup = movieTpl(data);
//   refs.gallery.innerHTML = markup;
// }

///////////////////// Clear container
function clearFilmsGallery() {
  refs.gallery.innerHTML = '';
}

export { renderMovies, clearFilmsGallery, moviesLibraryMarkup };
