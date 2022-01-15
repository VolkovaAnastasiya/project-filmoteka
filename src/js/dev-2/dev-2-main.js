console.log(`2`)
import movieTpl from '../../templates/film-card-main.hbs'
 import ApiService from '../dev-1/api.js';
 const apiService = new ApiService();

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.cards-gallery__list');

searchForm.addEventListener('submit', renderSearch);


function renderSearch(event) {
    event.preventDefault();

    const searchFieldValue = document.querySelector('.search-form_input').value;
    apiService.searchQuery = searchFieldValue;
    apiService.fetchSearchMovies().then(renderSearchedFilms)

    console.log(searchFieldValue);

    function renderSearchedFilms(data) {
    const markup = movieTpl(data.results);
    console.log(data.results);
        gallery.innerHTML = markup;
        localStorage.setItem("searchResults",JSON.stringify(data.results));
    }
}
  
export{ renderSearch}