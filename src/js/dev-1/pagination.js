import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { idToGenre, renderSearch } from '../dev-2/dev-2-main.js';
import { genreData } from '../dev-2/dev-2-main.js';

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
const apiService = new ApiService();

pagination.on('beforeMove', async evt => {
  apiService.page = evt.page; 

  list.innerHTML = '';

  if (sessionStorage.getItem('search')) {
    options.page = apiService.page;
    console.log('sd', options.page)
    renderSearch(options.page);

  }

  else {
    options.page = apiService.page;
    console.log(options.page)
    apiService.fetchMovieTrends(options.page).then(idToGenre).then(genreData);
     
  }

});

export default pagination;

