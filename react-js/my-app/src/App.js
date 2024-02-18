// import (optional)
import Counter from "./Counter";

// function / class
function App() {
  let counterList = [1, 10, 100, 1000, 40, 50, 60];
  return (
    <>
      <section className="container-fluid">
        <section className="row justify-content-center">
          <section className="col-6 ">
            <h1 className="text-center text-primary">A Counter App</h1>
            {counterList.map((value, index) => {
              return <Counter count={value} key={index} />;
            })}
          </section>
        </section>
      </section>
    </>
  );
}

// export
export default App;
