import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Sections/Home.jsx'
import NotFound from './Components/NotFound.jsx'
import Login from './Components/Login.jsx'
import RegisterPage from './Components/RegisterPage.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import AllJobs from './Sections/AllJobs.jsx'
import AddJob from './Sections/AddJob.jsx'
import MyJobs from './Sections/MyJobs.jsx'
import Blogs from './Sections/Blogs.jsx'
import UserProfile from './Sections/UserProfile.jsx'
import AppliedJobs from './Sections/AppliedJobs.jsx'
import DetailsPage from './Sections/DetailsPage.jsx'
import Blog1 from './Sections/Blog1.jsx'
import Blog2 from './Sections/Blog2.jsx'
import Blog3 from './Sections/Blog3.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path: '/alljobs',
        element: <AllJobs/>,
        loader: () => fetch(`${import.meta.env.API_URL}/jobs`),
      },
      {
        path: '/addjob',
        element: <AddJob/>
      },
      {
        path: "/myjobs",
        element: <MyJobs/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: '/userprofile',
        element: <UserProfile/>
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs/>
      },
      {
        path: '/details/:id',
        element: <DetailsPage/>
      },
      {
        path: "/blogs/blog1",
        element: <Blog1/>
      },
      {
        path: "/blogs/blog2",
        element: <Blog2/>
      },
      {
        path: "/blogs/blog3",
        element: <Blog3/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}/>
    </FirebaseProvider>
  </React.StrictMode>
)
