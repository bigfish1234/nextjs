import ServiceBtn from "../LayoutComp/effects/ServiceBtn";
import Mask from "../Mask";
import SideBar from "../SideBar";
import styles from "./index.module.css";
import Metadata from "next/head";

const LayoutWrapper = ({ children }: any) => {
  return (
    <div className={styles["layout-wrapper"]}>
      <Metadata>
        <link
          rel="shortcut icon"
          href="/images/logo2.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="硕磐智能EIMOS数智平台，助力和加速企业全方位的数字化转型，提升企业经营的效率和效益。"
        />
        <meta
          name="keywords"
          content="数字化转型, 智能分析, 经营管理, 合同管理, 计划管理, 业务系统"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no"
        />
        <meta name="format-detection" content="telephone=no,email=no" />
      </Metadata>

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
