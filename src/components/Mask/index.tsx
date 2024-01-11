import { store } from "@/store";
import styles from "./index.module.css";

const Mask = () => {
  const state = store();
  return (
    <div
      className={styles.mask}
      style={{ display: state.isExpand ? "block" : "none" }}
      onClick={() => {
        state.handleExpandChange(false);
        // const dom = document.getElementById("expand");
        // if (dom) {
        //   state.isExpand
        //     ? (dom.style.rotate = "0deg")
        //     : (dom.style.rotate = "90deg");
        // }
      }}
    ></div>
  );
};

export default Mask;
