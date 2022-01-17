console.log(`2`)
import movieTpl from '../../templates/film-card-main.hbs'
import ApiService from '../dev-1/api.js';
import { renderTrends } from '../dev-1/renders';
const apiService = new ApiService();

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.cards-gallery__list');


searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) { 
    evt.preventDefault();
    apiService.page = 1;
    renderSearch()
}

function renderSearch() {
    const searchFieldValue = document.querySelector('.search-form_input').value;
    if (searchFieldValue) {
        apiService.searchQuery  = searchFieldValue;
    apiService.fetchSearchMovies().then(renderSearchedFilms)

        console.log(searchFieldValue);
    }
    else {
        gallery.innerHTML = '';
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
    
apiService.fetchMovieGenre().then(idToGenre);

function idToGenre(list) {
    const currentInfo = JSON.parse(localStorage.getItem('searchResults'));
  

    for (const film of currentInfo) {
        
        film.genre_ids.forEach(element => {

            list.map((unit) => {
                if (unit.id === element) {
                    element = unit.name;
                    film.genre_name.push(element);
}
            }) 
            
        });
        
    }

    
}

export { renderSearch }