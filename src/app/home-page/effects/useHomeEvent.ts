import { useState } from "react";

import home_banner from "/public/pc/home/home-banner.png";
import home_banner_m from "/public/mobile/home/home-banner.png";

import order from "/public/pc/home/order.png";
import platform from "/public/pc/home/platform.png";
import manage from "/public/pc/home/manage.png";
import npi from "/public/pc/home/npi.png";
import cpq from "/public/pc/home/cpq.png";

import order_m from "/public/mobile/home/order.png";
import platform_m from "/public/mobile/home/platform.png";
import manage_m from "/public/mobile/home/manage.png";
import npi_m from "/public/mobile/home/npi.png";
import cpq_m from "/public/mobile/home/cpq.png";

import ips_01 from "/public/pc/home/ips_01.png";
import ips_02 from "/public/pc/home/ips_02.png";

import ips_m_01 from "/public/mobile/home/ips_01.png";
import ips_m_02 from "/public/mobile/home/ips_02.png";
import { store } from "@/store";

const useHomeEvent = () => {
  const [isShow, setIsShow] = useState(false);
  const state = store();

  // banner
  const homeSlideList = {
    pc: [home_banner],
    mb: [home_banner_m],
  };

  // LTC
  const slideListOfCash = {
    pc: [[order], [platform], [manage], [npi], [cpq]],
    mb: [[order_m], [platform_m], [manage_m], [npi_m], [cpq_m]],
  };

  // ISC
  const slideListOfChain = {
    pc: [[ips_01], [ips_02]],
    mb: [[ips_m_01], [ips_m_02]],
  };

  // 锚点页面滑动
  const anchorClick = (type: string) => {
    state.handleNavChange(type);
    const dom = document.getElementById(type);
    if (dom) {
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 图片hover显示阴影
  const hoverShowShadow = () => {
    const imgDom = document.getElementById("architectureImg");
    if (imgDom) imgDom.style.boxShadow = "0px 5px 12px 0px rgba(0,0,0,0.06)";
  };
  const leaveHideShadow = () => {
    const imgDom = document.getElementById("architectureImg");
    if (imgDom) imgDom.style.boxShadow = "";
  };

  // 移动端点击按钮
  const onArrowClick = () => {
    const dom = document.getElementById("link-item");
    if (dom) {
      dom.scrollBy({
        left: 220,
        behavior: "smooth",
      });
    }
  };

  const handleIBAEvent = (type: number) => {
    const dom = document.getElementById("analytics-wrapper");
    if (!type) {
      setIsShow(true);
      if (dom) {
        dom.style.backgroundImage = "radial-gradient(circle, white, #60a9f5)";
      }
    } else {
      setIsShow(false);
      if (dom) {
        dom.style.backgroundImage = "";
        dom.style.backgroundColor = "#EBF2FA";
      }
    }
  };

  return {
    isShow,
    homeSlideList,
    slideListOfCash,
    slideListOfChain,
    anchorClick,
    hoverShowShadow,
    leaveHideShadow,
    onArrowClick,
    handleIBAEvent,
  };
};

export default useHomeEvent;
