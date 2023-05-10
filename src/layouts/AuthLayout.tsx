import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex justify-center items-center bg-white h-[100vh]">
        <Outlet />
    </div>
  )
}

export default AuthLayout