"use strict";
var myName;
myName = 'test';
console.log(myName);
myName = 1;
console.log(myName);
var name1 = 'testName';
var name2 = 34;
var name3 = false;
var name4;
var heroes = ["supmerman", "hulk", "batman"];
heroes = [12];
//Tuple
var classA = ["Students", 20];
classA = ["teachers"];
console.log(classA);
var classB = ["Students", 20];
classB = ["teachers", 123];
console.log(classB);
console.log(classB[0]);
//enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 10] = "Blue";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Red"] = 12] = "Red";
})(Color || (Color = {}));
var color1 = Color.Blue;
console.log(color1);
var color2 = Color.Green;
console.log(color2);
//any
var batmanCal = "K5";
console.log(batmanCal);
batmanCal = { makeer: "kia", manufactured: 2017 };
console.log(batmanCal);
//function return type
var testName = "nameeeee";
function returnMyName() {
    return testName;
}
console.log(returnMyName());
//function argument types
function muliply(value1, value2) {
    return value1 * value2;
}
console.log(muliply(2, 2));
//function Types
var superMultipy;
superMultipy = muliply;
// superMultipy = returnMyName;
console.log((superMultipy(20, 111)));
// Types of Objects: Properties = key+value
var heroName = { name: 'superman', age: 224 };
heroName = { name: 'batman', age: 32 };
console.log(heroName);
var heroName1 = { name: 'iranman', age: 42 };
console.log(heroName1);
// Union types
// 2가지 이상의 type의 데이터가 사용될경우 |를 이용해서 타입의 선택을 확장할 수 있다
var heroTeam = ['superman', 'batman'];
console.log(heroTeam);
heroTeam = [101, 102];
console.log(heroTeam);
// typeof
var finalWineer = 'batman';
if (typeof finalWineer == 'string') {
    console.log(finalWineer);
    console.log('88line ok');
}
else {
    console.log('90line error');
}
var finalWineer2 = 2;
if (typeof finalWineer2 == 'string') {
    console.log(finalWineer);
}
else {
    console.log('96line error');
}
// Scope
var batman_scope = 'Level one';
console.log(batman_scope);
function suerFunction() {
    var spiderman = 'Level Two';
    console.log(spiderman);
    function ironman_scope() {
        var Hulk_scope = 'Level Three';
        console.log(Hulk_scope);
    }
    ironman_scope();
}
suerFunction();
