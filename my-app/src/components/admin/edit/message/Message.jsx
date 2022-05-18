import styles from "./Message.module.css";
import { Input } from "rsuite";
const Message = ({ header, data }) => {

  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>{header}</p>
      <Input className={styles.input} value={data} />
    </div>
  );
};

export default Message;
