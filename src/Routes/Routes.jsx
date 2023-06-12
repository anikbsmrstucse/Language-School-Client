import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'classes',
            element:<AllClasses></AllClasses>,
        }
      ]
    },
  ]);

  export default router;