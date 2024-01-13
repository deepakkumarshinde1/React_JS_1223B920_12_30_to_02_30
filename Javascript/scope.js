let number3 = 30;

function fun(number2, number3) {
  let number = 10;
  number3 = 80;
  // number2, number4, number ==> local scope variable
  console.log(number, number2, number3);
}

// number3 --> global scope
fun(20, number3);

console.log(number3);

// console.log(number4);

function fun2() {
  if (100 === 100) {
    var text = "hello";
  }

  console.log(text);
}

fun2();

// IIFE
// function base function
function abc() {
  console.log("abc");
}

abc();

// function expression
let pqr = function () {
  console.log("pqr");
};
pqr();

// arrow function
let xyz = () => {
  console.log("xyz");
};

xyz();

// callback function
function lmn(callback) {
  callback();
}

lmn(function () {
  console.log("this is a callback");
});

lmn(() => {
  console.log("arrow function this is a callback");
});

//IIFE ==> immediately invoked function expression

(function (number) {
  console.log("IIFE ", number);
})(10);

/// hoisting

let text1 = "hello";
var text2 = "hello2";
const text3 = "hello3";
