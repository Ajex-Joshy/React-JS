### useContext hook

The useContext hook is a powerful tool for managing global state in a React application. It lets you subscribe to React's Context API from a functional component, providing a clean way to share data across your component tree without having to manually pass props down through every level.

lets see the problem first

**The Problem: Prop Drilling**
Before useContext, if a deeply nested component needed data from a top-level component, you had to pass that data as a prop through every intermediate component in between. This is known as "prop drilling," and it makes your code verbose and difficult to maintain.

**The Solution: The Context API**
The Context API provides a solution by creating a "global" channel for data. you can access it from any component of the app.
It consists of three main parts that work together:

**1. createContext 2. Provider component 3. useContext**

lets see each one in detail

#### 1. createContext

First we will create a new context object. We usually create it in a new file

```js
import { createContext } from "react";

const userInfo = createContext({
  name: "default",
  age: 0,
  email: "default@gmal.com",
});

export default userInfo;
```

This is our global state. We can access it anywhere from our app. The changes made to the global state will reflect globally in our app.

#### 2. Provider component

To make data availalble to our app, we should provide it to our app
So we will wrap our app (or parent component of which all child components needs to access this state) using provider.
let me show you

```js
import userInfo from "./contextApi/userInfo.js"
import Head from "./components/Head.jsx"
import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx"


const App = () => {
    return (
        <>
            <userInfo.Provider>
                <Head />
                <Body />
                <Footer />
            <userInfo.Provider />
        </>
    )

}
```

This make our userInfo available to the Head, Body, Footer and its child components, in short the whole app.
suppose if we only want the data available for Body component then we will wrap the provider only for Body component

But now we can access the default value now. When the user loggedIn we have to update our global state

To update we will pass new data in the value prop\
lets see that

```js
import { useEffect, useState } from "react";
import userInfo from "./contextApi/userInfo.js";
import Head from "./components/Head.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://todo-app-bv20.onrender.com/auth/user", {
        credentials: "include",
      }); // {credentials: "include"} is to sent data in cookies along with request

      if (!res.ok) {
        const errData = await res.json();
        setError(errData.msg); // { msg: "error message" } - data we get from  backend
        return;
      }
      const userData = await res.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <userInfo.Provider value={user}>
        <Head />
        <Body />
        <Footer />
      </userInfo.Provider>
    </>
  );
};
```

now we have set the actual logged user data to userInfo context
now if we access the userInfo anywhere from the app we will get the logged user info;

now lets see how can we access the data from our components

### useContext hook

we acess the data in the context from components using useContext hook
we will pass the context as parameter to the useContext hook
let see how to do it

```js
import { useContext } from "react";
import userInfo from "./contextApi/userInfo.js";

const Profile = () => {
  const userData = useContext(userInfo);
  const { name, age, email } = userData;

  return (
    <>
      <h1>name: {name}</h1>
      <h3>age: {age}</h3>
      <h3>email: {email}</h3>
    </>
  );
};
```

**useContext** is perfect for managing state that rarely changes and is needed by many components throughout the application. Common use cases include:

User authentication state (isLoggedIn, user.name).
UI themes (light/dark mode).
User preferences (language, currency).

For state that changes frequently or involves complex logic, a dedicated state management library like Redux Toolkit or Zustand is often a better choice.
