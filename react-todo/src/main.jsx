import React from "react";
import ReactDOM from "react-dom/client";
import ThemedApp from "./ThemedApp";
import About from "./About";
import Contact from "./Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <ThemedApp /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
