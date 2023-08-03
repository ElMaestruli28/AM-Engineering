import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppEn from './AppEn.jsx'
import ErrorPage from './assets/components/ErrorPage.jsx'
import Alfano from './Alfano.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"ingles",
    element: <AppEn/>,
    errorElement:<ErrorPage/>,
  },
  {
    path:"soporte",
    element: <Alfano/>,
    errorElement:<ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
