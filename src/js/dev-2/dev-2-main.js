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
// Добавляет прием в функцию страницы
function renderSearch(currentPage) {
    const searchFieldValue = document.querySelector('.search-form_input').value;
    // делает проверку на наличие передаваемой страницы
    if (currentPage) { apiService.page = currentPage; }
    
    if (searchFieldValue) {
        
         sessionStorage.setItem('search', searchFieldValue)
        apiService.searchQuery  = searchFieldValue;
    apiService.fetchSearchMovies().then(renderSearchedFilms)
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
           }
            
}
    
function idToGenre(genreObject, film_list) {
    let storageWithGenre = [];
    for (const film of film_list) {
        let genre_list = [];
        film.genre_ids.forEach(genre => {
            genreObject.map((unit) => {
                if (unit.id === genre) {
                    genre = unit.name;
                    genre_list.push(genre) ;
                    film.genre_name = genre_list;                    
}
            }) 
            
        });
       
        storageWithGenre.push(film);
         
    }  
    console.log(storageWithGenre);
    localStorage.setItem('storageGenre',JSON.stringify(storageWithGenre))
}

export { renderSearch, idToGenre }