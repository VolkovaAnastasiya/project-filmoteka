import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderSearch } from '../dev-2/dev-2-main.js';

import ApiService from './api.js'
import { renderTrends } from './renders.js';
const options = {
  // below default value of options
  totalItems: 400,
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
//const currentPage = pagination.getCurrentPage();
const list = document.querySelector('.cards-gallery__list');
const apiService = new ApiService();
// apiService.fetchMovieTrends(currentPage);

pagination.setTotalItems(1000);

pagination.on('beforeMove', async evt => {
  apiService.page = evt.page;
  

  list.innerHTML = '';

  if (sessionStorage.getItem('search')) {
    options.page = apiService.page;
    console.log('sd', options.page)
    // console.log(apiService.page)
    // Записывает в рендер страницу из апи
    renderSearch(options.page);


  }

  else {
    options.page = apiService.page;
      console.log(options.page)
    // Меняет currentPage, на страницу из апи
    apiService.fetchMovieTrends(options.page).then(renderTrends);
    // apiService.fetchMovieTrends().then(renderTrends);
  }

});

/*pagination.on('afterMove', event => {
  const actualPage = event.page;
    list.innerHTML = '';
    apiService.fetchMovieTrends(actualPage).then(renderTrends);
   
  
});*/

export default pagination;

