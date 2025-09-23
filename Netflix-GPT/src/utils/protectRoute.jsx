import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  // const user = useSelector((store) => store.user);
  // if (!user) return <Navigate to="/" replace />;
  return children;
};

export default ProtectRoute;
