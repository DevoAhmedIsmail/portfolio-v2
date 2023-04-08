import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomeRoot from './roots/HomeRoot'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home/>,
        index: true,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
