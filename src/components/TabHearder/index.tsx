import styles from "./index.module.css";

const TabHeader = ({ h1, h2 }: any) => {
  return (
    <div className={styles.tabWrapper}>
      <h2 style={{ paddingBottom: 10, textAlign: "center" }}>{h1}</h2>
      {h2 && <h3 style={{ fontWeight: 400 }}>{h2}</h3>}
      <div className={styles.divider}></div>
    </div>
  );
};

export default TabHeader;
