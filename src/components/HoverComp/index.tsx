import { CapabilityComp } from "..";
import styles from "./index.module.css";

const HoverComp = ({ capabilityList, position }: any) => {
  return (
    <div
      className={`${styles["common-wrapper"]} ${
        styles[`${position}-guide-slide-wrapper`]
      }`}
    >
      <div className={styles["guide-slide-title"]}>核心能力</div>
      <CapabilityComp list={capabilityList} />
    </div>
  );
};

export default HoverComp;
