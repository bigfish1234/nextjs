import { useState } from "react";
import { IStatus } from "../type";

import join_banner from "/public/pc/join/join-banner.png";
import join_banner_mb from "/public/mobile/join/join-banner.png";

const useJoinEvent = () => {
  const pageSize = 5;
  const joinSlideList = {
    pc: [join_banner],
    mb: [join_banner_mb],
  };
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [status, setStatus] = useState<IStatus>({
    keyword: "",
    type: -1,
    pos: -1,
  });

  const handleChange = async (value: IStatus) => {
    setStatus(value);
  };
  return {
    pageSize,
    joinSlideList,
    pageCurrent,
    setPageCurrent,
    status,
    setStatus,
    handleChange,
  };
};
export default useJoinEvent;
