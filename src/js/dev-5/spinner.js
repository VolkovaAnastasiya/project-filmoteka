const spinner = document.querySelector('.js-spinner');
function openSpinner() {
  spinner.classList.remove('preloader-overlay');
}

function closeSpinner() {
  spinner.classList.add('preloader-overlay');
}

export { openSpinner, closeSpinner };
