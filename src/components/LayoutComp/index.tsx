"use client";

import Image from "next/image";
import FooterComp from "../FooterComp";
import SwiperHeader from "../SwiperHeader";
import guidenceImg from "@/images/eimos/guidance.png";
import styles from "./index.module.css";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useState } from "react";
import { store } from "@/store";
import closeIcon from "@/images/eimos/close.png";
import ServiceForm from "../ServiceForm";

const LayoutComp = ({ page, slideList = [], children, pageScroll }: any) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const state = store();

  const handleClick = (type: string) => {
    state.onPageChange(type);
  };

  const clickToGuidence = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 轮播图 */}
      <SwiperHeader
        slideList={slideList}
        page={page}
        setIsExpand={setIsExpand}
        isExpand={isExpand}
      />

      {children}

      {/* footer */}
      <FooterComp pageScroll={pageScroll} setIsOpen={setIsOpen} />

      {/* 咨询 */}
      <Image
        src={guidenceImg}
        alt="gudience"
        style={{ display: isMobile ? "none" : "block" }}
        className={styles["guide-service"]}
        onClick={clickToGuidence}
      />

      {isOpen ? (
        <div className={styles["service-form"]}>
          <div style={{ position: "relative" }}>
            <Image
              src={closeIcon}
              alt="close"
              width={16}
              height={16}
              style={{ position: "absolute", right: 0, cursor: "pointer" }}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ServiceForm />
        </div>
      ) : null}

      {/* 侧边栏 */}
      {isMobile && isExpand && (
        <div className={styles["mobile-sidebar"]}>
          <div className={styles["mobile-sidebar-content"]}>
            <Link
              href="/home-page"
              onClick={() => handleClick("eimos")}
              style={{ color: state.page == "eimos" ? "#F96F25" : "black" }}
            >
              EIMOS
            </Link>
            <Link
              href="/info-center"
              onClick={() => handleClick("info")}
              style={{ color: state.page == "info" ? "#F96F25" : "black" }}
            >
              信息中心
            </Link>
            <Link
              href="/about-us"
              onClick={() => handleClick("about")}
              style={{ color: state.page == "about" ? "#F96F25" : "black" }}
            >
              关于我们
            </Link>
            <Link
              href="/join-us"
              onClick={() => handleClick("join")}
              style={{ color: state.page == "join" ? "#F96F25" : "black" }}
            >
              加入我们
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutComp;
