// 객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다. 객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부른다. 객체를 만들어보자.
var person = {}
person.name = 'egoing';
person.introduce = function(){
    return 'My name is '+this.name;
}
document.write(person.introduce());

// 객체를 만드는 과정에 분산되어 있다. 객체를 정의 할 때 값을 셋팅하도록 코드를 바꿔보자.

var person = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(person.introduce());

// 만약 다른 사람의 이름을 담을 객체가 필요하다면 객체의 정의를 반복해야 할 것이다. 객체의 구조를 재활용할 수 있는 방법이 필요하다. 이 때 사용하는 것이 생성자다.


// new 생성자
function Person(){}
var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p1.introduce()+"<br />");
 
var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p2.introduce());

// 위에 코드는 같은걸 반복하고있다. 이러한 반복을 줄이기위해 new 라는 생성자를 이용해 간결하게 표현하였다.
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
 
var p2 = new Person('leezche');
document.write(p2.introduce());