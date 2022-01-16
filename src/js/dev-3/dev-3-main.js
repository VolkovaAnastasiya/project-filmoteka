import movieModalTpl from '../../templates/film-details.hbs'

const openModal = document.querySelector("[film-modal-open]");
const closeModal = document.querySelector("[film-modal-close]");
const modalFilm = document.querySelector("[film-modal]");
const backdrop = document.querySelector(".backdrop__film");
const boxFilm = document.querySelector(".modal__film-detalies");

openModal.addEventListener('click', onOpenModalFilm);
closeModal.addEventListener('click', onCloseModalFilm);
window.addEventListener('keydown', closeModalByEsc);
backdrop.addEventListener('click', closeModalByClick);
modalFilm.addEventListener('click', closeModalByClick)

function onOpenModalFilm(event) {
if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const currentFilm = event.target;
  console.log(currentFilm)
  localStorage.setItem('filmInfo', JSON.stringify(currentFilm))

    document.querySelector('body').classList.add('is-overflow')
    backdrop.classList.remove('is-hidden');
  

  
    window.addEventListener('keydown', closeModalByEsc);
    backdrop.addEventListener('click', closeModalByClick);

 renderModal()

}

function renderModal(data) {
 console.log(data);
  const markup = movieModalTpl(data);
  boxFilm.innerHTML = markup;
 
  
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