const menuOpenButton = document.querySelector('.menuOpenButton');
const menuCloseButton = document.querySelector('.menuCloseButton');
const menu = document.querySelector('.settingsBanner');

menuOpenButton.addEventListener('click', () => {
    menu.classList.add('menuOpen');
})

menuCloseButton.addEventListener('click', () => {
    menu.classList.remove('menuOpen');
})