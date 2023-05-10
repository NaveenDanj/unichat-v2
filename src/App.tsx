import AppLayout from "./layouts/AppLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPasswordForm from "./pages/auth/reset-password/ResetPasswordForm";
import MobileLayout from "./layouts/MobileLayout";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<AppLayout />}>
          </Route>

          <Route path="/mb" element={<MobileLayout />} >
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
