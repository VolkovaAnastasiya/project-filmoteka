import refs from "./refs";

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const { notification } = refs;

notification.addEventListener('click', onNotificationClick);


function onNotificationClick() {
    hideNotification()
    clearTimeout(timeoutId);
}

function showNotification() {
    notification.classList.remove('visually-hidden');

    timeoutId = setTimeout(() => {
        hideNotification()
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    notification.classList.add('visually-hidden');
}


export {showNotification}