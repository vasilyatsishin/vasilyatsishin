import styles from "./MainInfo.module.css";
import { useSelector } from "react-redux";

const MainInfo = () => {
  const data = useSelector((state) => state.resumeReducer.resumeInfo)
  const contactInfo = data.contactInfo.map((e) => {
    return (
      <>
        <p>{e.header}{e.data}</p>
      </>
    )
  })
  return (
    <>
      <h1>Резюме</h1>
      <div className={styles.wrapper}>
        <img src="" alt="image" />
        <div className={styles.info}>
          <p>Яцишин Василь</p>
          <br></br>
          <p>
            Бажана посада: <span>{data.desiredPosition}</span>
          </p>
          <p>
            Бажаний рівень доходу: <span>{data.desiredEarning}</span>
          </p>
          <br></br>
          <p>
            Дата народження: <span>{data.dateOfBirth}</span>
          </p>
          <p>
            Місце проживання: <span>{data.placeOfResidence}</span>
          </p>
          <p>Готовий до відряджень. Не готовий до переїзду</p>
          <br></br>
          <p>Контактна інформація: </p>
          <div>{contactInfo}</div>
        </div>
      </div>
    </>
  );
};

export default MainInfo;
