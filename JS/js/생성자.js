function User(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name)
  }
  // return this
  // 위에 2개의 주석은 안보이지만 new연산자를 사용할 경우 이런식으로 동작함
}

let user1 = new User('mike', 30);
let user2 = new User('jane', 22);
let user3 = new User('tom', 17);

user3.sayName(); // tom


function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${this.price}원 입니다.`)
  }
}

const item1 = new Item('인형', 3000);
item1.showPrice(); //가격은 3000원 입니다.