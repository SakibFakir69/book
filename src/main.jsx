import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Errorpage from './Error/Errorpage.jsx'
import Home from './MidContent/Home.jsx'


const router =  createBrowserRouter([

  {
    path  :'/',
    element : <App/>,
    errorElement : <Errorpage></Errorpage>,
    children : [
      {
        path : 'home',
        element : <Home></Home>
      }
    ]
  },
  // now create nav and footer view under rootElement



])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>

  </StrictMode>,
)
