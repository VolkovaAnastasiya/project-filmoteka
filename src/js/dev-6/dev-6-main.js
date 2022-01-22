import { devInfo } from "./developers-info";

const footerModalOpen = document.querySelector('.copyright_modal-open-button');
const teamModal = document.querySelector('.modal-project-developers');
const devGalleryMarkup = renderModalDev(devInfo)


const modalDevList = document.querySelector('.modal-project-developers__list');
const devModalCloseBtn = document.querySelector('.dev-modal-close-button');


footerModalOpen.addEventListener('click',footerModalAction )

function footerModalAction(evt) {
  const devCardMore = document.querySelector('.modal-close-button__dev');
  const modalMoreDev = document.querySelectorAll('.dev-card-btn');

// Попытка обнулить открытые карточки, при закрытии модалки
  // if (document.querySelectorAll('card-open-details')) {
  //   document.querySelectorAll('card-open-details').classList = 'developer-card';
  // }
  // if (document.querySelectorAll('developer-card__comment is-open')) {
  //   document.querySelectorAll('developer-card__comment is-open').classList.remove('is-open');
  // }

    
  devModalCloseBtn.addEventListener('click',footerModalAction );
  modalMoreDev.forEach(elem => elem.addEventListener('click', onCardBtnClick))
  teamModal.classList.toggle('is-open');
  document.body.classList.toggle('is-overflow');

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
   
  return dataArray.map(dev => {
   
    return  `<li class="developer-card">
   <div>
      <div alt= "photo of ${dev.name}" class="developer-card__photo dev-${dev.id}"></div>
      <div class="developer-card__text-box" >
      <h2 class="developer-card__title">${dev.name}</h2>
      <p class="developer-card__dev-part">${dev.devPart}</p>
      <p class="developer-card__comment ">${dev.devComment}</p>
      </div>
      <button class="dev-card-btn" dev-modal-close>
      <svg class="dev-card-icon" viewBox="0 0 32 32" >
      
<path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path>
      
      </svg>
      </button>
      </div>`;
    
    }).join('');
}

modalDevList.innerHTML = devGalleryMarkup;
