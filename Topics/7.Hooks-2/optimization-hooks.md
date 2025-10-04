now let study about some performance optimization hooks

### React.Memo, useMemo, useCallback

before diving into these hooks, lets understand

- How react re-renders component
- props and state triggers re-render
- parent render causing child re-render
- performance problem in large apps

when a state or props changes the react re-renders that component
By default react also re-renders the child components also
React uses the VDOM and diffing algorithm to find out what exactly has changed and updates the real dom efficiently

```js
const DisplayName = ({ name }) => {
  console.log("child rendered");
  return <div>Name: {name}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <DisplayName name="Ajex" />
    </div>
  );
};
```

Here when we click increment button the App component re-renders also even though the props is DisplayName is not changed it re-renders
This is where preformance issues can occur in large applications

**If a parent re-renders, all children re-render by default—even if their props didn’t change.
Changing unrelated state in a parent can cause unnecessary child re-renders.**
In large apps with many children or heavy calculations, this causes performance bottlenecks.

so here comes the React.memo to prevent unnecessary

### React.memo

React.memo is used to prevent unneccessary renders of functional component when props did not change

```js
const DisplayName = React.memo(({ name }) => {
  console.log("child rendered");
  return <div>Name: {name}</div>;
});

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <DisplayName name="Ajex" />
    </div>
  );
};
```

Here if when click increment button the child component will not re-render

**React.memo is a higher-order component (HOC) in React used for performance optimization. It prevents functional components from re-rendering unnecessarily if their props have not changed.**

lets see the working of React.memo

- When a component is wrapped with React.memo, React "memoizes" (caches) the rendered output of that component
- On subsequent renders, React compares the new props with the previous props using a shallow comparison (Object.is).
- If the props are shallowly equal, React.memo reuses the cached output and skips the re-rendering process for that component, leading to performance improvements.
- If the props are different, the component re-renders as usual.

NB: do not use it for frequently changing props - the overhead of the prop comparison might outweigh the benefits of memoization.

### The next problem

- When a component re-renders, all the functions inside the components are re-created
- In Javascript functions are objects
- Each time a object / function is re-created, its reference in memory is different
- As we know React.memo use shallow comparison
  - In shallow comparison primitive datatypes are compared by value and non-primitive datatypes are compared by references
- When React.memo compares the function prop it sees a new reference so it re-renders the child components
- Even the functions is same React.memo compares the reference and it re-renders

```js
const Child = React.memo(({ greet }) => {
  console.log("child rendered");
  return (
    <div>
      <button onClick={greet}>Greet</button>
    </div>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const welcome = () => {
    console.log("welcome");
  };
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child greet={welcome} />
    </div>
  );
};
```

**so here comes our useCallback()**

### useCallback

Now lets see how useCallback fix this problem

The useCallback memoizes a function, means it keeps the same function reference across renders unless dependencies change

so when we wrap our function with useCallback, during re-renders the function is not re-created unless the dependencies change. since function is not re-created the reference stays the same in memory

so if we pass this function to the React.memo, it sees the child prop with same function reference, hence the shallow comparison passes and the child component is not re-rendered

lets see how to implememt it

```js
const Child = React.memo(({ greet }) => {
  console.log("child rendered");
  return (
    <div>
      <button onClick={greet}>Greet</button>
    </div>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const welcome = useCallback(() => {
    console.log("welcome");
  }, []);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child greet={welcome} />
    </div>
  );
};
```

now lets see different scenarios with dependency array

**1. empty dependency array**

```js
const greet = useCallback(() => {
  console.log("Hello");
}, []);
```

- The function is only created at once on first render
- It will never be re-created, no matter how many times the component re-renders

**2. Dependency array with state or prop**

```js
const greet = useCallback(() => {
  console.log(`Hello ${count}`);
}, [count]);
```

- Function is re-created only when the count changes
- keeps reference stable unless dependecies change

**3. No dependency array**

```js
const greet = useCallback(() => {
  console.log("Hello");
});
```

- Function is re-created on every re-render, just like normal function

  **Tips for dependency arrays**

1. Include everything your function uses:
   • State or props used inside the function must go in the dependency array.
   • Otherwise, function may use stale values.
2. Empty array is safe only for static functions:
   • Functions that don’t rely on any changing values.
3. Overusing dependencies can recreate function too often:
   • Only include values that actually affect the function.

### Welcome Next Problem!

now I will tell a scenarion where we have an expensive function for demo, lets say a function sum that adds 1 to 1 billion

we have called the function in the component

also we have given it in useCallback to prevent unncessary re-creation, but..

when the component re-renders every time even though the function reference remains the same, the expensive function is executed on every render

so on every render adding 1 to 1 billion causes performance bottleneck.

so we only want to execute the function only if the value changes. If the value of the function is same in the previous render we does not want the function to execute again and get the same value

To solve this problem **useMemo** comes into picture

```js
const Parent = () => {
  const [count, setCount] = useState(0);
  const sum = () => {
    console.log("Calculating expensive sum");
    let total = 0;
    for (let i = 0; i < 1e9; i++) total += i;
    return total;
  };

  let res = sum();

  return (
    <div>
      <h1>count: {count}</h1>
      <h1>sum: {res}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};
```

here if when the component re-renders the sum function is re-excuted
Lets see how to prevent that

### useMemo

The useMemo returns the memoized value of the function & will not re-execute the funtion unless the dependencies change

```js
const Parent = () => {
  const [count, setCount] = useState(0);

  const sum = () => {
    console.log("Calculating expensive sum");
    let total = 0;
    for (let i = 0; i < 1e9; i++) total += i;
    return total;
  };
  let res = useMemo(() => sum(), []);

  return (
    <div>
      <h1>count: {count}</h1>
      <h1>sum: {res}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};
```

we can also use useMemo to make the non-primitive datatypes to give stable reference

for eg if we want to pass an array or object to child components, on each render the reference changes and child unnecessarily re renders. To avoid that we should keep the reference stable. useCallback is only
for function. So for array and objects we use useMemo

```js
const Profile = ({ user }) => {
  const userInfo = useMemo(() => {
    return {
      name: user.name,
      email: user.email,
      age: user.age,
    };
  }, [user]);

  return <UserCard info={userInfo} />;
};
```
now the reference of of userInfo will only change when the user changes
NB: The UserCard is wrapped in React.memo

use useCallback only if you want to pass a function to child as prop

for passing value of function dont use useCallback, here we should memoize the value of function so use use useMemo

Memoize function -> useCallback (passing function as props)
Memoize function value -> useMemo (passing function values as props)
