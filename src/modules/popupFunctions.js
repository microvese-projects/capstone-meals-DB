import postComment from './postComment.js';

const popupFunctions = () => {
  const form = document.querySelector('form');
  const close = document.querySelector('#close-popup');

  const closepopup = (e) => {
    const popup = e.target.parentNode;
    const mealsContainer = document.querySelector('#items');

    popup.style.display = 'none';
    mealsContainer.style.display = 'flex';
  };

  form.addEventListener('submit', postComment);
  close.addEventListener('click', closepopup);
};

export default popupFunctions;