// JS Object
let student = {
  name: "Deepak",
  age: 31,
  course: "React",
};

// read
student.age;
student["age"];

let value = "age";
student[value];

// update
student.age = 40;

// delete
delete student.age;

// add
student.mobile = 8007070845;
student["mobile"] = 8007070845;

const product = Object.freeze({
  name: "dell",
  price: 30000,
});

product.name = "LG";

// primitive and non primitive

// string , number , boolean ==> value
// array / js object ==> reference

console.log(product);

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
// Object.seal

let mobile = {
  name: "Real Me",
};

// create new copy of object
// shallow
// let mobile_2 = mobile
// deep copy
let mobile_2 = { ...mobile }; // spread operator

let array = [1, 2, 3, 4, 5, 6];
let array_2 = [...array];

mobile.name = "Samsung";

console.log(mobile);
console.log(mobile_2);

// de-structuring

let user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// let { phone } = user;

// let phone = user.phone
let { phone } = user;

// let mobile_3 = user.phone
let { phone: mobile_3 } = user;

let array_3 = [10, 20, 30, 40, 50];

// let numberOne = array_3[0]
let [numberOne, two] = array_3;

console.log(mobile_3);

// class & arrow function

class SuperUser {
  constructor(data) {
    this.userDetails = data;
  }

  createAccount() {
    console.log(this.userDetails);
  }

  userLogin() {}
  editProfile() {}
}

class Student extends SuperUser {
  // pass a this reference to parent
  constructor(data) {
    super(data);
  }

  makeLike() {}
  makeDislike() {}
}

class Instructor extends SuperUser {
  constructor(data) {
    super(data);
  }
  markAttendance() {}
  addNotes() {}
}

let users = new Student({
  name: "deepakkumar",
});

let instructor = new Instructor({
  name: "3Ri",
});

users.createAccount();
instructor.createAccount();
