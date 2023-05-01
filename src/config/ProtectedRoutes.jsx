import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { isRegistered } = useSelector((store) => store.user);
  if (!isRegistered) {
    return <Outlet />;
  } else {
    return <Navigate to="/main" />;
  }
};

export default ProtectedRoutes;
