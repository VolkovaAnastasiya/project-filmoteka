import { devInfo } from "./developers-info";
import devCards from '../../templates/modal-developer-card.hbs';

const footerModalOpen = document.querySelector('.copyright_modal-open-button');
const teamModal = document.querySelector('.modal-project-developers');
const modalDevList = document.querySelector('.modal-project-developers__list');
const devModalCloseBtn = document.querySelector('.dev-modal-close-button');
const mybutton = document.querySelector('.btn-To-Top')


footerModalOpen.addEventListener('click',footerModalAction )



function footerModalAction() {
  teamModal.classList.toggle('is-open');
  document.body.classList.toggle('is-overflow');
  renderModalDev(devInfo);
  
    //  Вешает и снимает слушатель на кнопкe закрытия модального окна
   toggleButtons(teamModal.classList.contains('is-open'), devModalCloseBtn, 'click', footerModalAction );
 

    //  Вешает и снимает слушатель на кнопках у карточек
      const modalMoreInfoBtn = document.querySelectorAll('.dev-card-btn');
      toggleButtonsforAll(teamModal.classList.contains('is-open'), modalMoreInfoBtn, 'click',  onCardBtnClick);
      
      // Убирает унопку UP, при открытой модалке
      if (teamModal.classList.contains('is-open')) {
        mybutton.style.display = 'none';
      } else {
        mybutton.style.display = 'block';
      }


      // Обнуляет открытые карточки послее закрытия модального окна.
      if (teamModal.querySelector('card-open-details')) {
    teamModal.querySelectorAll('card-open-details').classList ='developer-card';
    teamModal.querySelectorAll('developer-card__comment is-open').classList.remove('is-open');

  }
 
}
    

function onCardBtnClick(evt) {
  const devDataDiv = evt.currentTarget.parentNode;

  evt.currentTarget.classList.toggle('button-active');
  devDataDiv.querySelector('.developer-card__comment').classList.toggle('is-open');
  
  if (devDataDiv.parentNode.classList == 'developer-card') {
    devDataDiv.parentNode.classList = 'card-open-details';
    return
  }
  if (devDataDiv.parentNode.classList == 'card-open-details') {
    
    devDataDiv.parentNode.classList = 'developer-card';
    return
  }
 };
 
 function renderModalDev(dataArray) { 
   const cards = devCards(dataArray);
  modalDevList.innerHTML = cards;
 }
 
 function toggleButtons(condition, target, event, foo) {    
   if (condition === true) {
      target.addEventListener(event, foo);
   } else {
      target.removeEventListener(event, foo); 
 }
};

function toggleButtonsforAll(condition, target, evt, foo) {    
   if (condition === true) {
      target.forEach( elem => elem.addEventListener(evt, foo))
   } else {
      target.forEach (elem =>elem.removeEventListener(evt, foo)); 
 }
};
