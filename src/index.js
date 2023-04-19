import logo from './images/logo.png';
import './style.css';
import { items } from './modules/functions.js';

const logoContainer = document.querySelector('#logoContainer');
logoContainer.src = logo;
const itemsContainer = document.querySelector('#items');
items(itemsContainer);
