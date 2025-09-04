//glodal scope

var a = "hi"
let b = "hi"
const c = "hi"

//All of this are global outside a function 
console.log(a) //hi
console.log(b) //hi
console.log(c) //hi

let n = () =>{
    console.log(c , a , b)
}


//FUNCTION SCOPE

function xyz(){
    var x = "newHI"
    let y = "newHI"
    const z = "newHI"
    //can be print inside func
    console.log(x) //gives error
console.log(y)
console.log(z)
}
xyz()
// console.log(x) //gives error
// console.log(y) //give error
// console.log(z) //gives error

//BLOCK SCOPE
//dont using if(true) for peoples to understand the code as better as possible
let block = 1
if(block = 1){
    var var1 = "var inside if"
    let let1 = "var inside if"
    const const1 = "var inside if"

console.log(var1)
console.log(let1)
console.log(const1)
}

console.log(var1) //not block scoped leaks outside the if block.
// console.log(let1) //block scope not work
// console.log(const1) //its block too so it will not work


//hositing with var

// console.log(delcared); // undifiend

var delcared = 10;
console.log(a); // ans is 10


//hoisting with let and const

// hoisting with let

// console.log(v);   // eroror (refrenxce error)
let v = 5;
console.log(a);   // result will be 5


// hoisting with const
// console.log(m);   // eror (refrence error)
const m = 10;
console.log(m);   // result is 10


//Re-Declaration

//vaar
var fruit = "Apple";
var fruit = "Mango"; // var its old and we can re-assign and redeclare it
console.log("var example:", fruit); // mango dont give any error


// let
// You cannot declare the same variable name twice in the same scope with let
// let city = "Paris";
let city = "London"; //error occured if we redeclare it
console.log("let example:", city);


// const ex
// /same rule as let: re-declaring is not allowed
// const country = "Pakistan";
const country = "Japan"; //error occured if we reassign or redclare it
console.log("const example:", country);


//Re-Assignment

// var => reassign works
var ab = 1;
ab = 2;
console.log(a); // 2

// let => reassign works
let bc = 3;
bc = 4;
console.log(b); // 4

// const => reassign not allowed
const cd = 5;
// cd = 6; // TypeError
console.log(c);


//TDZ

if (true) {
    console.log(x); // ReferenceError
    let x = 5;

    console.log(y); // ReferenceError
    const y = 10;
}

if (true) {
    console.log(z); // undefined
    var z = 15;
}


//When to use var, let, and const:

//var
function greet() {
    if (true) {
        var name = "Ammar"; // function scoped
    }
    console.log(name); // works because var ignores block scope
}
greet();

//let 
for (let i = 0; i < 3; i++) {
    console.log(i); // i exists only inside this block
}
// console.log(i); i is not defined eroro

//const 

const user = { name: "Ammar", age: 20 };
user.age = 21; // allowed
console.log(user);

// user = {}; error will occured

//String Interpolation:

let firstName = "Don";
let lastName = "ahmer";

let fullName = `${firstName} ${lastName}`;

console.log("Full Name:", fullName);

//multi line string
//we uses this ` for multiline
let h = ` 
hi
my name is ammar
`

//simple expersion

let l = 5;
let k = 7;

let p = `The sum of ${l} and ${k} is ${l + k}`;
console.log(p);

//Function Calls in Template Literals

function multiply(x, y) {
    return x * y;
}

let resultMessage = `The product of 4 and 6 is ${multiply(4, 6)}`;
console.log(resultMessage);

//tagged template

// Tag function
function myTag(strings, ...values) {
    console.log("Strings:", strings);
    console.log("Values:", values);
}

// Variables
let name = "AMMAR";
let age = 13;

// Using the tag with a template literal
myTag`Hello, my name is ${name} and I am ${age} years old.`;

//formating
// Tag function
function upper(strings, ...values) {
    return strings.join("").toUpperCase() + values.join(" ").toUpperCase();
}

// Variables
let text = "Ammar live in karachi am i correct, yes she live in";
let livein = "karachi";

// Use tag
let result = upper`Hello ${text}, ${livein}!`;

console.log(result);


//conditional logic

let hour = new Date().getHours();

let message = `Good ${hour < 12 ? "morning" : "afternoon"}! The time is ${hour}:00.`;

console.log(message);

//loops with template 

let shoppingList = ["Milk", "Bread", "Eggs", "Butter"];

let htmlList = `
<ul>
  ${shoppingList.map(item => `<li>${item}</li>`).join("")}
</ul>
`;

console.log(htmlList);


//scaping brackets 

let str = `This string contains a backtick: \``;
console.log(str);

//nested template letretal

let table = `
<table border="1">
  ${[1, 2].map(row => `
    <tr>
      ${[1, 2, 3].map(col => `<td>Row ${row}, Col ${col}</td>`).join("")}
    </tr>
  `).join("")}
</table>
`;

console.log(table);


//simple condition

let ageis = 17;
let canVote = ageis >= 18 ? "Yes" : "No";

console.log("you can", canVote);

//even odd classifier

let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

console.log("The number is:", evenOrOdd);


//garde giver

let score = 85;

let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";

console.log("Grade:", grade);

//logiin status

let isLoggedIn = true;

let statusMessage = isLoggedIn == true ? "Welcome back!" : "Please log in";

console.log(statusMessage);

//dicount

let isMember = true;
let purchaseAmount = 120;

let discount = (isMember && purchaseAmount > 100) 
    ? purchaseAmount * 0.10 
    : 0;

console.log("Discount:", discount);

//dragon

function maxValue(a, b) {
    return a > b ? a : b;
}

// Test
console.log(maxValue(10, 20)); // 20
console.log(maxValue(45, 12)); // 45

//greeting

function greet(name) {
    return (!name || name.trim() === "") 
        ? "hello guest" 
        : `hello ${name}`;
}

// Test
console.log(greet("AMMAR"));  // hello AMMAR
console.log(greet(""));       // hello guest
console.log(greet());         // hello guest

//number new maper

let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);

console.log(newNumbers);

//filtering values

let strings = ["cat", "tree", "sun", "flower", "dog"];

let longStrings = strings.filter(str.length > 3 ? true : false);

console.log(longStrings);


//coping array

let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray]; 

console.log("Original:", originalArray);
console.log("Copy:", copiedArray);

console.log(originalArray === copiedArray); // false

//merage araray

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//giving new vlaues to an array

let num = [2, 3, 4];

let updatedNumbers = [1, ...num, 5];

console.log(updatedNumbers); // [1, 2, 3, 4, 5]

//copying

let originalObject = { name: "ayan", age: 5 };
let copiedObject = { ...originalObject };

console.log("Original:", originalObject); // { name: 'ayan', age: 5 }
console.log("Copy:", copiedObject);       // { name: 'ayan', age: 5 }

// Verify they are not the same reference
console.log(originalObject === copiedObject); // false

//merage

let object1 = { name: "asif", age: 5, city: "krachi" };
let object2 = { age: 30, country: "pakistan" };

let mergedObject = { ...object1, ...object2 };

console.log(mergedObject);


//updting obj

let user = { name: "Ammar", age: 5, email: "etc@gmail" };

let updatedUser = { 
    ...user, 
    email: "newemail@example.com", 
    address: "123 Main St" 
};

console.log(updatedUser);
/*
{
  name: 'Ammar',
  age: 5,
  email: 'newemail@example.com',
  address: '123 Main St'
}
*/

//passing array --

function sum(a, b, c) {
    return a + b + c;
}

let numbe= [10, 20, 30];

console.log(sum(...numbe)); // 60

//combining multiple array 

// Function to combine multiple arrays
function combineArrays(...arrays) {
    // Use spread operator to merge all arrays into one
    return [].concat(...arrays);
}

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let arr3 = [true, false];

let combined = combineArrays(arr1, arr2, arr3);

// Log the combined array
console.log(combined);


//mulitpler

function multiply(factor, ...numbers) {
    let result = numbers.map(num => num * factor);
    return result;
}

// call the function
let multiplied = multiply(2, 1, 3, 5, 7);

// Log the result
console.log(multiplied);

//sperad operater with nested

// Original nested array
let nestedArray = [
    [1, 2],
    [3, 4]
];

// Create a shallow copy using spread operator
let copiedArr = [...nestedArray];

// Modify an inner array in the copied array
copiedArr[0][0] = 99;

// Log both arrays
console.log("Original Array:", nestedArray);
console.log("Copied Array:", copiedArr);

//sim function:

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num; // add each number to total
    }
    return total;
}

console.log(sum(1, 2, 3));        
console.log(sum(5, 10, 15, 20));  
console.log(sum(7));              

//Average function:

function average(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num; // add each number
    }
    return total / numbers.length; // divide by count
}

console.log(average(2, 4, 6));        
console.log(average(5, 10, 15, 20));  
console.log(average(7));               

//first rest

// lets make an array with 5 numbers
let nums = [10, 20, 30, 40, 50];

let [first, ...rest] = nums;

console.log("First:", first);   // 10

console.log("Rest:", rest);     // 20, 30, 40, 50 oo it's crazy

//skip and rest

let colors = ["red", "blue", "green", "yellow", "purple"];

let [, , ...remainingColors] = colors;

console.log("Remaining Colors:", remainingColors);
// green", yello", purple


//basic destruction

let person = {
  name: "Ammar",
  age: 5,
  email: "AMMAR BLA@example.com",
  address: "123 Main Streest"
};


let { name, email, ...rest } = person;

// Show the values
console.log("Name:", name);       
console.log("Email:", email);     
console.log("Rest:", rest);       

//nested destruction

let student = {
  id: 10000000000444434123413234231,
  namee: "azan",
  grades: [85, 90, 92],
  info: {
    age: 20,
    major: "Computer Science"
  }
};

let { id, namee, info: { major, ...restInfo }, ...rest } = student;
console.log("Rest:", { ...rest, info: restInfo });

//even filtereeree

function filterEven(...nums) {
  return nums.filter(n => n % 2 === 0);
}


//combine and sort

function combineAndSooort(...arrays) {
  let combined = [].concat(...arrays);
  return combined.sort((a, b) => a - b);
}

console.log(combineAndSooort([3, 1, 2], [9, 5], [8, 7, 6]));

//basic destruction

let fruits = ["apple", "banana", "cherry"];

let [firstruit, secondFuit, thrdFruit] = fruits;

console.log("ruit:", firstruit);  
console.log("ruit:", secondFuit); 
console.log("ruit:", thrdFruit);   

//skipping elements

let cols = ["red", "green", "blue", "yellow"];

let [numer3333, , tata] = cols;

console.log("Primary Color:", numer3333);   // red
console.log("Tertiary Color:", tata); // blue

//destructurign

let nus = [1, 2, 3, 4, 5];

let [num1, ...rem] = nus;

console.log("First Number:", num1);       
// 1

console.log("Remaining Numbers:", rem); 
// [2, 3, 4, 5]

//basic destructuring

let person8 = {
  nam: "donTheJon",
  ag: 5,
  cit: "karachi"
};

let { nam, ag, cit } = person;

console.log(nam)
console.log(cit)
console.log(ag)

//remaining varibale

let car = {
  make: "toyota",
  model: "corolla",
  year: 2022
};

let { make: carmaker, model: carmodel, year: carrear } = car;

console.log("Car Make:", carmaker);   // toyota
console.log("Car Model:", carmodel); // corolla
console.log("Car Year:", carrear);   // 2022]

//default var

let settings = {
  theme: "dark",
  language: undefined 
};

let { theme, language = "English" } = settings;

//array of arrays

let nestArray = [[1, 2], [3, 4], [5, 6]];

let [[ab], [bcd], [cde]] = nestedArray;

console.log("a:", ab); 
console.log("b:", bcd); 
console.log("c:", cde); 

//obj within an obj

let profile = {
  username: "ammarAhmer",
  details: {
    emaile: "xyz@example.com",
    address: "123 block6 St"
  }
};

let { username, details: { emaile, address } } = profile;

console.log(username);
console.log(emaile);      
console.log(address);   

//the combination

let data = {
  id: 1,
  info: [
    { name: "donTheJon" },
    { age: 5 }
  ]
};

let { id, info: [{ name }, { age }] } = data;

console.log("ID:", id);     // 1
console.log("Name:", name); // donTheJon
console.log("Age:", age);   // 5

//arrays parameters

function xyzy([x, y]) {
  console.log("x:", x);
  console.log("y:", y);
}

xyzy([10, 20]);

xyzy([5, 15]);

xyzy([0, -7]);

//obj paremeter

function displayUser({ name, age }) {
  console.log("Name:", name);
  console.log("Age:", age);
}

displayUser({ name: "donTheJon", age: 5 });

//list name

let book = {
  title: "48lawsofPower",
  author: "AMMAR",
  year: 1925
};

let keys = Object.keys(book);
console.log(keys);


//count properties

let studente = {
  name: "DOnTHeJon",
  age: 20,
  grade: "A",
  school: "Greenwood High"
};

let propCount = Object.keys(studente).length;
console.log("Number of properties:", propCount);
// 4

//iterateOverKeys

let product = {
  name: "Laptop",
  price: 1200,
  category: "Electronics"
};

Object.keys(product).forEach(key => {
  console.log(key + ":", product[key]);
});

//list property valeu

let movie = {
  title: "syara",
  director: "AMMAR",
  year: 2010,
  genre: "Imotional"
};

let values = Object.values(movie);
console.log(values);

//sum values

let scores = {
  math: 90,
  science: 85,
  english: 88
};

let sum = Object.values(scores)
let ansss = scores + scores
console.log("Total Score:", anss);

//itrate over value

let user = {
  username: "DON",
  email: "@example.com",
  location: "karachi"
};

Object.values(user).forEach(value => {
  console.log(value);
});

//list interies

let care = {
  make: "Toyota",
  model: "Corolla",
  year: 2022
};

let entries = Object.entries(care);
console.log(entries);

//convert obj to array

let person6 = {
  firstName: "Don",
  lastName: "ahmer",
  age: 30
};

let personArray = Object.entries(person6);
console.log(personArray);
// [["firstName", "Don"], ["lastName", "ahmer"], ["age", 30]]

//iterate ober interies

let settingss = {
  theme: "dark",
  notifications: true,
  privacy: "high"
};

Object.entries(settingss).forEach(([key, value]) => {
  console.log(key + ":", value);
});

//filterr keys

let MInecratftBox = {
  apples: 5,
  bananas: 12,
  oranges: 8,
  grapes: 15
};

let filteredKeys = Object.keys(MInecratftBox).filter(
  key => MInecratftBox[key] > 10
);

console.log(filteredKeys);

//tranform 

let temperatures = {
  morning: 20,
  afternoon: 25,
  evening: 18
};

let fahrenheitTemps = 20 + 25 + 18

console.log(fahrenheitTemps);

//key value sfwapp

let roles = {
  admin: "AMMARDON",
  editor: "donthejon",
  viewer: "blalblal"
};

let swapped = Object.fromEntries(
  Object.entries(roles).map(([key, value]) => [value, key])
);

console.log(swapped);
// { AMMARDON: "admin", donthejon: "editor", blalblal: "viewer" }

//filters amd , map

let newnum = [1,2,3,4,5,6,7,8,9,10];

function filterAndMap(arr, z, x) {
  return arr.filter(z).map(x);
}

let resultis = filterAndMap(newnum, (n) => { return n % 2 !== 0},  (n) => {return n*n});

console.log(resultis);
// [1, 9, 25, 49, 81]


// Sort and Reduce
let words = ["apple", "banana", "cherry", "date"];
function sortAndReduce(arr, sFn, rFn) {
  return arr.sort(sFn).reduce(rFn);
}
let sortedStr = sortAndReduce(words, (a, b) => a.localeCompare(b), (a, b) => a + b);
console.log("Sorted+Reduced:", sortedStr);

// Simple Callback 
function greet(name, cb) {
  cb("Hello " + name);
}
function printGreeting(msg) {
  console.log(msg);
}
greet("John", printGreeting);

// Async Callback 
function fetchData(cb) {
  setTimeout(() => cb("Data from server"), 1000);
}
function displayData(d) {
  console.log(d);
}
fetchData(displayData);

// Arrow Function 
let add = (a, b) => a + b;
console.log("Add:", add(3, 5));

// Arrow fn with map 
let numse = [1, 2, 3, 4, 5];
let sqNums = numse.map(n => n * n);
console.log("Squares:", sqNums);

// Variable Scope ===
function outer() {
  let x = 42;
  function inner() {
    console.log("x:", x);
  }
  inner();
}
outer();

//clourser
function createCounter() {
  let c = 0;
  return () => console.log(++c);
}
let ctr1 = createCounter();
let ctr2 = createCounter();
ctr1(); ctr1();
ctr2();

// Default Params 
function greet2(name, msg = "Hello") {
  console.log(msg, name);
}
greet2("Alex");
greet2("Alex", "Hi");

// Default Params w/ args 
function calcArea(w = 10, h = 5) {
  return w * h;
}
console.log("Area1:", calcArea());
console.log("Area2:", calcArea(3, 7));

// Map Examples 
let nums2 = [1, 2, 3, 4, 5];
console.log("Squares:", nums2.map(n => n ** 2));

let words2 = ["apple", "banana", "cherry"];
console.log("Upper:", words2.map(w => w.toUpperCase()));

// Filter 
let nums3 = [1,2,3,4,5,6,7,8,9,10];
console.log("Even:", nums3.filter(n => n % 2 === 0));

let words3 = ["apple", "banana", "cherry", "date"];
console.log("Long words:", words3.filter(w => w.length > 5));

// forEach 
[1,2,3,4,5].forEach(n => console.log("Num:", n));
["apple", "banana", "cherry"].forEach(w => console.log("Len:", w.length));

// Reduce ===
console.log("Sum:", [1,2,3,4,5].reduce((a,b)=>a+b,0));
console.log("Concat:", ["Hello","world","this","is","JavaScript"].reduce((a,b)=>a+" "+b));

// Some / Every 
console.log("Has even:", [1,3,5,7,8].some(n => n%2===0));
console.log("Has long word:", words3.some(w => w.length>5));
console.log("All even:", [2,4,6,8,10].every(n => n%2===0));
console.log("All long:", ["elephant","giraffe","hippopotamus"].every(w => w.length>5));

// Find / findIndex ===
console.log("First even:", [1,3,5,7,8].find(n => n%2===0));
console.log("First long word:", words3.find(w => w.length>5));
console.log("Idx first even:", [1,3,5,7,8].findIndex(n => n%2===0));
console.log("Idx long word:", words3.findIndex(w => w.length>5));

// Promise ===
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}
delay(2000).then(()=>console.log("Hello, world!"));

// Promise Chain ===
function fetchData2() {
  return Promise.resolve({id:1, name:"User"});
}
fetchData2().then(d=>console.log("Data:", d));

// Error Handling ===
function fetchUserData(u) {
  return new Promise((res, rej) => {
    if(!u.age) rej("Missing age!");
    else res(u);
  });
}
fetchUserData({name:"Tom"}).catch(err=>console.log("Err:", err));

// Simulate Network Request 
function getWeather(ok=true){
  return new Promise((res,rej)=>{
    setTimeout(()=> ok?res("Sunny"):rej("Network error"),1000);
  });
}
getWeather(true).then(d=>console.log("Weather:",d)).catch(e=>console.log(e));
getWeather(false).then(d=>console.log(d)).catch(e=>console.log("Err:",e));

// Async/Await 
async function sayHello(){
  await delay(2000);
  console.log("Hello, world!");
}
sayHello();

async function getUserData(){
  try{
    let d = await fetchUserData({name:"John", age:20});
    console.log("User:", d);
  }catch(e){ console.log("Err:", e); }
}
getUserData();

// Fetch and Process Data
function fetchUser(){
  return Promise.resolve({id:1, name:"Sara"});
}
function fetchPosts(u){
  return Promise.resolve(["Post1","Post2"]);
}
async function getUserAndPosts(){
  let u = await fetchUser();
  let p = await fetchPosts(u);
  console.log("User:", u, "Posts:", p);
}
getUserAndPosts();

// Error Handling in async 
function fetchUser2(){
  return Promise.reject("User not found");
}
async function getUserInfo(){
  try{ await fetchUser2(); }
  catch(e){ console.log("Err:", e); }
}
getUserInfo();

// Simulate API Calls 
function apiCall(){
  return new Promise((res,rej)=>{
    let t = Math.random()*1000;
    setTimeout(()=>res("Data after "+t.toFixed(0)+"ms"),t);
  });
}
async function getData(){
  try{
    console.log(await apiCall());
    console.log(await apiCall());
    console.log(await apiCall());
  }catch(e){console.log("Err:",e);}
}
getData();

