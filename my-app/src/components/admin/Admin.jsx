import Edit from "./edit/Edit";
import styles from "./Admin.module.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./animations.css";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.wrapper}>
      <h1>Змінити резюме</h1>
      <Edit isOpen={isOpen} setIsOpen={setIsOpen} />
      <CSSTransition in={isOpen} timeout={500} classNames="alert" unmountOnExit>
        <div className="chel">
          <p>Зміни прийняті</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Admin;
