var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile) {
    const filterTitle = document.querySelector('.filter__title');
    filterTitle.addEventListener('click', function(e) {
        filterTitle.classList.toggle('_active');
        _slideToggle(filterTitle.nextElementSibling);
    });
}