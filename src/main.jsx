import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoApp from "./components/todo/TodoApp.jsx"; // Adjust the import path as necessary
import ProductPage from "./pages/products.jsx"; // Adjust the import path as necessary
import UsersPage from "./pages/users.jsx"; // Adjust the import path as necessary  
import LoginPage from "./pages/login.jsx"; // Adjust the import path as necessary
import RegisterPage from "./pages/register.jsx"; // Adjust the import path as necessary
import ErrorPage from "./pages/error.jsx"; // Adjust the import path as necessary
import "./style/global.css"; // Assuming you have a global CSS file
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />, // Assuming ErrorPage is imported from the correct path
    children: [
      {
        index: true,
        element: <TodoApp />, // Assuming TodoApp is imported from the correct path
      },
      {
        path: "/products",
        element: <ProductPage />, // Assuming ProductPage is imported from the correct path
      },
      {
        path: "/users",
        element: <UsersPage />, // Assuming UsersPage is imported from the correct path
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />, // Assuming LoginPage is imported from the correct path
  },
  {
    path: "/register",
    element: <RegisterPage />, // Assuming RegisterPage is imported from the correct path
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
