const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
const myVideoBtn = document.querySelector('#my_video_btn');

const myVideoModal = document.querySelector('#my_video_modal');
const mobileMenu = document.querySelector('#modal_mobile_menu');

const modalCloseBtns = document.querySelectorAll('.modal_close_btn');

const modalsWrappers = document.querySelectorAll('.modal_area_bgd');
const modalContainers = document.querySelectorAll('.modal_area_content');

const MODAL_ACTIVE_CLASS = 'modal_active';
const BODY_SCROLL_DISABLE_CLASS = 'body_scroll_disable';

enableCloseModalOnBgdClick();
hideModalOnMobileMenuElementsClick();

const modals = [mobileMenu, myVideoModal];
const buttons = [mobileMenuBtn, myVideoBtn];

buttons.forEach((btn, index) => {
    const projectModal = modals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});


modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', hideModal);
})

function enableCloseModalOnBgdClick() {
    if (modalContainers.length) {
        modalContainers.forEach( container => {
            container.addEventListener('click', event => event.stopPropagation());
        });
    }

    if (modalsWrappers.length) {
        modalsWrappers.forEach( container => {
            container.addEventListener('click', hideModal);
        });
    }
}


function hideModal() {
    const modalToClose = document.querySelector(`.${MODAL_ACTIVE_CLASS}`);

    if (modalToClose) {
        modalToClose.classList.remove(MODAL_ACTIVE_CLASS);
        document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);    
    }

    const video = document.querySelector('video');

    if (video)  {
        video.pause();
    }
}

function hideModalOnMobileMenuElementsClick() {
    const MOBILE_MENU_ITEM_CLOSE_DELAY = 150;
    const menuElements = document.querySelectorAll('.mobile_menu_item');

    if (menuElements.length) {
        menuElements.forEach( container => {
            container.addEventListener('click', () => setTimeout(hideModal, MOBILE_MENU_ITEM_CLOSE_DELAY));
        });
    }
}
//____//____//____//____//Navigation//____//____//____//____//____//
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-110px";
    }
    prevScrollpos = currentScrollPos;
}