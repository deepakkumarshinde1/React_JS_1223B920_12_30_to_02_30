fun();

/// hoisting
let text1 = "hello";
var text2 = "hello2";
const text3 = "hello3";

console.log(text2);

function fun() {
  console.log("fun");
}
