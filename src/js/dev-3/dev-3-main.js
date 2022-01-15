const openModal = document.querySelector(".cards-gallery__list");
const closeModal = document.querySelector("[film-modal-close]");
const modalFilm = document.querySelector("[film-modal]");


openModal.addEventListener('click', toggleModalFilm);
closeModal.addEventListener('click', toggleModalFilm);

console.log(openModal)
function toggleModalFilm() {

    modalFilm.classList.toggle('is-hidden');
}