import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Error } from "../Tostify";

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
    try {
      let _newUser = {
        id: Date.now(),
        name: newUser.name.current.value,
        email: newUser.email.current.value,
        mobile: newUser.mobile.current.value,
        password: newUser.password.current.value,
        c_password: newUser.c_password.current.value,
      };

      if (_newUser.name === "") {
        Error("Enter Name");
        return false;
      }

      if (_newUser.email === "") {
        Error("Enter Email Id");
        return false;
      }

      if (_newUser.mobile === "") {
        Error("Enter Mobile Number");
        return false;
      }

      if (_newUser.password === "") {
        Error("Enter Password");
        return false;
      }

      if (_newUser.c_password === "") {
        Error("Enter Confirm Password");
        return false;
      }

      if (_newUser.password !== _newUser.c_password) {
        Error("Enter Password and COnfirm Password do not match");
        return false;
      }

      delete _newUser.c_password; // delete confirm password

      // userCheck
      let userCheck = `http://localhost:3004/users?email=${_newUser.email}`;
      let { data: isUserExist } = await axios.get(userCheck);

      if (isUserExist.length > 0) {
        Swal.fire({
          icon: "warning",
          title: "User Already Exists, with given email",
        });

        return false;
      }

      let url = "http://localhost:3004/users";
      let { data } = await axios.post(url, _newUser);

      Swal.fire({
        icon: "success",
        title: "User Registration done successfully",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        setShowPopUp(false);
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Server Error, Try again",
        showConfirmButton: false,
        timer: 3000,
      });
    }
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
