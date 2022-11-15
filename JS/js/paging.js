const dataArrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const pagingBox = document.querySelector('#paging');
const showData = document.querySelector('#viewdata');
const pageCount = 5;
const pagaeGroup = Math.ceil(dataArrs.length / pageCount);
let createDiv = '';
let maxNumber;
let minNumber;

for(let i = 1; i <= pagaeGroup; i++){
  createDiv += `<button type="button">${i}</button>`
}
pagingBox.innerHTML = createDiv;
const pageNum = document.querySelector('button');
pageNum.classList.add('active');

function clickEvethandling(e) {
  const pageNum = document.querySelector('button.active');
  pageNum.classList.remove('active');
  e.target.classList.add('active');

  render();
}

function render(){
  const pageNum = document.querySelector('button.active');
  const currentPage = pageNum.innerText;

  maxNumber = currentPage * pageCount;
  minNumber = maxNumber - pageCount;

  const resultData = dataArrs.slice(minNumber, maxNumber);
  showData.innerHTML = '';
  showData.innerHTML += resultData.map((el) => `<span>${el}</span>`)
}

render();
pagingBox.addEventListener('click', clickEvethandling) 

