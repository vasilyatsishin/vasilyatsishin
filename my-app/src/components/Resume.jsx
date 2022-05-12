import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import styles from "./Resume.module.css";
import SignUP from "./signup/SignUP";
const Resume = () => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<SignUP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Resume;
