import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from './Layout.jsx/HomeLayout';
import Root from './Layout.jsx/Root';
import Uncomplete from './Layout.jsx/Uncomplete';
import Completed from './Layout.jsx/Completed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorEvent></ErrorEvent>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>
      },
      {
        path: '/uncomplete',
        element: <Uncomplete></Uncomplete>
      },
      {
        path: '/completed',
        element: <Completed></Completed>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
