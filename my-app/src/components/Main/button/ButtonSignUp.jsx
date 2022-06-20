import styles from "./ButtonSignUp.module.css"
import { Button } from "rsuite";

const ButtonSignUp = ({ text, func }) => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.navlink} onClick={func} appearance="primary">
        {text}
      </Button>
    </div>
  );
};

export default ButtonSignUp