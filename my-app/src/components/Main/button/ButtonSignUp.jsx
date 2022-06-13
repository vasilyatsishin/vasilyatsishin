import styles from "./ButtonSignUp.module.css"
import { NavLink } from "react-router-dom";

const ButtonSignUp = ({ path, text, func }) => {
  return (
    <div className={styles.wrapper}>
      <NavLink to={path} className={styles.navlink} onClick={func}>
        {text}
      </NavLink>
    </div>
  );
};

export default ButtonSignUp