import './App.css';
import "./style.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar"
import RightBar from './components/rightbar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';


   

function App() {
  const{darkMode}=useContext(DarkModeContext)

  const Layout=()=>{
    return(
      <div className={`theme-${darkMode?"dark":"light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )

  }

  const currentuser=true;

  const ProtectedRoute=({children})=>{
    if(!currentuser){
      return <Navigate to="login"/>

    }
    return children;

  }

  const router=createBrowserRouter([
    {
      path:"/",
      element:(<ProtectedRoute>
        <Layout/>
        </ProtectedRoute>),
      children:[
        {path:"/",element:<Home/>},
        {path:"/profile/:id" ,element:<Profile/>}
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
