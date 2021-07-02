const burger = document.querySelector(`.hamburger`);
const line = document.querySelectorAll(`.line`);
const menu = document.querySelector(`.menu`)

burger.addEventListener(`click`, () => {
    line[1].classList.toggle(`fade`);
    line[0].classList.toggle(`rotate__first`)
    line[2].classList.toggle(`rotate__last`)
    menu.classList.toggle(`hidden`);
    menu.classList.toggle(`fade`);
})

burger.addEventListener(`transitionend`, (e) => {
    console.log(e.target);
})

window.addEventListener(`resize`, (e) => {
    console.log(window.innerWidth);
})