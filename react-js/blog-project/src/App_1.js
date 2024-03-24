import { useState } from "react";
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";

function AppOne() {
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>CLICK</button>
      {toggle === true ? <CompOne /> : <CompTwo />}
    </>
  );
}

export default AppOne;
