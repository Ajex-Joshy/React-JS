// we usually write one component in a component file but here we write to demonstrate multiple components

function C1() {
  return <h1>Hellow World</h1>; // JSX
}

const c2 = () => <h1>Hello World</h1>; // implictly returns in arrow function

// we can write functional components using regualar and arrow function

const c3 = () => {
  return (
    <>
      <h1>Welcome to my first react app</h1>
      <p>Yaaaa</p>
    </>
  );
};
// To return multiple elements without creating a node we use react element

//------------------------------------------------------------- Embeding Javasicript---------------------------------------------------------------------------------

const c4 = () => {
  let n = 10;
  return (
    <>
      <p>sum of 10 and 20 is {10 + 20}</p>
      <p>
        {n} is {n > 0 ? "positive" : "negative"}
      </p>
    </>
  );
};

//------------------------------------------------------------- Component Composition -------------------------------------------------------------
const c5 = () => {
  return (
    <>
      <p>Deomo of component Composition</p>
      <c1 /> {/* recomended */}
      <c2></c2>
      {c3()}
    </>
  );
};

//------------------------------------------------------------- component with iniline styling -------------------------------------------------------------

function c5() {
  return (
    <h1 style={{ color: "blue", fontSize: "20px", backgroundColor: "white" }}>
      Hello World
    </h1>
  );
}

//------------------------------------------------------------- List with map -------------------------------------------------------------

const c6 = () => {
  let cars = [
    { id: 1, name: "BMW 7", type: "swedan" },
    { id: 2, name: "Defender Octa", type: "SUV" },
    { id: 3, name: "Porsche 911", type: "sports" },
  ];
  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>{car.name}</li>
      ))}
    </ul>
  );
};

//------------------------------------------------------------- Event handlers -------------------------------------------------------------

const c7 = () => {
  return (
    <button className="btn" onClick={() => console.log("btn clicked")}>
      Click Me
    </button>
  );
};

const c8 = () => {
  const btnHandler = () => {
    console.log("btn click");
  };
  return (
    <>
      <button onClick={btnHandler}>Click Me</button>{" "}
      {/* passing function reference. React will call btnHandler only when the button is clicked. */}
      {/* best practice */}
      <button onClick={() => btnHandler()}>Click Me</button>{" "}
      {/* he arrow function is executed only when the button is clicked, which then calls btnHandler(). */}
      {/* use when you need to pass arguments to function */}
      <button onClick={btnHandler()}>Click Me</button>{" "}
      {/* calling the function immediately during render. btnHandler() executes as soon as the component renders, not when clicked. */}
      {/* ❌ Wrong, unless you specifically want it to run on render (rare case). */}
    </>
  );
};

//------------------------------------------------------------- Event handlers -------------------------------------------------------------

// Show different UI based on conditions.

const c9 = () => {
  let cart = [];
  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h1>your cart is empty! Add items</h1>
      ) : (
        <button>Proceed to payment</button>
      )}
    </>
  );
};
