import React from 'react';
import{AppRouter} from './routes/router'
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return <RouterProvider router={AppRouter()}/>
}
export default App;
