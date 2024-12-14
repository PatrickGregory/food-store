import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import foodRouter from './route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from '../context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={foodRouter} />
    </UserProvider>
  </StrictMode>,
)
