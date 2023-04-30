import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/main/Main";
import Home from "../pages/home/home/Home";
import Destination from "../pages/destination/destination/Destination";
import Blog from "../pages/Blog/Blog/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/destination',
            element: <Destination></Destination>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]

  }  
])

export default router ;