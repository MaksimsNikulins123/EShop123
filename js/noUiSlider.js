
const priceSlider = document.querySelector('.price-filter__slider');

noUiSlider.create(priceSlider, {
    start: [0, 100000],
    connect: true,
    //tooltips:[true, true],
    tooltips:[wNumb({decimals: 0}), wNumb({decimals: 0})],
    range: {
        'min': [0],
        'max': [200000]
    }
});
const priceStart = document.getElementById('price-start');
const priceEnd = document.getElementById('price-end');
priceStart.addEventListener('change', setPriceValues);
priceEnd.addEventListener('change', setPriceValues);

function setPriceValues() {
    let priceStartValue;
    let priceEndtValue;
    if(priceStart.value != '') {
        priceStartValue = priceStart.value;
    }
    if(priceEnd.value != '') {
        priceEndtValue = priceEnd.value;
    }
    priceSlider.noUiSlider.set([priceStartValue, priceEndtValue]);
}
