import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Menu from "./components/Menu.jsx";

const Instamart = lazy(() => import("./components/Instamart.js"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// suppose if we have a page for instamart also then we would have 1000s of components
// what bundlers will do in the sense they will bundle all tht javascript together (we can see in newtwork tab)
// but loading all the components initially at once will take delay
// so we will implemennt lazy loading that is instead of loading at once we will load according to the demand
// so if we have components for instamart it wont load in the initial time it will load only when we
// request api to instamart
// to implement this we have a function provided by the react called lazy and we will import inside it
// but also we have to wrap it in Supense component because when we access the api it will take say
// a 10ms to return data but react is super fast it will try to render it before the data arrives and
// hence it throws error to avoid that we will use Supense
// how Supense works
