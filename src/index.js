import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Calender from "./pages/Calender";
import Todo from "./pages/Todo";
import TimeTools from "./pages/TimeTools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/timetools",
        element: <TimeTools />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
