let saveButton = document.querySelector("#save-todo");
let todoInput = document.querySelector("#todo-input");
let list = document.querySelector("#list");

let todos = ["Task-3", "Task-2", "Task-1"];
printData();
// add event
saveButton.addEventListener("click", function () {
  let value = todoInput.value;
  todos.unshift(value);

  printData();
});

// [val1, val2 , va3]
function printData() {
  let newArray = todos.map(function (item, key) {
    return `<li class="list-group-item"><button class="btn btn-danger btn-sm remove" >DEL</button> ${item}</li>`;
  });
  // convert array to a string ==> join
  let _list = newArray.join("");
  list.innerHTML = _list;

  // event inject

  let removeBtnList = document.querySelectorAll(".remove"); // []
  // remove element
  removeBtnList.forEach(function (removeBtn) {
    removeBtn.addEventListener("click", function () {
      console.log("remove");
    });
  });
}
