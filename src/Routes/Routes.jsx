import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/main/Main";
import Home from "../pages/home/home/Home";
import Destination from "../pages/destination/destination/Destination";
import Blog from "../pages/Blog/Blog/Blog";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/names')
        },
        {
            path: '/destination/:id',
            element: <Destination></Destination>,
            loader: ({params}) => fetch(`http://localhost:5000/names/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]

  }  
])

export default router ;