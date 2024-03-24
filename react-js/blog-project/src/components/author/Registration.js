import { useRef } from "react";

const Registration = (props) => {
  let { setShowPopUp } = props;
  //  element intance
  let newUser = {
    name: useRef(),
    email: useRef(),
    mobile: useRef(),
    password: useRef(),
    c_password: useRef(),
  };

  const saveNewUser = async () => {
    let _newUser = {
      id: Date.now(),
      name: newUser.name.current.value,
      email: newUser.email.current.value,
      mobile: newUser.mobile.current.value,
      password: newUser.password.current.value,
      c_password: newUser.c_password.current.value,
    };

    delete _newUser.c_password; // delete confirm password

    let url = "http://localhost:3004/users";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_newUser),
    };
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data);
  };
  return (
    <>
      <section className="pop-registration ">
        <section className="user-registration">
          <form action="#">
            <div>
              <label htmlFor="fullName">Name</label>
              <input
                ref={newUser.name}
                type="text"
                id="fullName"
                placeholder="Enter FullName"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                ref={newUser.email}
                type="text"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                ref={newUser.mobile}
                type="text"
                id="mobile"
                placeholder="Enter Mobile"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                ref={newUser.password}
              />
            </div>
            <div>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="text"
                id="cpassword"
                placeholder="Enter Confirm Password"
                ref={newUser.c_password}
              />
            </div>
            <div>
              <button
                type="button"
                id="save"
                className="btn btn-success"
                onClick={saveNewUser}
              >
                Save
              </button>
              <button
                type="button"
                className="cancel btn btn-danger"
                onClick={() => setShowPopUp(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Registration;
