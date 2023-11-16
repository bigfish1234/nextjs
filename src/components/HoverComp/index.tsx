import styles from "./index.module.css";
import CapabilityComp from "../CapabilityComp";
import { store } from "@/store";

const HoverComp = ({ capabilityList, position, onClick }: any) => {
  const state = store();
  return (
    <div
      className={`${styles["common-wrapper"]} ${
        styles[`${position}-guide-slide-wrapper`]
      }`}
    >
      <div className={styles["guide-slide-title"]}>核心能力</div>
      <CapabilityComp list={capabilityList} />
      <div
        className={`${styles["guide-btn"]} ${styles[`${position}-guide-btn`]}`}
        onClick={() => state.handleOpenChange(true)}
      >
        立即咨询
      </div>
    </div>
  );
};

export default HoverComp;
