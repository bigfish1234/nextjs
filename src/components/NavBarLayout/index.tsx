"use client";
import styles from "./index.module.css";
import { Imgs } from "@/images/mobileImg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = ({ children }: any) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper-header"]}>
        <Image
          src={Imgs.expand}
          alt="expand"
          className={styles["expand"]}
          onClick={() => setIsExpand(!isExpand)}
        />
        <Image src={Imgs.logo} alt="logo" className={styles["logo"]} />
      </div>
      <div className="wrapper-center">{children}</div>
      {isExpand && (
        <div className={styles["mobile-sidebar"]}>
          <div className={styles["mobile-sidebar-content"]}>
            <Link href="/home-page">EIMOS</Link>
            <Link href="/info-center">信息中心</Link>
            <Link href="/about-us">关于我们</Link>
            <Link href="/join-us">加入我们</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
