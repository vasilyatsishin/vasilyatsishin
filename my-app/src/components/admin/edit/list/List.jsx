import styles from "./List.module.css";

const List = ({ header, data }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.p}>{header}</p>
        <div className={styles.divForInput}>{data}</div>
      </div>
    </>
  );
};

export default List;
