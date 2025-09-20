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

```js
const App = () => {
  const [user, setUser] = useState({ name: 'Ajex Joshy', age: 18 });
  return (
    <>
      <p>{user.name}</p>
      <p>{user.age}</p>

      <button
        onClick={() => {
          setUser({ ...user, name: 'Elon' });
          setUser({ ...user, age: 45 });
        }}
      >
        Update user
      </button>
//  Here, you’re using the user variable from the closure (the value of user at the time of render).
// multiple state updates happen quickly in one render cycle, this can lead to using stale state.
// Result → you’ll end up with only one update applied (whichever runs last).

      <button
        onClick={() => {
          setUser((prev) => ({ ...prev, name: 'Nikhil' }));
          setUser((prev) => ({ ...prev, age: 35 }));
        }}
      >
        Update user
      </button>
// This uses the functional updater form of setState.
// React guarantees that prev is always the most recent state, even if multiple updates are queued.
// This is the safer and recommended way when your new state depends on the old state.
      <button
        onClick={() => {
          setUser((prev) => {
            return { ...prev, name: 'Jack' };
          });
          setUser((prev) => {
            return { ...prev, age: 40 };
          });
        }}
      >
        Update user
      </button>
    </>
  );
};

```

now lets study State in more detail

### State

State is a fundamental concept in React that gives a component its own **memory**. It is a way for a component to store and manage data that can change over time. When a component's state changes, React automatically re-renders that component to reflect the new data.

---

### a. Behavior

A state variable's value is stored and managed by React. Unlike a regular local variable, its value is **preserved across re-renders**. When you update a state variable, React queues the update and then schedules a re-render of the component. This allows the UI to stay in sync with the data.

### b. Queueing Updates

State updates are often **asynchronous** and **batched** for performance. React groups multiple `setState` calls together and executes them at once. This prevents unnecessary re-renders.

For example, if you call `setCount` twice in a row with a direct value:

```jsx
setCount(count + 1); // count is still the old value
setCount(count + 1); // count is still the old value
```

The state will only increase by 1, not 2. To fix this, you should use the **updater function**.

### c. The Updater Function

The updater function is the second element returned by `useState`. It's the **only correct way** to update state. When the new state depends on the previous one, you should pass a function to the updater function. React guarantees that this function's argument will be the latest state.

```jsx
// Correct: Using an updater function
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1); // Now state increases by 2
```

### d. Updating Objects

When your state is an object or an array, you must create a **new object** with the updated values. You cannot directly mutate the existing one. The spread operator (`...`) is the standard way to do this.

```jsx
const [user, setUser] = useState({ name: "Alice", age: 28 });

// Correct: Creates a new object by spreading the old one
setUser({ ...user, age: user.age + 1 });

// Incorrect: This is a local mutation and will not work as expected
user.age = user.age + 1;
setUser(user);
```

---

### e. Local Variable vs. State Variable

This is a critical distinction for new developers.

- A **local variable** is a regular variable that is re-initialized on every render. Its value is **not preserved** across renders, and its changes **do not trigger a re-render**.
- A **state variable** is managed by React. Its value is **preserved** across renders, and changes **do trigger a re-render**.

<!-- end list -->

```jsx
function Example() {
  let localCount = 0; // A local variable
  const [stateCount, setStateCount] = useState(0); // A state variable

  const incrementLocal = () => {
    localCount = localCount + 1; // UI will not update
  };

  const incrementState = () => {
    setStateCount(stateCount + 1); // UI will re-render
  };

  return (
    <div>
      <p>Local: {localCount}</p>
      <p>State: {stateCount}</p>
      <button onClick={incrementLocal}>Add Local</button>
      <button onClick={incrementState}>Add State</button>
    </div>
  );
}
```

---

### f. Local Mutation

Local mutation is the act of directly modifying the state variable without using the setter function (e.g., `user.age++`). This is a bad practice. It leads to the UI becoming desynchronized with the component's internal state because React won't know the value has changed and will not trigger a re-render.

### g. Lifting State

**Lifting state** is a pattern for sharing state between sibling components. The state is moved from the child components to their closest common parent. The parent then manages the state and passes it down to the children via props. If a child needs to update the state, the parent passes an updater function down as a prop.

### h. Reducer

The `useReducer` hook is an alternative to `useState` for managing more **complex state logic**, especially when state updates depend on the previous state or when state is an object with multiple properties. It takes a reducer function (which handles state updates) and returns the current state and a `dispatch` function to trigger updates. It's often preferred for complex state management over a series of `useState` calls.
