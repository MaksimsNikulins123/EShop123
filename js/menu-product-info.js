var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile) {
    let menuParents = document.querySelectorAll('.menu-page__parent>a');
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("click", function(e) {
            menuParent.parentElement.classList.toggle('_active');
            e.preventDefault();
        });
    }
} else {
    let menuParents = document.querySelectorAll('.menu-page__parent');
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("mouseenter", function(e){
            menuParent.classList.add('_active');
        });
        menuParent.addEventListener("mouseleave", function(e){
            menuParent.classList.remove('_active');
        });
    }
}

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
    menuPageBurger.addEventListener("click", function(e) {
    menuPageBurger.classList.toggle('_active');

    _slideToggle(menuPageBody);
});

let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');
searchSelect.addEventListener("click", function(e) {
    searchSelect.classList.toggle('_active');
    _slideToggle(categoriesSearch);
});

let spollerFilters = document.querySelectorAll('._spoller');
for (let index = 0; index < spollerFilters.length; index++) {
    const spollerFilter = spollerFilters[index];
    spollerFilter.addEventListener('click', function(e) {
        spollerFilter.classList.toggle('_active');         
        _slideToggle(spollerFilter.nextElementSibling);
    });
}

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener("change", function(e) {
        checkboxCategory.classList.toggle('_active');

        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');
        
        if(checkboxActiveCategories.length > 0) {
            searchSelect.classList.add('_categories');
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
        } else {
            searchSelect.classList.remove('_categories');
        }
    });
}


