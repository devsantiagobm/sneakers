export function menu(){
    const buttonOpen = document.querySelector('.nav__box--menu')
    const buttonClose = document.querySelector('.nav__item--close')
    const menu = document.querySelector('.nav__list')
    const bg = document.querySelector('.bg')

    buttonOpen.addEventListener('click', openMenu)
    buttonClose.addEventListener('click', closeMenu)

    function openMenu(){
        menu.classList.add('nav__list--active')
        bg.classList.add('bg--active')
    }

    function closeMenu(){
        menu.classList.remove('nav__list--active')
        bg.classList.remove('bg--active')
    }
}