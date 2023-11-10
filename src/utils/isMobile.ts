import { isMobile } from "react-device-detect";

export const isMobileDevice = () => {
  if (isMobile) {
    return true;
  } else {
    return false;
  }
};
