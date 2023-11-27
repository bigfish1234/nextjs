import { FooterComp, SwiperHeader } from "..";
import { store } from "@/store";
import LayoutWrapper from "../LayoutWrapper";

const LayoutComp = ({ page, slideList = [], children, pageScroll }: any) => {
  return (
    <LayoutWrapper>
      <SwiperHeader slideList={slideList} page={page} />
      {children}
      <FooterComp pageScroll={pageScroll} />
    </LayoutWrapper>
  );
};

export default LayoutComp;
