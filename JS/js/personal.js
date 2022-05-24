var selectedInforMenu = [];
var menuCount = 6;
var menuMap = [
  { open : "window.open('https://www.facebook.com/Minister.Leesangmin')", id: "01", title: "보도자료", src: "img/pop-icon01.png", element: "<div>보도자료</div> " },
  { id: "03", title: "알림·채용", src: "img/pop-icon02.png", element: "<div>알림·채용</div> " },
  { id: "05", title: "적극행정", src: "img/pop-icon03.png", element: "<div>적극행정</div> " },
  { id: "07", title: "직원검색", src: "img/pop-icon04.png", element: "<div>직원검색</div> " },
  { id: "11", title: "공직선거비리 익명신고", src: "img/pop-icon05.png", element: "<div>공직선거비리<br class=\"poppc-br\"/> 익명신고</div> " },
  { id: "13", title: "훈령·예규·고시", src: "img/pop-icon06.png", element: "<div>훈령·예규<br class=\"poppc-br\"/>·고시</div> " },
  { id: "15", title: "사진자료실", src: "img/pop-icon07.png", element: "<div>사진<br class=\"pop-br\"/>자료실</div> " }, 
  { id: "16", title: "생활안전지도", src: "img/pop-icon08.png", element: "<div>생활안전<br class=\"poppc-br\"/>지도</div> " }, 
  { id: "02", title: "전자관보", src: "img/pop-icon09.png", element: "<div>전자관보</div> " }, 
  { id: "04", title: "간행물", src: "img/pop-icon10.png", element: "<div>간행물</div> " }, 
  { id: "06", title: "민원안내", src: "img/pop-icon11.png", element: "<div>민원안내</div> " }, 
  { id: "08", title: "조직과기능", src: "img/pop-icon12.png", element: "<div>조직과<br class=\"poppc-br\"/>기능</div> " }, 
  { id: "12", title: "통계", src: "img/pop-icon13.png", element: "<div>통계</div> " }, 
  { id: "14", title: "지방물가정보", src: "img/pop-icon14.png", element: "<div>지방물가<br class=\"poppc-br\"/>정보</div> " }, 
  { id: "09", title: "안전관리 일일상황", src: "img/pop-icon15.png", element: "<div>안전관리<br class=\"poppc-br\"/> 일일상황</div> " }, 
  { id: "10", title: "업무안내", src: "img/pop-icon16.png", element: "<div>업무안내</div> " }];

  $(document).ready(function(){
        initializeMenus();
        $(".tabMenu02 li").click(function (e) {
          var targetId = e.target.id.split("in-po")[1];
          console.log(selectedInforMenu.length, menuCount);
        
          var targetElement = menuMap.find(function (i) {
            return i.id === targetId;
          });
          if (targetElement) {
            if (selectedInforMenu.includes(targetId)) {
              for (var i = 0; i < selectedInforMenu.length; i++) {
                if (selectedInforMenu[i] === targetId) {
                  selectedInforMenu.splice(i, 1);
                  i--;
                }
              }
            } else {
              selectedInforMenu.push(targetId);
            }
        
            if (selectedInforMenu.length <= menuCount) {
              var view = document.querySelector("#selectedBox").innerHTML = "\n        " + selectedInforMenu.map(function (menuKey) {
                var menu = menuMap.find(function (i) {
                  return i.id === menuKey;
                });
                return "<li onclick=\"" + menu.open + "\" id=\"" + menu.id + "\" class=\"tabPage02 active\">\n              <div><img src=\"" + menu.src + "\" alt=\"" + menu.title + "\"></div>\n              <div>" + menu.element + "</div>\n            </li>";
              }).join("");
              for (var subview = 0; subview < menuCount - selectedInforMenu.length; subview++) {
                console.log(view);
                document.querySelector("#selectedBox").innerHTML = view += "\n\n " + "<li class=\"tab-act\">\n          <span>선택하세요</span>\n        </li>";
              }
            } else {
              if (selectedInforMenu.includes(targetId)) {
                for (var _i = 0; _i < selectedInforMenu.length; _i++) {
                  if (selectedInforMenu[_i] === targetId) {
                    selectedInforMenu.splice(_i, 1);
                    _i--;
                  }
                }
              }
        
              alert("자주 찾는 정보는 최대 6개 까지 설정이 가능합니다.");
              return false;
            }
          }
        });
          initializeMenus();
  })

  function initializeMenus() {
    if (selectedInforMenu.length) {
      selectedInforMenu = [];
    }
      document.querySelector("#selectedBox").innerHTML = "\n  <li class=\"tab-act\">\n    <span>선택하세요</span>\n  </li> <li class=\"tab-act\">\n    <span>선택하세요</span>\n  </li> <li class=\"tab-act\">\n    <span>선택하세요</span>\n  </li> <li class=\"tab-act\">\n    <span>선택하세요</span>\n  </li> <li class=\"tab-act\">\n    <span>선택하세요</span>\n  </li> <li class=\"tab-act\">\n    <span>선택하세요</span>\n  </li> ";
        

      if (window.NodeList && !NodeList.prototype.forEach) { /*IE에서 forEach를 지원하지 않을때 왼쪽 코드와같이 사용가능*/
        NodeList.prototype.forEach = Array.prototype.forEach;
        document.querySelectorAll(".tabMenu02 input[type='checkbox']").forEach(function (i) {
          return i.checked = false;
        });
      }

   
  }


