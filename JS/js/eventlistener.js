let element = document.querySelectorAll('.main');
for(const elbox of element){
    elbox.addEventListener('click', () =>{
        if(elbox.innerHTML === 'header'){
            alert(elbox.innerHTML)
        }else{
            console.log(elbox.innerHTML)
        }
    })
}