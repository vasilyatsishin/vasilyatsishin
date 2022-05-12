import { NavLink } from "react-router-dom";
import styles from "./NextInfo.module.css";

const NextInfo = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <p>Знання та навички:</p>
        <ul></ul>
        <br />
        <p>
          Досвід роботи:<span></span>
        </p>
        <p>Освіта:</p>
        <ul style={{ listStyleType: "none", margin: "0" }}></ul>
        <p>Додаткова інформація:</p>
        <ul></ul>
      </div>
      <div className={styles.buttonWrapper}>
        <NavLink to={"/login"} className={styles.navlink}>
          Sign UP
        </NavLink>
      </div>
    </>
  );
};

export default NextInfo;
