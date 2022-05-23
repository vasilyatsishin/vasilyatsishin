import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import styles from "./Resume.module.css";
import SignUP from "./signup/SignUP";
import Admin from "./admin/Admin";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import { AdminMediumRoute, PrivateMediumRoute } from "./AdminRoute";

const Resume = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
                path="/admin"
                element={<PrivateMediumRoute Component={Admin} redirectPath={"/login"} isAuth={isAuth} />}
          />
          <Route
              path="/login"
              element={<AdminMediumRoute Component={SignUP} redirectPath={"/admin"} isAuth={isAuth} setIsAuth={setIsAuth}/>}
          />


            {/*<Route*/}
            {/*    path="/login"*/}
            {/*    element={*/}
            {/*        <ProtectedRoute isAuth={isAuth}>*/}
            {/*            <Admin />*/}
            {/*        </ProtectedRoute>*/}
            {/*    }*/}
            {/*/>*/}
            {/*<Route path="/login" element={<SignUP />} />*/}
            {/*<Route path="/admin" element={<Admin />} />*/}
          {/*<Route element={<ProtectedRoute isAuth={isAuth}/>} >*/}
          {/*  */}
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Resume;
