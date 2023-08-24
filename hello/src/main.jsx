import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./About";
import User from "./User";
// import "./index.css";
// import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/user/:name", element: <User /> }],
  },
  { path: "/about", element: <About /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
