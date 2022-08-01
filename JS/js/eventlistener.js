const $header = document.querySelector("#head");
const $content = document.querySelector("#content");
const $footer = document.querySelector("#footer");

$header.addEventListener('click', (e) => {
    alert(e.target.innerHTML)
})

$content.addEventListener('click', (e) => {
    console.log(e.target.innerHTML)
})

$footer.addEventListener('click', (e) => {
    console.log(e.target.innerHTML)
})