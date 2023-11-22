"use client";

import { InfomationBar, LayoutComp, PaginationComp } from "@/components";
import useInfoEvent from "./effects/useInfoEvent";
import { store } from "@/store";

const Home = () => {
  const {
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
  const state = store();

  return (
    <LayoutComp
      slideList={state.isMobile ? infoSlideList.mb : infoSlideList.pc}
      page="info"
    >
      <div className={state.isMobile ? "" : "wrapper-center"} id="top">
        {infoList.map((item: any) => {
          return (
            <InfomationBar
              key={item.title}
              content={item}
              isMobile={state.isMobile}
            />
          );
        })}
      </div>
      {!state.isMobile && (
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
  );
};

export default Home;
