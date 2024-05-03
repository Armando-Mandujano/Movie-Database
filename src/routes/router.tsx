import {Home, Popular,TopRated,Favorites,NowPlaying} from '../pages';
import {createBrowserRouter} from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import {ROUTES} from './constants';
import { RouteObject } from 'react-router-dom';
import { Show } from '../pages/Show';


const routes: RouteObject[]=[
    {
        path:'/', element: <PrivateRouter/>,
        children: [
            {path:ROUTES.HOME, element: <Home/>},
            {path:ROUTES.POPULAR, element: <Popular/>,},
            {path:`${ROUTES.SHOW}:id`, element: <Show/>},
            {path:ROUTES.TOP_RATED, element: <TopRated/>},
            {path:ROUTES.FAVORITES, element: <Favorites/>},
            {path:ROUTES.NOW_PLAYING, element: <NowPlaying/>}
        ]
    }
];
export const router= createBrowserRouter(routes);