import Notiflix from 'notiflix';
import fetchImages from './fetchImages';
// import ImageApi from './image-api';
// import markUp from './markUp';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');

let input = null;
let arrayImages = [];

formEl.addEventListener('submit', clickOnSearchBtn);

function clickOnSearchBtn(e) {
  e.preventDefault();

  input = inputEl.value;

  fetchImages(input).then(arrayImages => {
    console.log(arrayImages);
  });
}
