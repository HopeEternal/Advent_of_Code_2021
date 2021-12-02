// Import stylesheets
import './style.css';
// Import dataset
import { depths } from './data.js';

//Solution
let increased = 0;
let decreased = 0;

depths.forEach((depth, index) => {
  depth < depths[index + 1] ? increased++ : decreased++;
});

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <h2>Increased: ${increased}</h2>
  <h2>Decreased: ${decreased}</h2>
  `;
