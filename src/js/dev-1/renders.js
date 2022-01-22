import movieTpl from '../../templates/film-card-main.hbs';
import movieLibraryTpl from '../../templates/film-card-library.hbs';
import { openSpinner, closeSpinner } from '../dev-5/spinner';

const gallery = document.querySelector('.cards-gallery__list');

openSpinner();
// Для рендера популярных фильмов
function renderTrends(data) {
  sessionStorage.clear();
  const markup = movieTpl(data);
  //console.log(data);
  gallery.innerHTML = markup;
}
setTimeout(closeSpinner, 500);

// Рендер библиотеки

function renderLibrary(data) {
  const markup = movieLibraryTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}

export { renderTrends, renderLibrary };
