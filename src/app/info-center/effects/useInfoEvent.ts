import { useState } from "react";
import { infoListAll } from "./const";

import info_banner_mb from "/public/mobile/info/info-banner.png";
import info_banner from "/public/pc/info/info-banner.png";

const useInfoEvent = () => {
  const pageSize = 5;
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [infoList, setInfoList] = useState([...infoListAll].slice(0, pageSize));
  const [total, setTotal] = useState<number>(infoListAll.length);
  const infoSlideList = {
    pc: [info_banner],
    mb: [info_banner_mb],
  };

  return {
    pageSize,
    pageCurrent,
    setPageCurrent,
    infoList,
    setInfoList,
    total,
    setTotal,
    infoSlideList,
    infoListAll,
  };
};

export default useInfoEvent;
