import { store } from "@/store";
import styles from "./index.module.css";

const TabHeader = ({ h1, h2 }: any) => {
  const state = store();
  return (
    <div className={styles.tabWrapper}>
      <div className={styles.firstTitle}>{h1}</div>
      {h2 && <div className={styles.secondTitle}>{h2}</div>}
      <div className={styles.divider}></div>
    </div>
  );
};

export default TabHeader;
