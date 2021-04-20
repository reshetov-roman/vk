let searchPiple = document.querySelector('.header-wrapper__form-control');
    searchPiple.addEventListener('focus', () => {
        if(searchPiple.value == ''){
            searchPiple.style.color = '#000';
            searchPiple.style.background = '#fff';
        }
    });

let searchPiple1 = document.querySelector('.header-wrapper__form-control');
searchPiple1.addEventListener('blur', () => {
    if(searchPiple1.value != ''){
        searchPiple1.style.color = '#fff';
        searchPiple1.style.background = '#224B7A';
    }else{
        searchPiple1.style.background = '#fff';
    }
});

// Заполняем Select Day!!!
let pickerDay = document.querySelector('#day');
    for (let i = 1; i <= 31; i++) {
        pickerDay.options[pickerDay.options.length] = new Option(i, i);
}

// Заполняем Select Month!!!
let pickerMonth = document.querySelector('#month');

const arrayMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
arrayMonth.forEach(item  => {
    month.options[month.options.length] = new Option(item, item);
});

// Заполняем Select YEAR!!!
let pickerYear = document.querySelector('#year');

for (let j = 2020; j >= 1935; j--) {
    year.options[year.options.length] = new Option(j, j);
}




