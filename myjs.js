/*
alert("Hello Everyone!");
const a = 10;
//a = 50;

var myname = "test";
alert(myname);

let myplace = "tvm"
alert(myplace);

let mytext = "Ajmi"
alert(mytext.length)

let str = "Hello and Welcome"
//let part = str.slice(4,10)

//let part = str.slice(-11,-4);
//let part = str.slice(5);
//let part = str.substring(5);
//let part = str.substr(3,2)
//alert(part);

//replace
newtext = "Hi, There! How are you";
let subtext = newtext.replace("How","Who");
alert(subtext);

//joining two text
let str1 = " Hope you're fine";
let joinedtext = newtext.concat(str1)
alert(joinedtext);

//changing
alert(str1.toUpperCase());
alert(str1.toLowerCase());

//let str3 = "   hi   hello"
a//lert(str3.trim());

alert(str.charAt(3))


//basic arithmetic
var a = 3, b = 2;
var result = a + b;
alert(result)
//evaluating the mathematical expression
var x =10, y = 20;
var a = eval("x * y + 2 + 1")
alert(a)

//logical opertaion & comparison
a = 5, b = 10, c = 5;
var result = a === b;
alert(result);
var res2 = a !== b;
alert(res2)
var res3 = a>b;
alert(res3);


//conditional operators
var a = 5, b=10;
if(a > b)
{
    alert(a +" is greater than " + b)
}
else
{
    alert(a +" is less or equal to " + b)
}

//switch case
switch(new Date().getDay())
{
    case 1:
        day = " Monday"
        break;
    case 2:
        day = " Tuesday"
        break;
    case 3:
        day = " Wednesday"
        break;
    case 4:
        day = " Thursday"
        break;
    case 5:
        day = " Friday"
        break;
    default:
        day = "It's a weekend"
}
alert(" Today's " + day)


//LOOPS IN JS
//while loop
var a = 5;
while(a<10){
    alert(a);
    a++;
}

for(var a = 1; a < 10; a++){
    alert(a);
}

//Functions in JS
//method 1
var add = function(a,b)
{
    return a + b;
};
var result = add(2,3);
alert(result);

//method 2
function add(a,b)
{
    return a+b;
}
var result = add(8,3);
alert(result);

//method 3 => arrow functions
var add = (a,b) =>{
    return a+b;
};
var result = add(7,3);
alert(result);

var square = a =>{
    console.log("The number is" + a)
    return a * a;
};
var result = square(7);
console.log(result);

var square = a => a*a;
var result = square(7);
console.log(result);

//Mapping an array to an arrow function
var myarray = [2,4,6];
var sqarray = myarray.map(a=>a*a)
console.log(sqarray);

//arrays in js
var myarray = [];
myarray = ['apple','orange','grapes'];
//alert(myarray[0]);
myarray[0] = 'watermelon'
//alert(myarray[0]);
console.log(myarray.length);
myarray.push("Strawberry")
myarray.push("Peach")
console.log(myarray.length);
myarray.pop()
console.log(myarray.length);
//looping through arrays
for(var i = 0; i < myarray.length; i++){
    alert(myarray[i]);
}
myarray.forEach(i => {
    console.log(i)
});

//concat for immutable arrays
var myarray = [];
myarray = ['apple','orange','grapes'];
var myarray2 = myarray.concat("Orange")
alert(myarray2);

//Destructuring Assignment in Arrays
const t = [1, 2, 3, 4, 5]
const[first,second,...rest] = t
console.log(first) //1
console.log(second) //2
console.log(rest) //3,4,5

//JS objects : collection of named properties and methods
var student = {
    name: "ajmi",
    age: 22,
    talk: function(){
        alert("Hello all")
    }
};
alert(student.name); //ajmi
student.name = " Anu";
alert(student.name); //Anu
alert(student.age);//22
student.talk(); //Hello all

//nested obbjects
var student = {
    name: "ajmi",
    age: 22,
    talk: function(){
        alert("Hello all")
    }
};
student.address = {
    door_no:15,
    district:"TVM"
};
alert(student.address.door_no);

//creating empty object
var car = {};
//adding properties
car.model = "Swift";
//adding methods
car.stop = function(){
    alert("Car stopped!");
};
alert(car.model);
car.stop();


//this keyword
var car = {};
car.model = "Swift";
car.stop = function(){
    alert(this.model+" Car stopped!");
};
alert(car.model);
car.stop();


var student = {
    name: "ajmi",
    age: 22,
    talk: function(){
        alert("Hello " +this.name);
    },
    add: function(a,b){
        alert(a+b);
    }
};
var addition_method = student.add;
addition_method(1,4); //will print 5
var talk_method = student.talk;
talk(); //will not work
*/

//JS on OOPS, simulating OOPS, class syntax introduced in ES6 version
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    greet(){
        console.log("Hello, I am " + this.name);
    }
}
var tom = new Person('Tom', 34);
tom.greet();
var jerry = new Person('Jerry', 40);
jerry.greet();
