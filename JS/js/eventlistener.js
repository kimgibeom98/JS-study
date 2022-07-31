function executeEven(e){
    console.log(e)
    e.addEventListener("click", () => {
        alert(e.innerHTML)
    })
}