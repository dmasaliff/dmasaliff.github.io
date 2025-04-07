import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/LoginPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css';
import './LoginPage.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.jsx'
import DetailProductPage from './pages/DetailProductPage.jsx'
import {Provider} from "react-redux"
import store from "./redux/store.js"
import DarkModeContextProvider from './context/DarkMode.jsx'
import { TotalPriceProvider } from './context/TotalPriceContext.jsx'

const router = createBrowserRouter([
  {
    path: '/products',
    element: <ProductsPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/product/:id',
    element: <DetailProductPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/loginPage',
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router}/>
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
