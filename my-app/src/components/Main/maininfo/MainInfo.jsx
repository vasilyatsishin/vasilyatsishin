import styles from "./MainInfo.module.css";
import { useSelector } from "react-redux";
import selectors from "../../../redux/selectors/selectors";

const MainInfo = () => {
  const data = useSelector(selectors.getData);
  return (
    <>
      <h1>Резюме</h1>
      <div className={styles.wrapper}>
        <img src="" alt="image" />
        <div className={styles.info}>
          <p>Яцишин Василь</p>
          <br></br>
          <p>
            Бажана посада:<span>{data.desiredPosition}</span>
          </p>
          <p>
            Бажаний рівень доходу: <span></span>
          </p>
          <br></br>
          <p>
            Дата народження: <span></span>
          </p>
          <p>
            Місце проживання: <span></span>
          </p>
          <p>Готовий до відряджень. Не готовий до переїзду</p>
          <br></br>
          <p>Контактна інформація:</p>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MainInfo;
