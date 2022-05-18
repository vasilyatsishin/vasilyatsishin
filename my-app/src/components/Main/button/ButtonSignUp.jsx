import styles from "./ButtonSignUp.module.css"
import { NavLink } from "react-router-dom";

const ButtonSignUp = ({ path, text, func }) => {
  return (
    <>
      <NavLink to={path} className={styles.navlink} onClick={func}>
        {text}
      </NavLink>
    </>
  );
};

export default ButtonSignUp