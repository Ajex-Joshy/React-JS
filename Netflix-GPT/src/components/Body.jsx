import Browse from "./Browse";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./login";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={appRoutes}></RouterProvider>
    </div>
  );
};

export default Body;
