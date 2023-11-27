import { store } from "@/store";
import styles from "./index.module.css";

const Mask = () => {
  const state = store();
  return (
    <div
      className={styles.mask}
      style={{ display: state.isExpand ? "block" : "none" }}
      onClick={() => state.handleExpandChange(false)}
    ></div>
  );
};

export default Mask;
