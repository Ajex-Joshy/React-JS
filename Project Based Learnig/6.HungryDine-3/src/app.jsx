import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Menu from "./components/Menu.jsx";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const Instamart = lazy(() => import("./components/Instamart.js"));

const AppLayout = () => {
  const [loggedUser, setLoggedUser] = useState({ name: "default" });

  useEffect(() => {
    // code to fetch data
    const userInfo = { id: 1, name: "Ajex", age: 18 };
    setLoggedUser(userInfo);
  }, []);
  return (
    <Provider store={appStore}>
      {/* default value set in the context variable */}
      <UserContext.Provider value={{ ...loggedUser, setLoggedUser }}>
        {" "}
        {/* overriding the default value */}
        {/* value of logged user */}
        <div className="app">
          <Header />
          {/* <UserContext.Provider value={{ name: "Akshai" }}> */}
          {/* value will be  { name: "Akshai" }*/}
          <Outlet />
          {/* </UserContext.Provider> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

{
  /* <div className="app">
  <UserContext.Provider value={loggedUser}>
    <Header />
  </UserContext.Provider>
  <Outlet />
</div>; */
}

// here the loggedUser will be only available in header and its child components
