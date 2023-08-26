import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './assets/pages/App.jsx';
import AppEn from './assets/pages/AppEn.jsx';
import ErrorPage from './assets/components/ErrorPage.jsx';
import Alfano from './assets/pages/Alfano.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/soporte',
    element: <Alfano />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/ingles',
    element: <AppEn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
