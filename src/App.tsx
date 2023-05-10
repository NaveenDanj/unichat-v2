import AppLayout from "./layouts/AppLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPasswordForm from "./pages/auth/reset-password/ResetPasswordForm";
import MobileLayout from "./layouts/MobileLayout";


import { useDispatch } from 'react-redux'
import { setCurrentDevice } from './store/app/DeviceSlice'
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch()

  const isMobile = () => {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      return true ;
    } else {
      return false ;
    }
  }

  useEffect(() => {
    console.log(isMobile());
    if(isMobile()){
      dispatch(setCurrentDevice('mobile'));
    }else{
      dispatch(setCurrentDevice('web'));
    }
  } , []);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ isMobile() == false ? (<AppLayout />) : (<MobileLayout />) }>
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ResetPasswordForm />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
