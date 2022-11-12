const searchInput = document.querySelector('.SearchInput__input');
const showListbox = document.querySelector('.Suggestion');
const showselectLanguage = document.querySelector('.SelectedLanguage');
const languages = JSON.parse(localStorage.getItem('languageList')) ?? [];
let accounts = [];

searchInput.focus();

async function requestLanguages() {
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
      requestLanguages();
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.keyCode !== 13) {
        searchLanguage();
      }
      selectkeyboard(e);
    } else {
      showListbox.style.display = "none";
    }
  } catch (err) {
    console.log(err)
  }
}

async function searchLanguage() {
  showListbox.style.display = "block";
  showListbox.innerHTML = '';
  let documentFragment = '';
  const ul = document.createElement("ul");
  for (let i = 0; i < accounts.length; i++) {
    documentFragment += `
            <li>
            ${accounts[i].replace(searchInput.value, `<span class="Suggestion__item--matched">${searchInput.value}</span>`)}
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
  if (["ArrowUp","ArrowDown"].includes(e.key)) {
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
    selectlanguage(selectedKeyword.innerText);
  }
}

function clickSelectLanguage(e) {
  selectlanguage(e.target.innerText);
}

function selectlanguage(language) {
  if (languages.includes(language)) {
    const firstCaseIndex = languages.indexOf(language);
    languages.splice(firstCaseIndex,1);
  }
  languages.push(language);
  showselectLanguage.innerHTML = '';
  if (languages.length > 5) {
    languages.shift();
  }
  render();
  localStorage.setItem("languageList", JSON.stringify(languages));
}

function render() {
  let documentFragment = '';
  const ul = document.createElement("ul");
  for (let i = 0; i < languages.length; i++) {
    documentFragment += `
            <li>
            ${languages[i]}
            </li>
        `
  }
  ul.innerHTML = documentFragment;
  showselectLanguage.append(ul);
}
render();
searchInput.addEventListener('keyup', viewList);
showListbox.addEventListener('mousedown', clickSelectLanguage);