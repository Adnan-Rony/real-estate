import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Error from "./layout/ErrorPage";
import Home from "./components/Home";
import Login from "./layout/Login";
import AuthProvider from "./authintication/AuthProvider";
import Register from './layout/Register';
import Contact from "./components/Contact";
import CategoriesDetails from './components/CategoriesDetails';
import PrivateRoute from './layout/PrivateRoute';
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
        path: "/details/:id",
        element: <PrivateRoute><CategoriesDetails/></PrivateRoute>,
        loader:()=>fetch('/categories.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
