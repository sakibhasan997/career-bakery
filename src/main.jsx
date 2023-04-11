import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import App from './App';
import Statistics from './component/Statistics';
import AppliedJobs from './component/AppliedJobs';
import Blog from './component/Blog';
import CartDetails from './component/CartDetails';
import ErrorPage from './component/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('Featured.json'),
      },
      {
        path: '/cartDetails/:id',
        element: <CartDetails/>,
        loader: ({params}) => fetch('/Featured.json'),
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs/>
      },
      {
        path: '/blogs',
        element: <Blog/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
