let element = document.querySelectorAll('.main');

for(const elbox of element){
    elbox.addEventListener('click', () =>{
        alert(elbox.innerHTML)
    })
}