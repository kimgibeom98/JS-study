// 객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다. 객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부른다. 객체를 만들어보자.
let person = {}
person.name = 'egoing';
person.introduce = function(){
    return 'My name is '+this.name;
}
document.write(person.introduce());

// 객체를 만드는 과정에 분산되어 있다. 객체를 정의 할 때 값을 셋팅하도록 코드를 바꿔보자.

let personobj = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(personobj.introduce());

// 만약 다른 사람의 이름을 담을 객체가 필요하다면 객체의 정의를 반복해야 할 것이다. 객체의 구조를 재활용할 수 있는 방법이 필요하다. 이 때 사용하는 것이 생성자다.


// new 생성자
function Personnew(){}
let p1 = new Personnew();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p1.introduce()+"<br />");
 
let p2 = new Personnew();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p2.introduce());

// 위에 코드는 같은걸 반복하고있다. 이러한 반복을 줄이기위해 new 라는 생성자를 이용해 간결하게 표현하였다.
function personenew02(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is' + '&nbsp'+ this.name;
    }
}

let pnew1 = new personenew02('egoing');
document.write(pnew1.introduce() + '<br>');

let pnew2 = new personenew02('leezche');
document.write(pnew2.introduce());


// 객제치향 - this
function func(){
    if(window === this){
        document.write("window === this");
    }
}
func();
// 위에 함수를 window.func(); 으로 호출해도 정상적으로 출력된다. 
// 이렇듯 모든 함수는 window가 포함되어있으나 생략이 가능하다. 여기서 window는 전역객체이다. 따라서 일반함수도 전역객체에 포함되어있기 때문에 메소드라고 볼 수 있다.

// 메소드에서의 this
let o = {
    func : function(){
        if(o === this){
            document.write("o === this");
        }
    }
}

o.func();
//this 는 메소드가 소속되어있는 객체를 가르킨다. 그렇기때문에 위에 코드에서는 변수o 가 this가 된다.

// 생선자와 this
let funcThis = null; 
 
function Functhis(){
    funcThis = this;
}

let newthis = Functhis();
if(funcThis === window){
    document.write('window <br />');
}
 
let newthis2 = new Functhis();
if(funcThis === newthis2){
    document.write('newthis2 <br />');
}


// apply와 this
let a = {}
let y = {}
function funcapply(){
    switch(this){
        case a:
            document.write('a<br />');
            break;
        case y:
            document.write('y<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
funcapply();
funcapply.apply(a);
funcapply.apply(y);


//  상속의 사용법

function Person02(name){
    this.name = name;
}
Person02.prototype.name=null;
Person02.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person02();
Programmer.prototype.coding = function(){
    return "hello world";
}
 
var p01 = new Programmer('egoing');
document.write(p01.introduce()+"<br />");
document.write(p01.coding()+"<br />");


// prototype chain
function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();
// Sub.prototype.ultraProp = 2;

var t = new Sub();
console.log(t.ultraProp);

// 1. 객체 t에서 ultraProp를 찾는다.
// 2. 없다면 Sub.prototype.ultraProp를 찾는다.
// 3. 없다면 Super.prototype.ultraProp를 찾는다.
// 4. 없다면 Ultra.prototype.ultraProp를 찾는다.


// 배열의 확장
var arrcountry = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random());
    return haystack[index]; 
}
console.log(getRandomValueFromArray(arrcountry));

// 위에 코드를 prototype을 이용해서 코딩
var arrcountry2 = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
Array.prototype.random = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
console.log(arrcountry2.random());



// 오브젝트의 확장

Object.prototype.contain = function(neddle) {
    for(var name in this){
        if(this[name] === neddle){
            return true;
        }
    }
    return false;
}
var b = {'name':'egoing', 'city':'seoul'}
console.log(b.contain('egoing')); // true출력
var j = ['egoing','leezche','grapittie'];
console.log(j.contain('seoul')); // false출력
