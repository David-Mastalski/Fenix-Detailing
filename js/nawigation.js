const body = document.querySelector('body')
const slideMenu = document.querySelector('.slide-menu')
const menuBtn = document.querySelector('.menu-button')
const navOptions = document.querySelectorAll('.nav-option')

menuBtn.addEventListener('click', () => {
    slideMenu.classList.toggle('active')
})

const closeNav = () => {
    menuBtn.classList.remove('opened')
    menuBtn.setAttribute('aria-expanded', 'false')
    slideMenu.classList.remove('active')
}

navOptions.forEach(option => {
    option.addEventListener('click', closeNav)
})