### useReducer

The useReducer hook is an alternative to useState for managing state. It's especially useful for handling complex state logic, where state updates depend on the previous state or where the state involves multiple values. It works by centralizing the state update logic in a separate function, making your components cleaner and more predictable.

The useReducer hook is inspired by the state management pattern used in libraries like Redux.

lets compare and study useState and useReducer

but before that let me explain the working of useReducer

if we have to update state in useState we will pass the new state in updater function (setState())
but in useReducer its not like that
we don’t directly change the state
in useReducer if you want to do make an update we will first we will dispatch an action. this action will call a reducer function. This function will modify our state.

I will explain with an example
we have a counter with three buttons increment decrement and reset.

if we click increment button it will dispatch an increment action. this action will call the respective reducer function. this function will increase our count state

we use useReducers to handle complex logic.
for a simple logic like increment, decrement counter using useReucer make it complicated bcz its easy to use with useState.
but we will understand the useReducer using this simple operation and later we will use it to handle complex operation

now lets see how we can initialize a state

```js
import {useState, useReducer} = from "react"

const [counter, setCounter] = useState({count: 0});
const [counter, dispatch] = useReducer(reducer, {count: 0})

// in useReducer
// counter is the name of the state
// dispatch is the function that we call to dispatch an  action
// reducer is the function that will modify the state according to different actions
// {count: 0} is the initial state
```

now we will implement the counter using useReducer

```js
import React from "react";
import { useState, useEffect, useRef, useReducer } from "react";

const App = () => {
  const inputRef = useRef();
  function reducer(counter, action) {
    switch (action.type) {
      case "increment":
        return { count: counter.count + 1 };
      case "decrement":
        return { count: counter.count - 1 };
      case "reset":
        return { count: 0 };
      case "set":
        return { count: action.payload };
      default:
        return counter;
    }
  }
  const [counter, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>count: {counter.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // to avoid refreshing page after submission
          dispatch({ type: "set", payload: inputRef.current.value });
        }}
      >
        <input ref={inputRef} type="number" />
      </form>
    </>
  );
};
export default App;
```

now while we are dispatching along with type we can also give payload if we have to give any data to be added or removed in state
`dispatch({type: "set", payload: 10})`
10 will be set to count`

### Redux vs useReducer

`useReducer` is a **built-in React hook** for managing complex state locally within a single component, while **Redux** is an **external, standalone library** for managing state globally across an entire application.

They both follow the same core state management principles—a predictable state container, a pure reducer function, and a `dispatch` mechanism—but they differ significantly in their scale and implementation.

---

### Core Differences

| Feature            | `useReducer`                                                                      | Redux                                                                                                                                        |
| :----------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Scope**          | **Local.** Manages state for a single component or a small, local component tree. | **Global.** Manages state for the entire application.                                                                                        |
| **Origin**         | A built-in React hook.                                                            | An external library that must be installed.                                                                                                  |
| **Boilerplate**    | Minimal. You only need to define a reducer and an initial state.                  | Requires more setup (store, actions, reducers), although **Redux Toolkit** has simplified this.                                              |
| **Debugging**      | Basic. You can use React DevTools.                                                | Advanced. Offers powerful DevTools that show every state change, making debugging easier.                                                    |
| **Middleware**     | Does not have built-in support for middleware.                                    | Built-in support for middleware, which is essential for handling side effects like asynchronous API calls (e.g., Redux Thunk or Redux Saga). |
| **Learning Curve** | Relatively simple, especially if you understand `useState`.                       | Steeper. It requires learning new concepts and a specific architecture.                                                                      |

---

### When to Use Each

- **Use `useReducer`** when your state logic is more complex than what `useState` can handle, but the state is **only relevant to a single component or a small subset** of components.
- **Use Redux** when you need to manage state that is shared across the **entire application** and the logic for state changes is complex and requires advanced debugging tools or middleware.

## useContext + useReducer

Combining the `useContext` and `useReducer` hooks is a very common and powerful pattern for managing global state in React. It's often used as a direct alternative to external state management libraries like Redux, especially in medium-sized applications.

The two hooks work together seamlessly: `useReducer` handles all the complex state logic and provides a `dispatch` function, while `useContext` provides the mechanism to pass that state and `dispatch` function to any component in the tree, completely eliminating **prop drilling**.

---

### How the Pattern Works

The pattern establishes a central "store" for your state at a high level in the component tree.

1.  **`useReducer` as the State Engine:** You use `useReducer` in a parent or "provider" component to manage your state. The reducer function contains all the logic for state transitions. This centralizes state management, making it predictable.

2.  **`useContext` as the Distributor:** The `useReducer` hook returns the `state` and the `dispatch` function. You then use `useContext.Provider` to wrap the components that need access to this state. You pass both the `state` and the `dispatch` function into the provider's `value` prop.

3.  **Consumption:** Any component, no matter how deeply nested, can then use the `useContext` hook to access both the `state` and the `dispatch` function. The component gets the state it needs and can dispatch actions to update it without needing any props passed from its parent.

---

### Why Use This Combination?

This pattern offers several significant advantages:

- **Eliminates Prop Drilling**: It solves the problem of passing props through many layers of components that don't need the data themselves.
- **Centralized State Logic**: All state updates are handled in one place—the reducer—which makes your application's behavior more predictable and easier to debug.
- **No External Libraries**: You get many of the benefits of a state management library without having to add a new dependency to your project.
- **Separation of Concerns**: Your presentational components remain simple and only need to get data and dispatch actions. The complex logic is confined to the reducer.

This combination is a great "sweet spot" for many applications, providing a clean and scalable solution for shared state.
