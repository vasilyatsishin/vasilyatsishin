import ButtonSignUp from "../button/ButtonSignUp";
import styles from "./NextInfo.module.css";
import { getInfo } from "../../../firebase/firebaseCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NextInfo = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState();
  useEffect(() => {
    getInfo(setStore, "dataFinalProject");
  }, []);

  const skills =
    store?.knowledgesSkills &&
    store?.knowledgesSkills.map((e) => {
      return (
        <>
          <li>{e.data}</li>
        </>
      );
    });

  const education =
    store?.education &&
    store?.education.map((e) => {
      return (
        <>
          <li>{e.data}</li>
        </>
      );
    });

  const anotherInfo =
    store?.anotherInfo &&
    store?.anotherInfo.map((e) => {
      return (
        <>
          <li>
            {e.header}
            {e.data}
          </li>
        </>
      );
    });
  return (
    <>
      <div className={styles.wrapper}>
        <p>Знання та навички:</p>
        <ul>{skills}</ul>
        <br />
        <p className={styles.p}>
          Досвід роботи: <span>{store?.experience}</span>
        </p>
        <br></br>
        <p>Освіта:</p>
        <ul style={{ listStyleType: "none", margin: "0" }}>{education}</ul>
        <br></br>
        <p>Додаткова інформація:</p>
        <ul>{anotherInfo}</ul>
      </div>
      <div className={styles.buttonWrapper}>
        <ButtonSignUp
          text={"Змінити резюме"}
          func={() => {
            navigate("/login", { replace: true });
          }}
        />
      </div>
    </>
  );
};

export default NextInfo;
