import movieModalTpl from '../../templates/film-details.hbs';
import ApiService from '../dev-1/api.js';
const apiService = new ApiService();

const openModal = document.querySelector('[data-film-modal-open]');
const closeModal = document.querySelector('[data-film-modal-close]');
const modalFilm = document.querySelector('[data-film-modal]');
const backdrop = document.querySelector('.backdrop__film');
const boxFilm = document.querySelector('.modal__film-detalies');

openModal.addEventListener('click', onOpenModalFilm);
closeModal.addEventListener('click', onCloseModalFilm);
window.addEventListener('keydown', closeModalByEsc);
backdrop.addEventListener('click', closeModalByClick);
modalFilm.addEventListener('click', closeModalByClick);

function onOpenModalFilm(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const filmId = event.target.parentNode.id;
  localStorage.setItem('filmId', JSON.stringify(filmId));

  const filmItem = JSON.parse(localStorage.getItem('filmInfo'));

  const newList = filmItem.find(elem => elem.id === Number(filmId));

  localStorage.setItem('newList', JSON.stringify(newList));
  renderModal(newList);

  document.querySelector('body').classList.add('is-overflow');
  backdrop.classList.remove('is-hidden');

  window.addEventListener('keydown', closeModalByEsc);
  backdrop.addEventListener('click', closeModalByClick);

  const btnWatch = document.querySelector('.modal-details_watched-button');
  const btnQueue = document.querySelector('.modal-details_queue-button');

  btnWatch.addEventListener('click', addWatcheIdFilm);
  btnQueue.addEventListener('click', addQueueIdFilm);

  textModalBtn(Number(filmId));
}

function renderModal(data) {
  const markup = movieModalTpl(data);
  boxFilm.innerHTML = markup;
}

function onCloseModalFilm(event) {
  document.querySelector('body').classList.remove('is-overflow');
  backdrop.classList.add('is-hidden');
}

function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    onCloseModalFilm();

    window.removeEventListener('keydown', closeModalByEsc);
  }
}

function closeModalByClick(e) {
  if (e.target === backdrop) {
    onCloseModalFilm();
    backdrop.removeEventListener('click', closeModalByClick);
  }
}
//--------------------------------------------------------
function textModalBtn(id) {
  const btnWatch = document.querySelector('.modal-details_watched-button');
  const btnQueue = document.querySelector('.modal-details_queue-button');
  if (inArrayKey(id, 'watched')) {
    // console.log('есть такой в watched');

    btnWatch.textContent = 'Added to watched';
    btnWatch.disabled = true;
    function changeText() {
      btnWatch.disabled = false;
      btnWatch.textContent = 'Remove from watched';
      btnWatch.classList.add('active');
    }
    setTimeout(changeText, 500);
  } else {
    // console.log('нет такого в watched');

    btnWatch.textContent = 'Add to watched';
    btnWatch.classList.remove('active');
    btnWatch.disabled = false;
  }

  if (inArrayKey(id, 'queue')) {
    // console.log('есть такой в queue');

    btnQueue.textContent = 'Added to queue';
    btnQueue.disabled = true;
    function changeText() {
      btnQueue.disabled = false;
      btnQueue.textContent = 'Remove from queue';
      btnQueue.classList.add('active');
    }
    setTimeout(changeText, 500);
  } else {
    // console.log('нет такого в queue');

    btnQueue.textContent = 'Add to queue';
    btnQueue.classList.remove('active');
    btnQueue.disabled = false;
  }
}

function addWatcheIdFilm(event) {
  const btnWatch = document.querySelector('.modal-details_watched-button');
  const filmId = Number(JSON.parse(localStorage.getItem('filmId')));

  if (btnWatch.classList.contains('active')) {
    removeWatcheId(filmId);
  } else {
    let watchList = [];
    watchList = JSON.parse(localStorage.getItem('watched'));
    watchList.push(filmId);
    localStorage.setItem('watched', JSON.stringify(watchList));
    textModalBtn(filmId);
  }
}

function addQueueIdFilm() {
  const btnQueue = document.querySelector('.modal-details_queue-button');
  const filmId = Number(JSON.parse(localStorage.getItem('filmId')));

  if (btnQueue.classList.contains('active')) {
    removeQueueId(filmId);
  } else {
    let queueList = [];
    queueList = JSON.parse(localStorage.getItem('queue'));
    queueList.push(filmId);
    localStorage.setItem('queue', JSON.stringify(queueList));
    textModalBtn(filmId);
  }
}

function removeWatcheId() {
  const btnWatch = document.querySelector('.modal-details_queue-button');

  let watchList = [];
  watchList = JSON.parse(localStorage.getItem('watched'));
  const filmId = Number(JSON.parse(localStorage.getItem('filmId')));

  if (localStorage.getItem('watched')) {
    console.log('renove whith if', watchList.includes(filmId));

    if (watchList.includes(filmId)) {
      const filterNevArr = watchList.filter(el => el !== filmId);
      localStorage.removeItem('watched');
      localStorage.setItem('watched', JSON.stringify(filterNevArr));
    }
  }
  textModalBtn(filmId);
}

function removeQueueId() {
  const btnQueue = document.querySelector('.modal-details_watched-button');

  let queueList = [];
  queueList = JSON.parse(localStorage.getItem('queue'));
  const filmId = Number(JSON.parse(localStorage.getItem('filmId')));

  if (localStorage.getItem('queue')) {
    console.log('renove whith if', queueList.includes(filmId));

    if (queueList.includes(filmId)) {
      const filterNevArrQueue = queueList.filter(el => el !== filmId); //-удаляет со списка
      localStorage.removeItem('queue');
      localStorage.setItem('queue', JSON.stringify(filterNevArrQueue)); // ключ куда записывается
    }
  }
  textModalBtn(filmId);
}

function inArrayKey(id, list) {
  let arrList = [];
  let localListJson = JSON.parse(localStorage.getItem(list));
  if (localListJson) {
    arrList = [...localListJson];
  }
  const listSet = new Set(arrList);
  return listSet.has(id);
}

export { renderModal, onOpenModalFilm };
