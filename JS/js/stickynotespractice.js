window.onload = function(){

    const $boxwidth = document.querySelector('#ip-width');
    const $boxheight = document.querySelector('#ip-height');
    const $boxtop = document.querySelector('#ip-top');
    const $boxleft = document.querySelector('#ip-left');
    const $insertbtn = document.querySelector('#insert-btn');
    const $body = document.querySelector('#body');
    let count = 1;

    let closediv = document.createElement("button");
    let closetxt = document.createTextNode('X'); 
    closediv.appendChild(closetxt);

    $insertbtn.addEventListener('click', () => {
        setTimeout(() => {  
            addnote();
        },1000);
      
    });

    // 메모추가 함수
    function addnote(){
        let newdiv = document.createElement("div");
        newdiv.classList.add(`note-box${count}`);
    
        let closediv = document.createElement("button");
        let closetxt = document.createTextNode('X'); 
        closediv.appendChild(closetxt);

        let newtextarea = document.createElement("textarea");
        newtextarea.placeholder = '메모를 입력하세요...';
    
        newdiv.appendChild(closediv);
        newdiv.appendChild(newtextarea);
        $body.appendChild(newdiv);
    
        newdiv.style.width = `${$boxwidth.value}px`;
        newdiv.style.height = `${$boxheight.value}px`;
        newdiv.style.top = `${$boxtop.value}%`;
        newdiv.style.left = `${$boxleft.value}%`;
                    
        count ++;
    }

    // 메모삭제 함수
    // closediv.addEventListener('click', (e) => {
    //     console.log(e.target)
    //     e.target.parentNode.remove();
    // });

    closediv.onclick = function(){
        this.parentNode.remove();
    }

}