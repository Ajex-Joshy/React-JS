**useState** is a function that takes one argument: the initial state.
It then returns an array with two elements. The convention is to use array destructuring to access these elements.

`const [stateVariable, setStateFunction] = useState(initialValue);`

- `stateVariable`: This is the current value of the state. You can read from it directly in your component's code.

- `setStateFunction`: This is the function you must call to update the state. Calling this function tells React to re-render the component with the new state value.

**NB**: You should never directly modify the stateVariable (e.g., stateVariable = 'new value'). You must always use the setter function provided by useState.

```js
import React, { useState } from "react";

function Counter() {
  // Declare a state variable called 'count' with an initial value of 0.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Every time the button is clicked, setCount is called. React updates the count state, and because the state has changed, React re-renders the Counter component, showing the new value on the screen.

**Example 2: Managing State with an Object**
When your state is an object, you need to be careful not to overwrite the entire object when updating. You should create a new object and merge the old properties with the new ones, which is commonly done using the spread operator (...).

```js
import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    age: 28,
  });

  const updateAge = () => {
    // Correct way: create a new object and merge old properties.
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Get Older</button>
    </div>
  );
}
```
