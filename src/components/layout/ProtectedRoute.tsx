import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector((state) => state?.auth);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
