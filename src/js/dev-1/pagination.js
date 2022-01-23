import { idToGenre, renderSearch } from '../dev-2/dev-2-main.js';
import { genreData } from '../dev-2/dev-2-main.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from './api.js'
import { renderTrends } from './renders.js';

const options = {
  // below default value of options
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);
const list = document.querySelector('.cards-gallery__list');
// const apiService = new ApiService();

pagination.on('beforeMove', async evt => {
  // pagination.reset();
  // apiService.page = evt.page; 
  // console.log("dfg", pagination._options.totalItems);
  
  options.page = evt.page;
  list.innerHTML = '';
  ApiService.page = evt.page;
   

  /*if (sessionStorage.getItem('search')) {
    options.page = ApiService.page;
    console.log('sd', options.page)*/
    renderSearch(options.page);
   /* // pagination.reset();
  }

  else {
    
    options.page = ApiService.page;
    console.log(options.page)
    ApiService.fetchMovieTrends(options.page).then(idToGenre).then(genreData);
    
  }*/

});




export default pagination;