import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Error/ErrorPage.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import SignUp from './components/SignUp.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AddArts from './components/AddArts/AddArts.jsx';
import { ToastContainer } from 'react-toastify';
import AllArts from './components/AllArts/AllArts.jsx';
import CardDetails from './components/CardDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://crud-operaion.vercel.app/arts')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/allArts',
        element: <PrivateRoute>
          <AllArts></AllArts>
        </PrivateRoute>,
        loader: ()=> fetch('https://crud-operaion.vercel.app/arts')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <CardDetails></CardDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://crud-operaion.vercel.app/arts/${params.id}`)
      },
      {
        path: '/AddArts',
        element: <PrivateRoute>
          <AddArts></AddArts>
        </PrivateRoute>
      },
      {
        path: '/myArts'
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
