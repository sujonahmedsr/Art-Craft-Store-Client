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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <PrivateRoute>
          <Home></Home>
        </PrivateRoute>
        
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

  </React.StrictMode>,
)
