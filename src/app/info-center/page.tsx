"use client";

import { InfomationBar, LayoutComp, PaginationComp } from "@/components";
import useInfoEvent from "./effects/useInfoEvent";

const Home = () => {
  const {
    isMobile,
    pageSize,
    pageCurrent,
    setPageCurrent,
    infoList,
    setInfoList,
    total,
    setTotal,
    infoSlideList,
    infoListAll,
  } = useInfoEvent();

  return (
    <main>
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
    </main>
  );
};

export default Home;
