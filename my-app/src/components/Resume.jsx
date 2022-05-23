import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import styles from "./Resume.module.css";
import SignUP from "./signup/SignUP";
import Admin from "./admin/Admin";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
const Resume = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<ProtectedRoute isAuth={isAuth} setIsAuth={setIsAuth}/>}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<SignUP isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Resume;
