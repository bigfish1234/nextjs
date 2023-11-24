import ServiceBtn from "../LayoutComp/effects/ServiceBtn";
import Mask from "../Mask";
import SideBar from "../SideBar";
import styles from "./index.module.css";

const LayoutWrapper = ({ children }: any) => {
  return (
    <div className={styles["layout-wrapper"]}>
      {children}

      <ServiceBtn />

      {/* 移动端侧边栏 */}
      <SideBar />

      {/* 遮罩 */}
      <Mask />
    </div>
  );
};

export default LayoutWrapper;
