import movieModalTpl from '../../templates/film-details.hbs'
 import ApiService from '../dev-1/api.js';
 const apiService = new ApiService();

const openModal = document.querySelector("[film-modal-open]");
const closeModal = document.querySelector("[film-modal-close]");
const modalFilm = document.querySelector("[film-modal]");
const backdrop = document.querySelector(".backdrop__film");
const boxFilm = document.querySelector(".modal__film-detalies");
// const  galleryItem = document.querySelector(".movie-card")

openModal.addEventListener('click', onOpenModalFilm);
closeModal.addEventListener('click', onCloseModalFilm);
window.addEventListener('keydown', closeModalByEsc);
backdrop.addEventListener('click', closeModalByClick);
modalFilm.addEventListener('click', closeModalByClick)

//    apiService.fetchMovieTrends().then(data => {
//   localStorage.setItem('filmInfo', JSON.stringify(data));
//   return data
// })

function onOpenModalFilm(event) {
if (event.target.nodeName !== "IMG") {
    return;
  }

  

  const filmId = event.target.parentNode.id;
// console.log(filmId)
  // localStorage.setItem('filmInfo', JSON.stringify(currentFilm))
  const filmItem = JSON.parse(localStorage.getItem("filmInfo"));

  const newList = filmItem.find((elem) => elem.id === Number(filmId) );

  //  console.log(newList )
  
    document.querySelector('body').classList.add('is-overflow')
    backdrop.classList.remove('is-hidden');
  
renderModal(newList)
  
    window.addEventListener('keydown', closeModalByEsc);
    backdrop.addEventListener('click', closeModalByClick);

 

}



function renderModal(data) {
//  console.log(data);
   const filmItem = JSON.parse(localStorage.getItem("filmInfo"));
  const markup = movieModalTpl(data);
  boxFilm.innerHTML = markup;

  // const currentFilm = data;
  console.log(apiService.data)
  
}

function onCloseModalFilm(event) {

 document.querySelector('body').classList.remove('is-overflow')
 backdrop.classList.add('is-hidden');
}



  function closeModalByEsc(e) {
    if (e.code === 'Escape') {
     onCloseModalFilm()

      window.removeEventListener('keydown', closeModalByEsc);
    }
}
  
function closeModalByClick(e){
 console.log(e.target)
    if (e.target === modalFilm) {
      return;
  }
     onCloseModalFilm()
    backdrop.removeEventListener('click', closeModalByClick);
}


export { renderModal }