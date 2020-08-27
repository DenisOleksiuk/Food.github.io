import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modals from './modules/modals';
import sliders from './modules/sliders';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {openModal} from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);
    calc();
    cards();
    forms('form', modalTimerId);
    modals('[data-modal]', '.modal', modalTimerId);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2020-09-16');
    sliders({
        container: '.offer__slider',
        nextArrow:'.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
});
