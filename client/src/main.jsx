import { createRoot } from 'react-dom/client'
import './index.css';
import './responsive.css';
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
import Contact from './Contact';
import Achievements from './Achievements';
import LogIn from './LogIn';
import Admin from './Admin';
import AdminRoot from './AdminRoot';
import AddEvent from './AddEvent';
import EventDetails from './EventDetails';
import Success from './Success';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
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
        path: '/events/:id',
        element: <EventDetails />
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
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/achievements',
        element: <Achievements />
      },
    ]
  }, {
    path:'/admin',
    element: <AdminRoot /> ,
    children: [
      {
        path: 'home',
        element: <Admin />
      },
      {
        path: '',
        element: <LogIn />
      },
      {
        path: 'add-event',
        element: <AddEvent />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
