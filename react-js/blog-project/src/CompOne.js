import { useEffect, useState } from "react";

function CompOne() {
  let [inc, setInc] = useState(1); // data / data update
  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("updating");
  }, [inc]);
  return (
    <>
      <button onClick={() => setInc(inc + 1)}>INC</button>
      <h1>{inc}</h1>
    </>
  );
}

export default CompOne;
