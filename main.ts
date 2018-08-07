let myName;
myName = 'test';
console.log(myName);
myName = 1;
console.log(myName);

let name1: string ='testName';
let name2: number = 34;
let name3: boolean = false;
let name4: any;

let heroes: any[] = ["supmerman", "hulk", "batman"];
heroes = [12]

//Tuple
let classA = ["Students", 20];
classA = ["teachers"]
console.log(classA);
let classB:[string, number] = ["Students", 20];
classB = ["teachers",123];
console.log(classB);
console.log(classB[0]);


//enum
enum Color{
    Blue= 10,
    Green,
    Red
}

let color1 = Color.Blue;
console.log(color1);
let color2 = Color.Green;
console.log(color2);

//any
let batmanCal:any = "K5";
console.log(batmanCal);
batmanCal = {makeer:"kia", manufactured:2017}
console.log(batmanCal);


//function return type
let testName = "nameeeee";
function returnMyName(): string{
    return testName;
}
console.log(returnMyName());

//function argument types
function muliply(value1:number, value2:number){
    return value1 * value2;
}

console.log(muliply(2,2));

//function Types
let superMultipy: (a: number, b:number) => number;

superMultipy = muliply;
// superMultipy = returnMyName;
console.log((superMultipy(20,111)));


// Types of Objects: Properties = key+value
let heroName:{name:string, age:number} ={name: 'superman', age:224};
heroName = {name:'batman', age:32};
console.log(heroName);

// custom types
type heroName1={name:string, age:number};
let heroName1: heroName1 = {name:'iranman', age:42};
console.log(heroName1);


// Union types
// 2가지 이상의 type의 데이터가 사용될경우 |를 이용해서 타입의 선택을 확장할 수 있다
let heroTeam: string[]|number[] = ['superman', 'batman'];
console.log(heroTeam);
heroTeam = [101,102];
console.log(heroTeam);

// typeof
let finalWineer = 'batman';
if(typeof finalWineer == 'string'){
    console.log(finalWineer);    
    console.log('88line ok');    
}else{
    console.log('90line error');    
}
let finalWineer2 = 2;
if(typeof finalWineer2 == 'string'){
    console.log(finalWineer);    
}else{
    console.log('96line error');       
}


// Scope
let batman_scope = 'Level one';
console.log(batman_scope);
function suerFunction(){
    let spiderman = 'Level Two';
    console.log(spiderman);
    function ironman_scope(){
        let Hulk_scope = 'Level Three';
        console.log(Hulk_scope);
    }    
    ironman_scope();
}
suerFunction();

// Arrow Function
function aMultiply(number1:number, number2:number): number{
    return number1+number2;
}
console.log(aMultiply(3,5));
//1.Anonymous function
let aaMultiply = function(number1:number, number2:number): number{
    return number1+number2;
} 
console.log(aaMultiply);
console.log(aaMultiply(4,5));
//2.Fat Arrow function
let aaaMultiply = (number1:number, number2:number):number => number1+number2;
console.log(aaaMultiply);
console.log(aaaMultiply(5,5));

// Rest & Spread
// 1. Spread
let Snumbers = [1,2,3,4,5];
console.log(Snumbers);
console.log(...Snumbers);
console.log('max value', Math.max(1,2,3,4,5,6));
// console.log('max value', Math.max(Snumbers)); -- 배열을 넣기 때문에 오류
console.log('max value', Math.max(...Snumbers)); //-- 배열을 풀어넣어주기때문에 가능
// 2. Rest
function totalWage(numbers:number[]){
    let sum = 0;
    for(let i in numbers){
        sum += numbers[i];
    }
    return sum;
}
// console.log(totalWage(10,20));  //argument는 배열을 요청하기 때문에 오류 발생
console.log(totalWage([10,20]));    // 배열로 만들어서 넣어주는 방법이 있음
// 또는 function totalWage(...numbers:number[]){ 로 수정해주면 10,20으로 넣어줄수 있음
function totalWage2(fixedPay:number, ...numbers:number[]){
    let sum = 0;
    for(let i in numbers){
        sum += numbers[i];
    }
    return sum+fixedPay;
}
console.log(totalWage2(100,10,20)); // 맨앞에 고정값을 지정하고 뒤의 숫자들은 배열을 spred해서 입력 가능

//Template Literals
let hero1 = "superMan";
let address1 = "jejudo";
let introduction = hero1 + " lives at " + address1;
console.log(introduction);
let introduction2 = `${hero1} lives at ${address1}`;
console.log(introduction2);




