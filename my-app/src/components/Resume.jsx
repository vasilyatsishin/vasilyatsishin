import {BrowserRouter, Route, Routes}  from "react-router-dom";
import Main from "./Main/Main";
import styles from "./Resume.module.css";
import SignUP from "./signup/SignUP";
import Admin from "./admin/Admin";
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
            element={
              <PrivateMediumRoute
                Component={Admin}
                redirectPath={"/login"}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            }
          />
          <Route
            path="/login"
            element={
              <AdminMediumRoute
                Component={SignUP}
                redirectPath={"/admin"}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Resume;
