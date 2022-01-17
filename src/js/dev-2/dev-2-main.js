console.log(`2`)
import movieTpl from '../../templates/film-card-main.hbs'
import ApiService from '../dev-1/api.js';
import { renderTrends } from '../dev-1/renders';
const apiService = new ApiService();

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.cards-gallery__list');

searchForm.addEventListener('submit', renderSearch);


function renderSearch(event) {
    if (event) { event.preventDefault(); }

    const searchFieldValue = document.querySelector('.search-form_input').value;
    if (searchFieldValue) {
        apiService.searchQuery = searchFieldValue;
    apiService.fetchSearchMovies().then(renderSearchedFilms)

        console.log(searchFieldValue);
    }
    else {
        gallery.innerHTML = '';
          apiService.page = 1;
        apiService.fetchMovieTrends().then(renderTrends)
        console.log('ytn htp', searchFieldValue)
    }
}

 function renderSearchedFilms(data) {
           if (data.results.length === 0) {
              gallery.innerHTML = "SORRY WE CANT FIND ANY MOVIE WITH THIS NAME";
            }
            else {  
               
                const markup = movieTpl(data.results);
             gallery.innerHTML = markup;
            localStorage.setItem("searchResults", JSON.stringify(data.results));}
            
    }
export { renderSearch }