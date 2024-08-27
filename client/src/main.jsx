import { createRoot } from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Program from './Program';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/programme',
        element: <Program />
      },
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
