const tabsItems = document.querySelectorAll('._tabs-item');
const tabsBlocks = document.querySelectorAll('._tabs-block');

tabsItems.forEach(function(item){
    item.addEventListener('click', function(){
        let currentItem = item;
        let tabId = currentItem.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if(! currentItem.classList.contains('_active')) {
            tabsItems.forEach(function(item){
                item.classList.remove('_active');
            });

            tabsBlocks.forEach(function(item){
                item.classList.remove('_active');
            });
            currentItem.classList.add('_active');
            currentTab.classList.add('_active');
        }
    
    });
});
