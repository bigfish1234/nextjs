import { useState } from "react";

import home_banner from "/public/pc/home/home-banner.png";
import home_banner_m from "/public/mobile/home/home-banner.png";

import order from "/public/pc/home/order.png";
import platform from "/public/pc/home/ISM.png";
import manage from "/public/pc/home/ICM.png";
import npi from "/public/pc/home/npi.png";
import cpq from "/public/pc/home/cpq.png";

import order_m from "/public/mobile/home/order.png";
import platform_m from "/public/mobile/home/ISM.png";
import manage_m from "/public/mobile/home/ICM.png";
import npi_m from "/public/mobile/home/npi.png";
import cpq_m from "/public/mobile/home/cpq.png";

import ips_01 from "/public/pc/home/sales-forecast.png";
import ips_02 from "/public/pc/home/ips_02.png";

import ips_m_01 from "/public/mobile/home/sales-forecast.png";
import ips_m_02 from "/public/mobile/home/ips_02.png";
import { store } from "@/store";

import info_banner from "/public/pc/info/info-banner.png";
import IBA_mb from "/public/mobile/home/IBA.png";
import IBA from "/public/pc/home/IBA.png";
import { useDebounceFn } from "ahooks";

const useHomeEvent = () => {
  const [isShow, setIsShow] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  const state = store();

  // banner
  const homeSlideList = {
    pc: [home_banner, info_banner],
    mb: [home_banner_m],
  };

  const slideListOfIBA = {
    pc: [IBA, IBA],
    mb: [IBA_mb],
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
  const anchorClick = (type: string, e: any) => {
    state.handleNavChange(type);
    const dom = document.getElementById(type);

    if (dom) {
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 图片hover显示阴影
  const hoverShowShadow = () => {
    const imgDom = document.getElementById("eimos_img");
    if (imgDom) imgDom.style.boxShadow = "0px 5px 12px 0px rgba(0,0,0,0.06)";
  };
  const leaveHideShadow = () => {
    const imgDom = document.getElementById("eimos_img");
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

  const handleIBAEvent = useDebounceFn(
    (type: number) => {
      const dom = document.getElementById("analytics-wrapper");
      if (!state.isMobile) {
        if (!type) {
          setIsShow(true);
          if (dom) {
            dom.style.backgroundImage =
              "radial-gradient(circle, white, #60a9f5)";
          }
        } else {
          setIsShow(false);
          if (dom) {
            dom.style.backgroundImage = "";
            dom.style.backgroundColor = "#EBF2FA";
          }
        }
      }
    },
    {
      wait: 300,
    }
  );

  return {
    isShow,
    homeSlideList,
    slideListOfIBA,
    slideListOfCash,
    slideListOfChain,
    anchorClick,
    hoverShowShadow,
    leaveHideShadow,
    onArrowClick,
    handleIBAEvent,
    isHovered,
    setIsHovered,
  };
};

export default useHomeEvent;
