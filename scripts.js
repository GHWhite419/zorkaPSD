const menuCloseButton = document.querySelector('.menuCloseButton');
const menu = document.querySelector('.settingsBanner');

menuCloseButton.addEventListener('click', () => {
    menu.classList.remove('menuOpen');
})