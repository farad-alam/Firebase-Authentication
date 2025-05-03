import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.js'
import FirebaseAuthProvider from './context/FirebaseAuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
    <RouterProvider router={router} ></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>,
)
