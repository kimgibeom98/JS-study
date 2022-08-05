
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

                let closeDiv = document.createElement("button");
                let closetxt = document.createTextNode('X'); 
                closeDiv.appendChild(closetxt);
            
                let newTextarea = document.createElement("textarea");
                newTextarea.placeholder = '메모를 입력하세요...';

                newDiv.appendChild(closeDiv);
                newDiv.appendChild(newTextarea);
                $body.appendChild(newDiv);

                const $stickynote = document.querySelector(`.note-box${count}`);

                $stickynote.style.width = `${$boxwidth.value}px`;
                $stickynote.style.height = `${$boxheight.value}px`;
                $stickynote.style.top = `${$boxtop.value}%`;
                $stickynote.style.left = `${$boxleft.value}%`;
                
                count ++;

                closeDiv.addEventListener('click', () =>{
                    $stickynote.style.display = 'none'
                });    
                
            },1000);
 
        });

        
}

