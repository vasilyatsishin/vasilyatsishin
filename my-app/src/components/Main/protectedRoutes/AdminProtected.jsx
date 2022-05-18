import { useState } from "react";
import { Navigate } from "react-router-dom";

const AdminProtected = () => {
  const [isAuth, setIsAuth] = useState(false);
  return isAuth === false ? <Navigate to="/login" /> : null
};

export default AdminProtected;
