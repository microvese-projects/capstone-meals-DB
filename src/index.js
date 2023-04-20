import logo from './images/logo.png';
import './style.css';
import { items } from './modules/functions.js';
import callApi from './modules/callApi.js';

const logoContainer = document.querySelector('#logoContainer');
logoContainer.src = logo;
const itemsContainer = document.querySelector('#items');

(async () => {
  await items(itemsContainer);
  const commentsButtons = document.querySelectorAll('.comments');
  commentsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mealContainer = btn.parentNode;
      const id = mealContainer.querySelector('.images').dataset.mealId;
      callApi(id);
    });
  });
})();
