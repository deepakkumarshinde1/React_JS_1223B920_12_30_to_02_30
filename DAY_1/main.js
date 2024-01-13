// variables --> temp --> string, number, boolean
// keywords

// change data
var studentName = "Deepakkumar";
var studentName = "Deepakkumar";
studentName = "Varun";

// change data , not able to make re-declaration
let mobileNumber = 8007070845;
mobileNumber = 123;

// not able change data, not able to make re-declaration
const isPresent = false;
//   isPresent = true;

// console.log(studentName);
// console.log(mobileNumber);
// console.log(isPresent);

// datatypes
// String ,Number ,Boolean , Object , Undefined

// let variable = 1 + Number("5");

// console.log(variable);
// console.log(typeof variable);

/// arithmetic operators
// + - / * %

/// assignment operators
//  =  +=  -= %= *= /=

/// compare operators
// <  > <= >= === !==

/// logical operators
// && || !

// Compare Statements
// if...else
// let userLogin = true;
// if (userLogin === true) {
//   // true
//   console.log("User is login");
// } else {
//   // false
//   console.log("User is not login");
// }

let number1 = 1;
let number2 = true;

if (number1 !== number2) {
  console.log("Yes");
} else {
  console.log("No");
}
// switch

let subscriptionPlan = ""; // free(limited) mobile(360p) sd(720p) hd(1080p) 4k

switch (subscriptionPlan) {
  case "mobile":
    console.log(
      "You are having mobile i.e 360p subscription plan, upgrade to sd plan"
    );
    break;
  case "sd":
    console.log(
      "You are having sd i.e 720p subscription plan, upgrade to hd plan"
    );
    break;
  case "hd":
    console.log(
      "You are having hd i.e 1080p subscription plan, upgrade to 4k plan"
    );
    break;
  case "4k":
    console.log("You are having 4k. update to date");
    break;
  default:
    console.log(
      "You are having no subscription plan. subscribe to enjoin ads free entertainment"
    );
    break;
}

// array and object
// array collection of key-value pair
//where keys are auto-gen
let array = [10, 20, "deepak", true, null, [11, 12, 13, 14]];
// array key always start with zero
console.log(array.length);

//read, add , delete , update , sort , search ,
//reduce , re-create array , join , split, concat

let student = {
  roll_no: 10,
  marks: 30,
  name: "deepakkumar",
  age: 32,
}; // JSON --> Javascript Object Notation

// JSON --> JSON array  0   , 1  ,  2
// let studentList = [{...},{...},{...}]

// js Object collection of key-value
//but here keys are user-define

// functions
// function set code to create re-usable logic

function add(varA = 0, varB = 0) {
  let result = varA + varB;
  return result;
  // function code
} // function definition

// run --> function call
let result = add(10, 29, 50);

console.log(result);
// undefined

// scope -->

let a = 20;
let b = 30;

if (a === 20) {
  let a = 80;
  console.log(a + b);
} else {
  console.log(a + b);
}
console.log(a);
