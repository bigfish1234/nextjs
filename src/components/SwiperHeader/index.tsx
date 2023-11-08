import Image from "next/image";
import styles from "./index.module.css";
import logo from "@/images/logo.png";
import Link from "next/link";

const SwiperHeader = ({ imgUrl }: any) => {
  return (
    <div className={styles.swiperHeader}>
      <Image src={imgUrl} alt="homeImg" className={styles.homeImg} />

      <Image src={logo} alt="logo" className={styles["shuopan-logo"]} />

      <div className={styles.navgator}>
        <Link href="/home-page">EIMOS</Link>
        <Link href="/info-center">信息中心</Link>
        <Link href="/about-me">关于我们</Link>
        <Link href="/join-us">加入我们</Link>
      </div>
      <div className={styles.obtain}>
        <a>获取演示</a>
      </div>
    </div>
  );
};

export default SwiperHeader;
