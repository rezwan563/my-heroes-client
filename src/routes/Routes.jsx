import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/Alltoys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/all_toys',
          element: <AllToys></AllToys>,
        },
        {
          path:'add_toy',
          element:<AddAToy></AddAToy>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
      ]
    },
   
  ]);

export default router;