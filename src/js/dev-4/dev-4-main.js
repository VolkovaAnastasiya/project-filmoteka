// import movieModalTpl from '../../templates/film-details.hbs';
// import ApiService from '../dev-1/api.js';
// const apiService = new ApiService();

// const openModal = document.querySelector('[data-film-modal-open]');
// const closeModal = document.querySelector('[data-film-modal-close]');
// const modalFilm = document.querySelector('[data-film-modal]');
// const backdrop = document.querySelector('.backdrop__film');
// const boxFilm = document.querySelector('.modal__film-detalies');

// const gallery = document.querySelector('.cards-gallery__list');

// openModal.addEventListener('click', onOpenModalFilm);
// closeModal.addEventListener('click', onCloseModalFilm);
// window.addEventListener('keydown', closeModalByEsc);
// backdrop.addEventListener('click', closeModalByClick);
// modalFilm.addEventListener('click', closeModalByClick);

// // addWatchedBtn.addEventListener('click', )
// //    apiService.fetchMovieTrends().then(data => {
// //   localStorage.setItem('filmInfo', JSON.stringify(data));
// //   return data
// // })

// function onOpenModalFilm(event) {
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   const filmId = event.target.parentNode.id;
//   localStorage.setItem('filmId', JSON.stringify(filmId));

//   const filmItem = JSON.parse(localStorage.getItem('filmInfo'));
//   const filmItemSearch = JSON.parse(localStorage.getItem('searchResults'));

//   const newList =
//     filmItem.find(elem => elem.id === Number(filmId)) ||
//     filmItemSearch.find(elem => elem.id === Number(filmId));

//   localStorage.setItem('newList', JSON.stringify(newList));
//   renderModal(newList);
//   console.log('newList', newList);
//   console.log('filmId', filmId);

//   document.querySelector('body').classList.add('is-overflow');
//   backdrop.classList.remove('is-hidden');

//   window.addEventListener('keydown', closeModalByEsc);
//   backdrop.addEventListener('click', closeModalByClick);

//   const addModalWatchedBtn = document.querySelector('.modal-details_watched-button');
//   const addModalQueueBtn = document.querySelector('.modal-details_queue-button');
//   addModalWatchedBtn.addEventListener('click', addWatcheIdFilm);
//   addModalQueueBtn.addEventListener('click', addQueueIdFilm);
//   //  getLocalStorage()
//   // function getLocalStorage(event) {

//   // }
// }

// function renderModal(data) {
//   //  console.log(data);
//   const filmItem = JSON.parse(localStorage.getItem('filmInfo'));
//   const filmItemSearch = JSON.parse(localStorage.getItem('searchResults'));
//   const markup = movieModalTpl(data);
//   boxFilm.innerHTML = markup;
//   console.log('filmItem', filmItem);

//   // const currentFilm = data;
// }
// // function renderModalSearch(data) {
// // //  console.log(data);

// //   const filmItemSearch = JSON.parse(localStorage.getItem("searchResults"));
// //   const markup = movieModalTpl(data);
// //   boxFilm.innerHTML = markup;

// //   // const currentFilm = data;
// //   console.log(apiService.data)

// // }

// function onCloseModalFilm(event) {
//   document.querySelector('body').classList.remove('is-overflow');
//   backdrop.classList.add('is-hidden');
// }

// function closeModalByEsc(e) {
//   if (e.code === 'Escape') {
//     onCloseModalFilm();

//     window.removeEventListener('keydown', closeModalByEsc);
//   }
// }

// function closeModalByClick(e) {
//   // console.log(e.target)

//   if (e.target === backdrop) {
//     onCloseModalFilm();
//     backdrop.removeEventListener('click', closeModalByClick);
//   }
// }

// export { renderModal, onOpenModalFilm };

// //________________________________________________________________________

// function addWatcheIdFilm(event) {
//   let arreyWatche = [];
//   const newList = JSON.parse(localStorage.getItem('newList'));
//   const filmId = JSON.parse(localStorage.getItem('filmId'));
//   arreyWatche;
//   let watchList = [];
//   // let localWatchListJson = load('watched');
//   // if (localWatchListJson) {
//   //   watchList = [...localWatchListJson];

//   console.log('newList', newList);
//   console.log('filmId', filmId);
//   function renderAddLibrary(data) {
//     //  console.log(data);

//     const markup = movieTpl(data);

//     gallery.innerHTML = markup;
//     // apiService.fetchMovieTrends().then(renderTrends);
//     // apiService.fetchMovieTrends().then(renderTrends);

//     console.log('data.id', data.id);
//   }

//   // const filmWatcheItem = JSON.parse(localStorage.getItem('newList'));
//   // filmWatcheItem.push(newList);
//   // localStorage.setItem('watched', JSON.stringify(arreyWatche));

//   //

//   // newList[e.target.id] = e.target.id; // переписываем полученый объект (полученый при нажатии на кнопку Edit)
// }

// function addQueueIdFilm() {
//   // const locaiQueId = localStorage.setItem('queueId', JSON.stringify(newList));
//   // const queueId = JSON.parse(localStorage.getItem('queueId'));
// }
