import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import styles from "./Resume.module.css";
import SignUP from "./signup/SignUP";
import Admin from "./admin/Admin";
import ProtectedRoute from "./ProtectedRoute";

const Resume = () => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<SignUP />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Resume;
