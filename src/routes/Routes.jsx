import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/Alltoys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys/MyToys";
import PrivateRoute from "../pages/provider/PrivateRoute";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import About from "../pages/About/About";

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
          path: '/about_us',
          element: <About></About>,
        },
        {
          path:'/all_toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://assignment-11-my-heroes-server-rezwan563.vercel.app/all_toys')
        },
        {
          path:'/my_toys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'add_toy',
          element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/toy/:id',
          element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-my-heroes-server-rezwan563.vercel.app/all_toys/${params.id}`)
        },
        {
          path:'/update_toy/:id',
          element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-my-heroes-server-rezwan563.vercel.app/all_toys/${params.id}`)
        },
        
       
      ],
      
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
   
  ]);

export default router;