import { createBrowserRouter } from 'react-router-dom';
import Login from '../page/Login';
import App from '../App';
import NotFound from '../page/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routes;
