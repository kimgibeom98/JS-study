const searchInput = document.querySelector('.SearchInput__input');
const showListbox = document.querySelector('.Suggestion');
const showselectLanguage = document.querySelector('.SelectedLanguage');
const languageArr = JSON.parse(localStorage.getItem('languageList')) ?? [];
let accounts = [];

searchInput.focus();

async function getdata() {
  try {
    const resppnse = await fetch(`https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${searchInput.value}`, {
      method: 'GET'
    });
    accounts = await resppnse.json();
  } catch (err) {
    console.log(err)
  }
}

async function viewList(e) {
  try {
    if (searchInput.value.length > 0) {
      getdata();
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.keyCode !== 13) {
        searchData(accounts);
      }
      selectkeyboard(e);
    } else {
      showListbox.style.display = "none";
    }
  } catch (err) {
    console.log(err)
  }
}

async function searchData(list) {
  showListbox.style.display = "block";
  showListbox.innerHTML = '';
  let documentFragment = '';
  const ul = document.createElement("ul");
  for (let i = 0; i < list.length; i++) {
    documentFragment += `
            <li>
            ${list[i].replace(searchInput.value, `<span class="Suggestion__item--matched">${searchInput.value}</span>`)}
            </li>
        `
  }
  ul.innerHTML = documentFragment;
  showListbox.append(ul);
  const keywordsList = showListbox.querySelector("ul > li");
  keywordsList.classList.add("Suggestion__item--selected");
}

function selectkeyboard(e) {
  const keywordsList = showListbox.querySelectorAll("ul > li");
  const selectedKeyword = showListbox.querySelector("ul > li.Suggestion__item--selected");
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    let target;
    const initIndex = e.key === "ArrowUp" ? keywordsList.length - 1 : 0;
    const adjacentSibling = selectedKeyword && (e.key === "ArrowUp" ? selectedKeyword.previousElementSibling : selectedKeyword.nextElementSibling);
    if (adjacentSibling) {
      target = adjacentSibling;
    } else {
      target = keywordsList.item(initIndex);
    }
    selectedKeyword.classList.remove("Suggestion__item--selected");
    target.classList.add("Suggestion__item--selected");
  } else if (e.key === 'Enter') {
    alert(selectedKeyword.innerText)
    choiceList(selectedKeyword.innerText);
  }
}

function clickSelectLanguage(e) {
  choiceList(e.target.innerText);
}

function choiceList(language) {
  if (languageArr.includes(language)) {
    const firstCaseIndex = languageArr.indexOf(language);
    languageArr.splice(firstCaseIndex,1);
  }
  languageArr.push(language);
  showselectLanguage.innerHTML = '';
  if (languageArr.length > 5) {
    languageArr.shift();
  }
  render();
  localStorage.setItem("languageList", JSON.stringify(languageArr));
}

function render() {
  let documentFragment = '';
  const ul = document.createElement("ul");
  for (let i = 0; i < languageArr.length; i++) {
    documentFragment += `
            <li>
            ${languageArr[i]}
            </li>
        `
  }
  ul.innerHTML = documentFragment;
  showselectLanguage.append(ul);
}
render();
searchInput.addEventListener('keyup', viewList);
showListbox.addEventListener('mousedown', clickSelectLanguage);