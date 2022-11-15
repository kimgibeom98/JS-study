const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const pagingBox = document.querySelector('#paging');
const showData = document.querySelector('#viewdata');

function clickEvethandling(e) {
  const pageNum = document.querySelector('button.active');
  pageNum.classList.remove('active');
  e.target.classList.add('active');
  const currentPage = e.target.innerText;
  const pageCount = 5;
  const maxNumber = currentPage * pageCount;
  const minNumber = maxNumber - pageCount;

  const resultData = dataArr.slice(minNumber, maxNumber);
  showData.innerHTML = '';
  showData.innerHTML += resultData.map((el) => `<span>${el}</span>`)
}
pagingBox.addEventListener('click', clickEvethandling) 