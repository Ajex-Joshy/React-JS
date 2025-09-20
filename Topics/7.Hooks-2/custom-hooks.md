### Custom Hooks

As we know a hook is a javascript function
While writin a custom hook first see what is the input you are taking to hook and what is the output you are returning

Then first build the structure and then write operations
also note that will write use in front of hook function as part of naming convention

for eg we can write a hook that will take a url as input and return two state data, error which contains the data, error from the API

so first we will write the contract

```js
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  return [data, error];
};

export default useFetch;
```

then we will write operations

```js
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          const err = await res.json();
          setError(err);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return [data, error];
};

export default useFetch;
```

now if want to use this hook

```js
import useFetch from "./utils/useFetch.js"

const App = () {

    const [data, error] = useFetch("https://api.github.com/users/Ajex-Joshy");

    return (
        <>
            {data && <h1>{data.name}</h1>}
            {error && <h1>{error}</h1>}
        </>
  );

}

// This helped us to make our code more compact and readable
```

**Why Use Custom Hooks?**

- Reusability : They let you share complex logic (like managing a form, handling data fetching, or setting up a timer) across your application, so you only have to write it once.

- Separation of Concerns : They help keep your components clean and focused on rendering. The complex, non-UI logic is moved into a separate hook, making your component code easier to read and maintain.
