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
