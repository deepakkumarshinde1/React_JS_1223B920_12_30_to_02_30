// change text
// change color to red

// change the text on button click

// onclick of button we want to set the input text to h1 element

// on enter set a input text to h1 element

// old
// document.getElementById();// id
// document.getElementsByClassName();// className
// document.getElementsByName();// elementName

// new
// document.querySelector();// css selector (single)
//document.querySelectorAll();// css selector (list)

/**
 * selectors
 *  id => #idName
 *  class => .className
 *  element => elementName
 *  group => h1,.class,#id,#id2
 *  universal => *
 *  child =>  parent > child
 *  adjacent =>   parent any_level_child
 *  attribute => input[type=text]
 *  sibling => sibling + sibling
 *  general sibling ==> sibling ~ sibling
 */

// element or elements or null
// element is input , textarea, select ==> value (get / set data)
// element is not input or textarea or select ==> innerHTML (get / set data)

//console.log(h1Element.innerHTML);

// click operation --> event --> user actions
// mouse , keyboards , (load , unload , printbefore)
// add action

let h1Element = document.querySelector("h1");
let button = document.querySelector("#change-h1");
let inputText = document.querySelector(".input-text");

button.addEventListener("click", changeText);

inputText.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    changeText();
  }
});

function changeText() {
  let text = inputText.value;
  h1Element.innerText = text;
  h1Element.style.color = "red";

  // reset input
  inputText.value = "";
}
