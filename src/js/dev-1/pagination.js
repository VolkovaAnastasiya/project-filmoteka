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
const currentPage = pagination.getCurrentPage();
const list = document.querySelector('.cards-gallery__list');

const apiService = new ApiService();
apiService.fetchMovieTrends(currentPage);



pagination.on('beforeMove', async evt => {
  apiService.page = evt.page;

  list.innerHTML = '';
  
  
  if (sessionStorage.getItem('search')) {
    renderSearch();
    

  }

  else {
    apiService.fetchMovieTrends().then(renderTrends);
  }
  

  console.log(sessionStorage.getItem('search'))
  
});


/*pagination.on('afterMove', event => {
  const actualPage = event.page;

    list.innerHTML = '';
    apiService.fetchMovieTrends(actualPage).then(renderTrends);
   
  
});*/

export default pagination;

