import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inventory from './components/Inventory/Inventory.jsx'
import Home from './components/Layout/Home.jsx'
import Login from './components/Login/Login.jsx'
import Orders from './components/Orders/Orders.jsx'
import Shop from './components/Shop/Shop.jsx'
import './index.css'
import cartProductsLoader from './loaders/cartProductsLoader.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
