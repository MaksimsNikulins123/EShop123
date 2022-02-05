let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function(e){
    menuPageBurger.classList.toggle('_active');
    menuPageBody.classList.toggle('_active');
});