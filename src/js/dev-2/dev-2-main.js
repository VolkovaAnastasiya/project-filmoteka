import movieTpl from '../../templates/film-card-main.hbs';
import ApiService from '../dev-1/api.js';
import { renderTrends } from '../dev-1/renders';
import pagination from '../dev-1/pagination';
const apiService = new ApiService();
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.cards-gallery__list');

searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  apiService.page = 1;
  renderSearch();
  pagination.reset();
}

function renderSearch(currentPage) {

    const searchFieldValue = document.querySelector('.search-form_input').value;
  
    if (currentPage) { apiService.page = currentPage; }
    
    if (searchFieldValue) {
        
         sessionStorage.setItem('search', searchFieldValue)
        apiService.searchQuery  = searchFieldValue;
    apiService.fetchSearchMovies().then(idToGenre).then(renderSearchedFilms)
    }
    else {
        gallery.innerHTML = '';
        apiService.fetchMovieTrends().then(idToGenre).then(renderTrends)
       
    }

}
function renderSearchedFilms(data) {
  console.log(data);
  if (data.length === 0) {
    gallery.innerHTML = 'SORRY WE CANT FIND ANY MOVIE WITH THIS NAME';
  } else {
    let filmArray = [];
    for (let film of data) {
      if (film.genre_name !== undefined && film.genre_name.length >= 3) {
        film.genre_name.splice(2, film.genre_name.length, 'Other');
      }
      if (film.release_date !== undefined) {
        film.release_date = film.release_date.slice(0, 4);
      }

      filmArray.push(film);
    }
    else {
            genreData(data)
}
    
    
}
function genreData(data) {
        
           let filmArray = [];
        for (let film of data) {
                   
            if (film.genre_name !== undefined && film.genre_name.length >= 3) {
                       film.genre_name.splice(2, film.genre_name.length, 'Other')
                   }
                  if (film.release_date !== undefined) {
                      film.release_date = film.release_date.slice(0, 4);
                    }
                   
                   filmArray.push(film);
               }
               const markup = movieTpl(filmArray);
                   gallery.innerHTML = markup; 
           }
   
function idToGenre(film_list) {
  changeToName(JSON.parse(localStorage.getItem('genreList')), film_list);

  function changeToName(genreObject, films) {
    let storageWithGenre = [];
    console.log(films);
    for (const film of films) {
      let genre_list = [];
      film.genre_ids.forEach(genre => {
        genreObject.map(unit => {
          if (unit.id === genre) {
            genre = unit.name;
            genre_list.push(genre);
            film.genre_name = genre_list;
          }
        });
      });

      storageWithGenre.push(film);
    }
    localStorage.setItem('filmInfo', JSON.stringify(storageWithGenre));
  }
  return film_list;
}


export { renderSearch, idToGenre , genreData}

