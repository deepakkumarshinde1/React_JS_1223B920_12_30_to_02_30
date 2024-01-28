let saveButton = document.querySelector("#save-todo");
let todoInput = document.querySelector("#todo-input");
let list = document.querySelector("#list");
let sortList = document.querySelector("#sort-list");
let editIndex = -1;

let todos = ["Ab", "Abc", "C", "D", "a", "b", "c"];
printData();
// add event
saveButton.addEventListener("click", function () {
  let value = todoInput.value.trim();
  if (value === "") return false;

  if (editIndex === -1) {
    todos.unshift(value);
  } else {
    todos[editIndex] = value;
    saveButton.innerHTML = `<span class="fa fa-save me-1"></span>Save`;
    editIndex = -1;
  }
  printData();
});

// [val1, val2 , va3]
function printData() {
  let newArray = todos.map(function (item, key) {
    return `<li class="edit list-group-item" data-id="${key}">
              <button 
                class="setDisabled btn btn-danger btn-sm remove" data-id="${key}">
                DEL
              </button> ${item}
            </li>`;
  });
  // convert array to a string ==> join
  let _list = newArray.join("");
  list.innerHTML = _list;

  // event inject
  addRemoveEvents();
  addEditEvents();
}

// click we want to make a sort
let sort = false;
sortList.addEventListener("click", function () {
  if (editIndex == -1) {
    sort = !sort;
    sortList = todos.sort(function (a, b) {
      // string
      a = a.toLowerCase();
      b = b.toLowerCase();

      if (sort) {
        //  ascending
        if (a < b) return -1;
        if (a > b) return 1; // shuffle
        return 0;
      } else {
        // descending
        if (a > b) return -1;
        if (a < b) return 1; // shuffle
        return 0;
      }
    });
    printData();
  }
});

// delete record
function addRemoveEvents() {
  let removeBtnList = document.querySelectorAll(".remove"); // []
  // remove element
  removeBtnList.forEach(function (removeBtn) {
    removeBtn.addEventListener("click", function () {
      let index = this.dataset.id;
      todos.splice(index, 1); // ArrayIndex, deleteCount  ==> [100,200,300]
      alert("Deleted Successfully");
      printData();
    });
  });
}

function addEditEvents() {
  let editBtnList = document.querySelectorAll(".edit"); // []
  // edit element
  editBtnList.forEach(function (editBtn) {
    editBtn.addEventListener("dblclick", function () {
      let index = this.dataset.id;
      let data = todos[index];
      editIndex = Number(index);
      todoInput.value = data;
      setDisabled(true);
      saveButton.innerHTML = `<span class="fa fa-history me-1"></span>Update`;
    });
  });
}

function setDisabled(value) {
  document.querySelectorAll(".setDisabled").forEach(function (element) {
    element.disabled = value;
  });
}
