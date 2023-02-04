class Person {
    private name : string;
    public age : number;
    readonly log : string;
    // private, public, readonly - 변수의 접근범위

    constructor(name : string ,age : number){
        this.name = name;
        this.age = age;
    }
}