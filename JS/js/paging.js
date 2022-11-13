const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const pagingBox = document.querySelector('#paging');
const showData = document.querySelector('#viewdata');

function clickEvethandling(e) {
  const pageNum = document.querySelector('button.active');
  
  const currentPage = pageNum.innerText; //페이징 번호
  const totalCount = dataArr.length // 배열의 전체 갯수
  const pageCount = 5;

  dataArr.slice(1, pageCount);


  pageNum.classList.remove('active');
  e.target.classList.add('active');


}
pagingBox.addEventListener('click', clickEvethandling)