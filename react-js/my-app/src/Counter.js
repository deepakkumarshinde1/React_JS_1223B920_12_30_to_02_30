import { useState } from "react";

const Counter = (props) => {
  let { count } = props;
  let [counter, setCounter] = useState(count); // [value,updateFunction]
  // number , string , null , boolean , [] , {} , [{},{},{},{}]

  const inc = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <section className="text-center">
        <h1 className="text-magenta">{counter}</h1>
        <button className="btn btn-success btn-sm" onClick={inc}>
          INC
        </button>
      </section>
    </>
  );
};

export default Counter;
