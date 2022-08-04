
window.onload = function(){
    const $boxwidth = document.querySelector('#ip-width');
    const $boxheight = document.querySelector('#ip-height');
    const $boxtop = document.querySelector('#ip-top');
    const $boxleft = document.querySelector('#ip-left');
    const $insertbtn = document.querySelector('#insert-btn');
    const $stickynote = document.querySelector('#sticky-note');

    $insertbtn.addEventListener('click', () => {
        setTimeout(() => {
            $stickynote.style.width = `${$boxwidth.value}px`;
            $stickynote.style.height = `${$boxheight.value}px`;
            $stickynote.style.top = `${$boxtop.value}%`;
            $stickynote.style.left = `${$boxleft.value}%`;
        }, 3000); 

    });

}

window.onload = function(){
    const $insertbtn = document.querySelector('#insert-btn');
    const $stickynote = document.querySelector('#sticky-note');

    $insertbtn.addEventListener('click', () => {
        setTimeout(() => {
            $stickynote.style.width = `${document.querySelector('#ip-width').value}px`;
            $stickynote.style.height = `${document.querySelector('#ip-height').value}px`;
            $stickynote.style.top = `${document.querySelector('#ip-top').value}%`;
            $stickynote.style.left = `${document.querySelector('#ip-left').value}%`;
        }, 3000); 

    });

}

