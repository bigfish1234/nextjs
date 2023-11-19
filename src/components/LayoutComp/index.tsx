import styles from "./index.module.css";
import ServiceBtn from "./effects/ServiceBtn";
import { FooterComp, SideBar, SwiperHeader } from "..";

const LayoutComp = ({ page, slideList = [], children, pageScroll }: any) => {
  return (
    <div className={styles["layout-wrapper"]}>
      {/* 轮播图 */}
      <SwiperHeader slideList={slideList} page={page} />

      {children}

      {/* footer */}
      <FooterComp pageScroll={pageScroll} />

      {/* 咨询 */}
      <ServiceBtn />

      {/* 移动端侧边栏 */}
      <SideBar />
    </div>
  );
};

export default LayoutComp;
