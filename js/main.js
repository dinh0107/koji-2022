const menuIcon = document.querySelector('.menu-reponsive')
const menu = document.querySelector ('.menu-item')
 function showMenu(){
    menu.classList.toggle('active')
 }
menuIcon.addEventListener('click' , showMenu)

const iconMenu = document.querySelectorAll('.menu-icon')
const changeIconMenu = document.querySelector('.menu-reponsive')
function changeIcon(){
    for(i = 0 ; i < iconMenu.length ; i++){
        iconMenu[i].classList.toggle('active')
    }   
}
changeIconMenu.addEventListener('click' , changeIcon)


 