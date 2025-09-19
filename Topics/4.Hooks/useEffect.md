The **useEffect** hook is a fundamental hook in React that lets you perform side effects in functional components. A side effect is any operation that interacts with the "outside world" and can't be done during the rendering process itself. This includes data fetching, setting up subscriptions, manually changing the DOM, and setting timers.

**How It Works**
The useEffect hook takes two arguments:
useEffect(callback, dependencies)

The callback is a function that contains your side effect logic.

The dependencies is an optional array of variables that tells React when to re-run the effect.

By default, useEffect runs after every render of the component. However, the dependency array gives you fine-grained control over this behavior.

**The Dependency Array: Controlling When Effects Run**

It allows you to specify the conditions under which your side effect should be executed.

There are 3 secenarios lets see one by one

**1. No Dependency Array**

- If you omit the dependency array, the effect will run after every single render of the component. This is often a mistake, as it can lead to performance issues, like an infinite loop in a data-fetching scenario.

```js
useEffect(() => {
  // This effect runs after every render.
  console.log("Component rendered!");
});
```

**2. Empty Dependency Array ( [ ] )**

- Passing an empty array tells React to run the effect only once, after the initial render of the component. This is the most common use case for fetching data from an API or setting up initial subscriptions.

```js
useEffect(() => {
  // This effect runs only once after the component mounts.
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
```

**3. With Dependencies ( [var1, var2] )**

- If you put variables inside the dependency array, the effect will run after the initial render and again whenever any of those variables change. This is useful for synchronizing your component with changes to a prop or state variable.

```js
function Profile({ userId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This effect runs on mount and whenever 'userId' changes.
    fetch(`https://api.example.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [userId]); // The effect depends on the 'userId' prop.

  return <p>{data ? data.name : "Loading..."}</p>;
}
```

**The Cleanup Function**
Some side effects, like setting up a subscription or a timer, require a cleanup step to prevent memory leaks. You can return a function from your useEffect callback to perform this cleanup. This function runs when the component is unmounted or just before the effect is re-run.

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer is running...");
  }, 1000);

  // The cleanup function is returned.
  return () => {
    // This runs when the component unmounts or before the next effect runs.
    clearInterval(timer);
    console.log("Timer is cleaned up!");
  };
}, []);
```

**Why we can’t write async function in useEffect()**
We can’t directly make the callback of useEffect an async function because:

1. What React expects
   • useEffect expects the callback to either return nothing or a cleanup function.
   • If you write async () => { ... }, the function automatically returns a Promise.
   • React would then think you’re returning a cleanup function, but it actually gets a Promise
   → which is not valid.

. Correct way to handle async inside useEffect

You define an inner async function and call it:

```js
useEffect(() => {
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://api.example.com/data");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);
```

So, instead of making useEffect(async () => {...}),
you wrap the async logic inside the effect.

**What is useLayoutEffect?**

- useLayoutEffect is a React hook similar to useEffect, but it runs synchronously after all DOM mutations and before the browser paints the screen.
- This means it blocks the paint until your effect finishes.
- It’s useful when you need to measure DOM elements or synchronously make changes that should be visible before the user sees the UI.

```js
useLayoutEffect(() => {
  // Your effect logic
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]);
```

**Difference between useEffect and useLayoutEffect**
s

<table border="1">
  <tr>
    <th>Feature</th>
    <th>useEffect</th>
    <th>useLayoutEffect</th>
  </tr>
  <tr>
    <td>When it runs</td>
    <td>After paint (async, non-blocking)</td>
    <td>Before paint (sync, blocking)</td>
  </tr>
  <tr>
    <td>Performance impact</td>
    <td>Better (doesn’t block rendering)</td>
    <td>Can cause jank if heavy</td>
  </tr>
  <tr>
    <td>Use case</td>
    <td>Data fetching, subscriptions, logging</td>
    <td>DOM measurements, layout adjustments</td>
  </tr>
  <tr>
    <td>User experience</td>
    <td>UI may paint first, then effect applies</td>
    <td>Effect applies before UI is shown</td>
  </tr>
</table>
