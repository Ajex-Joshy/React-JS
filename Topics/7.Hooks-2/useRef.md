now lets study useRef hook

### useRef

understand the difference between state, ref and variable

state, variale, ref are used to store values but there are difference betweem them lets explore

**Re-Render**
changing a state variable will trigger rerendering but
changing variale or ref does not trigger rerendering

**Persistent**
Values in state and ref are persitent meaning if the component re-rendered the values in state and ref will not change but the value in a variable will reset to the initial value

**now lets declare and initialize**

```js
let a = 0;
const [b, setB] = useState(0);
const c = useRef(0);
```

useRef returns a object which has one key `current` which has the value as current value in the reference

**now lets access these variables**

```js
const App = () => {
  return (
    <>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>c: {c.current}</p>
    </>
  );
};
```

**now lets update the variables**

```js
const App = () => {
  a = 1; // no re-rendering & not persistent
  setB(1); // re-rendering & persistent
  c.current = 1; // no re-rendering & persistent
  return (
    <>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>c: {c.current}</p>
    </>
  );
};
```

so finally **useRef** is a React Hook that lets you reference a value which persists across component re-renders without causing a re-render when its value changes.

now lets see the usecases

**1. Storing Mutable Values Without Re-render**
we can store values like timerId which we need to be mutable, persistent and does not re-render

**2. Accessing DOM Elements**

- Managing Focus and Text Selection: Programmatically focusing on input fields, selecting text, or controlling the cursor position within text areas.
- Triggering Imperative Animations: Initiating animations or transitions that require direct manipulation of DOM element properties, such as playing/pausing a video, showing/hiding a modal, or sliding a drawer.

```js
import { useState, useEffect, useRef } from "react";

const App = () => {
  let intervalId = useRef();
  let timeoutId = useRef();
  const inputRef = useRef(); // has the reference to the input box
  const [correctAns, setCorrectAns] = useState(null);
  const [msg, setMsg] = useState("");
  const [timer, setTimer] = useState(10);

  function handleSubmit() {
    inputRef.current.style.backgroundColor = "yellow";
    if (/elon/i.test(inputRef.current.value)) {
      setCorrectAns(true);
      clearTimeout(timeoutId.current);
      clearInterval(intervalId.current);
    } else {
      setCorrectAns(false);
    }
  }

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setMsg("Time out! you failed");
      clearInterval(intervalId.current);
    }, 11000);

    intervalId.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (correctAns) setMsg("Congratulation you won");
    else if (correctAns === false) setMsg("OOPS! you failed");
  }, [correctAns]);

  return (
    <>
      <h3>Who is the richest man in the world</h3>
      <input type="text" id="inp" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <h1>Time: {timer}</h1>
      <h1>{msg}</h1>
    </>
  );
};

export default App;
```

study dom event handling

do create-react-app and vite
