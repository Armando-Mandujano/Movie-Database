import { Home, Popular, TopRated, Favorites, NowPlaying, Upcoming } from '../pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from './constants';
import { RouteObject } from 'react-router-dom';
import { Show } from '../pages/Show';
import { Register } from '../pages/Register';
import { useAppContext } from '../store/app-context/app-context';
import { Login } from '../pages/Login';

export const AppRouter = () => {
  const { user } = useAppContext();
  const isLoggedIn = Boolean(user);

  const routes: RouteObject[] = [
    {
      path: ROUTES.HOME,
      element: isLoggedIn ? <PrivateRouter /> : <Navigate to={ROUTES.LOGIN} />,
      children: [
        { path: ROUTES.HOME, element: < Home/> },
        { path: ROUTES.POPULAR, element: <Popular /> },
        { path: `${ROUTES.SHOW}:id`, element: <Show /> },
        { path: ROUTES.TOP_RATED, element: <TopRated /> },
        { path: ROUTES.FAVORITES, element: <Favorites /> },
        { path: ROUTES.NOW_PLAYING, element: <NowPlaying /> },
        { path: ROUTES.UPCOMING, element: <Upcoming /> }
      ]
    },
    {
      path: '/',
      element: isLoggedIn ? <Navigate to={ROUTES.HOME} /> : <PublicRouter />,
      children: [
        { path: ROUTES.LOGIN, element: <Login /> },
        { path: ROUTES.REGISTER, element: <Register /> },
      ]
    },
  ];

  return createBrowserRouter(routes);
}



