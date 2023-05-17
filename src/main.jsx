import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Categories from "./pages/Categories";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Movies",
    element: <Movies />,
  },
  {
    path: "/Series",
    element: <Series />,
  },
  {
    path: "/Categories",
    element: <Categories />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
