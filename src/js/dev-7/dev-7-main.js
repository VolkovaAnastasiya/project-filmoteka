import refs from './refs';

const { header, btnHome, btnMyLibrary, formSearch, navLibrary } = refs;
const mainLogo = document.querySelector('.nav-logo');

mainLogo.addEventListener('click', onBtnLogoHomeClick);
btnHome.addEventListener('click', onBtnLogoHomeClick);
btnMyLibrary.addEventListener('click', onBtnMyLibraryClick);

function toggleClass(refsRemove, refsAdd, classs) {
  refsRemove.classList.remove(classs);
  refsAdd.classList.add(classs);
}

function onBtnLogoHomeClick() {
  toggleClass(formSearch, navLibrary, 'visually-hidden');
  toggleClass(btnMyLibrary, btnHome, 'current-link');
  header.classList.remove('header_library');
  header.classList.add('header');
}

function onBtnMyLibraryClick() {
  toggleClass(navLibrary, formSearch, 'visually-hidden');
  toggleClass(btnHome, btnMyLibrary, 'current-link');
  header.classList.add('header_library');
  header.classList.remove('header');
}
