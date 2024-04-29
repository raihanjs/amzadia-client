import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import AllBooks from "../Pages/AllBooksPage/AllBooks/AllBooks";
import AuthLayout from "../Layout/AuthLayout";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Auth from "../Pages/Auth/Auth/Auth";
import ResetPassword from "../Pages/Auth/ResetPassword/ResetPassword";
import AllWriters from "../Pages/AllWritersPage/AllWriters/AllWriters";
import AllCategories from "../Pages/AllCategoriesPage/AllCategories/AllCategories";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        element: <AllBooks />,
      },
      {
        path: "writers",
        element: <AllWriters />,
      },
      {
        path: "categories",
        element: <AllCategories />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Auth />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
    ],
  },
]);
