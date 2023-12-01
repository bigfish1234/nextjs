import { InfomationBar, LayoutComp, PaginationComp } from "@/components";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import Metadata from "next/head";

import info_banner_mb from "/public/images/mobile/info/info-banner.png";
import info_banner from "/public/images/pc/info/info-banner.png";
import { infoListAll } from "@/lib/const";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pageSize = 5;
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [infoList, setInfoList] = useState([...infoListAll].slice(0, pageSize));
  const [total, setTotal] = useState<number>(infoListAll.length);
  const infoSlideList = {
    pc: [info_banner],
    mb: [info_banner_mb],
  };

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      <Metadata>
        <title>信息中心</title>
      </Metadata>
      <LayoutComp
        slideList={isMobile ? infoSlideList.mb : infoSlideList.pc}
        page="info"
      >
        <div className={isMobile ? "" : "wrapper-center"} id="top">
          {infoList.map((item: any) => {
            return (
              <InfomationBar
                key={item.title}
                content={item}
                isMobile={isMobile}
              />
            );
          })}
        </div>
        {!isMobile && (
          <PaginationComp
            page="info"
            current={pageCurrent}
            size={pageSize}
            total={total}
            onChange={(value: number) => {
              setPageCurrent(value);
              setInfoList(
                [...infoListAll].slice(pageSize * (value - 1), pageSize * value)
              );
              const dom = document.getElementById("top");
              dom && dom.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        )}
      </LayoutComp>
    </div>
  );
};

export default Home;
