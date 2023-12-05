import styles from "./index.module.css";

const TabHeader = ({ h1, h2, id, showStyle }: any) => {
  return (
    <div className={`${styles.tabWrapper} ${showStyle}`} id={id}>
      <h2 style={{ paddingBottom: 10, textAlign: "center" }}>{h1}</h2>
      <h3 style={{ fontWeight: 400, textAlign: "center" }}>{h2}</h3>
      <div className={styles.divider}></div>
    </div>
  );
};

export default TabHeader;
