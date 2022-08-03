window.onload = function(){
    const $inputvalue = document.querySelector('#ip-tx');
    const $insertbtn = document.querySelector('#insert-btn') 
    const ulbox = document.getElementById('ul-box');

    $insertbtn.addEventListener('click', () => {
        ulbox.innerHTML += '<li>' + $inputvalue.value +'</li>';
        $inputvalue.value = '';
    })
}
   