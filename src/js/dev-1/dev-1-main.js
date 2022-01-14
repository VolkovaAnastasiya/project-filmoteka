console.log(1);
//import movieTpl from '../../templates/film-card-main.hbs'
//import movieLibraryTpl from '../../templates/film-card-library.hbs'

import ApiService from "./api";

const apiService = new ApiService();

apiService.fetchMovieTrends();

/*
// Для рендера популярных фильмов
function renderTrends(data) {
  const markup = movieTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}

// Рендер библиотеки
function renderLibrary(data) {
  const markup = movieLibraryTpl(data);

  gallery.insertAdjacentHTML('beforeend', markup);
}

export { renderTrends, renderLibrary };*/