const findLanguages = document.querySelector('.SearchInput__input');
const showListbox = document.querySelector('.Suggestion');
findLanguages.focus();
async function showGetdata(e) {
  try {
    if (findLanguages.value.length > 0) {
      const resppnse = await fetch(`https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${findLanguages.value}`, {
        method: 'GET'
      });
      accounts = await resppnse.json();
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
        selectLanguages(accounts);
      }
      findListchoice(e);
    }
  } catch (err) {
    // console.log(err)
  }
}

async function selectLanguages(list) {
  showListbox.style.display = "block";
  showListbox.innerHTML = '';
  const ul = document.createElement("ul");
  for (let i = 0; i < list.length; i++) {
    ul.innerHTML += `
            <li>
            ${list[i].replace(findLanguages.value, `<span class="Suggestion__item--matched">${findLanguages.value}</span>`)}
            </li>
        `
  }
  showListbox.append(ul);
  const keywordsList = showListbox.querySelectorAll("ul > li");
  keywordsList[0].classList.add("Suggestion__item--selected");
  console.log(123)
}

function findListchoice(e) {
  const keywordsList = showListbox.querySelectorAll("ul > li");
  const selectedKeyword = showListbox.querySelector("ul > li.Suggestion__item--selected");
  console.log(selectedKeyword)
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    let target;
    const initIndex = e.key === "ArrowUp" ? keywordsList.length - 1 : 0;
    const adjacentSibling = selectedKeyword && (e.key === "ArrowUp" ? selectedKeyword.previousElementSibling : selectedKeyword.nextElementSibling);
    console.log(adjacentSibling)
    if (adjacentSibling) {
      target = adjacentSibling;
    } else {
      target = keywordsList.item(initIndex);
    }
    selectedKeyword.classList.remove("Suggestion__item--selected");
    target.classList.add("Suggestion__item--selected");
    findLanguages.value = target.textContent;
  }
}
findLanguages.addEventListener('keyup', showGetdata);
findLanguages.addEventListener('keyup', findListchoice);