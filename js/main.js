'use strict'
//ищем ВСЕ кнопки,на которые будем нажимать(querySelectorAll)//
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');
// будем отслеживать события клика по кнопке(click)//
tabItem.forEach(function(element){
    element.addEventListener('click', open);
});
//открытие контента по функции open//
function open(evt){
    //найти кнопку по которой нажимаем//
    const tabTarget = evt.currentTarget;
    //найти всех,кому будет добавляться класс --active//
    const button = tabTarget.dataset.button;
//убрать у всех айтемов класс --active//
    tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
    });
//убрать у всех content-айтемов класс --active//
    tabContents.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });
//присваивем класс --active выбранной кнопке при нажатии на нее//
    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}