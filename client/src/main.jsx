import { createRoot } from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Program from './Program';
import Home from './Home';
import About from './About';
import Events from './Events';
import Teachers from './Teachers';
import Enroll from './Enroll';
import Person from './Person';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/programmes',
        element: <Program />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/events',
        element: <Events />
      },
      {
        path: '/teachers',
        element: <Teachers />
      },
      {
        path: '/teachers/:person',
        element: <Person />
      },
      {
        path: '/enroll',
        element: <Enroll />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
