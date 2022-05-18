import ButtonSignUp from "../button/ButtonSignUp";
import styles from "./NextInfo.module.css";
import { useSelector } from "react-redux";

const NextInfo = () => {
  const data = useSelector((state) => state.resumeReducer.resumeInfo)
  const skills = data.knowledgesSkills.map((e) => {
    return (
      <>
        <li>{e.data}</li>
      </>
    )
  })

  const education = data.education.map((e) => {
    return (
      <>
        <li>{e.data}</li>
      </>
    )
  })

  const anotherInfo = data.anotherInfo.map((e) => {
    return (
      <>
        <li>{e.header}{e.data}</li>
      </>
    )
  })

  return (
    <>
      <div className={styles.wrapper}>
        <p>Знання та навички:</p>
        <ul>{skills}</ul>
        <br />
        <p className={styles.p}>
          Досвід роботи: <span>{data.experience}</span>
        </p>
        <br></br>
        <p>Освіта:</p>
        <ul style={{ listStyleType: "none", margin: "0" }}>{education}</ul>
        <br></br>
        <p>Додаткова інформація:</p>
        <ul>{anotherInfo}</ul>
      </div>
      <div className=
      {styles.buttonWrapper}>
        <ButtonSignUp text={"Sign UP"} path={"/login"}/>
      </div>
    </>
  );
};

export default NextInfo;
