
window.onload = function(){

    const $boxwidth = document.querySelector('#ip-width');
    const $boxheight = document.querySelector('#ip-height');
    const $boxtop = document.querySelector('#ip-top');
    const $boxleft = document.querySelector('#ip-left');
    const $insertbtn = document.querySelector('#insert-btn');
    const $body = document.querySelector('#body');
    let count = 1;

        $insertbtn.addEventListener('click', () => {
            setTimeout(() => {  

                let newDiv = document.createElement("div");
                newDiv.classList.add(`note-box${count}`);

                let newTextArea = document.createElement("textarea");
                newTextArea.placeholder = '메모를 입력하세요...';
                newDiv.appendChild(newTextArea);

                $body.appendChild(newDiv);

                const $stickynote = document.querySelector(`.note-box${count} > textarea`);

                $stickynote.style.width = `${$boxwidth.value}px`;
                $stickynote.style.height = `${$boxheight.value}px`;
                $stickynote.style.top = `${$boxtop.value}%`;
                $stickynote.style.left = `${$boxleft.value}%`;
                
                count ++;
            }, 1000);
        });
}

