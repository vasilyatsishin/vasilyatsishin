import styles from "./MainInfo.module.css";
import { useEffect, useState } from "react";
import { getInfo, uploadToFb } from "../../../firebase/firebaseCalls";

const MainInfo = () => {
  const [store, setStore] = useState();
  const data = getInfo(setStore, "dataFinalProject");
  
  const contactInfo =
    store?.contactInfo &&
    store.contactInfo.map((e) => {
      return (
        <>
          <p>
            {e.header}
            {e.data}
          </p>
        </>
      );
    });
  return (
    <>
      <h1>Резюме</h1>
      <div className={styles.wrapper}>
        {store?.name && (
          <div className={styles.info}>
            <p>{store?.name}</p>
            <br></br>
            <p>
              Бажана посада: <span>{store?.desiredPosition}</span>
            </p>
            <p>
              Бажаний рівень доходу: <span>{store?.desiredEarning}</span>
            </p>
            <br></br>
            <p>
              Дата народження: <span>{store?.dateOfBirth}</span>
            </p>
            <p>
              Місце проживання: <span>{store?.placeOfResidence}</span>
            </p>
            <p>Готовий до відряджень. Не готовий до переїзду</p>
            <br></br>
            <p>Контактна інформація: </p>
            <div>{contactInfo}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainInfo;
