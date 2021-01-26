import menu from '../menu.json';
import menuTemplate from '../gallery.hbs';

const markup = menuTemplate(menu);

const galleryRef = document.querySelector('ul.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);
