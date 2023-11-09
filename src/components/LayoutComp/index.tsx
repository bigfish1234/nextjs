import FooterComp from "../FooterComp";
import SwiperHeader from "../SwiperHeader";
// import joinImg from "@/images/infomation/info-center.png";

const LayoutComp = ({ imgUrl, children }: any) => {
  return (
    <div>
      <SwiperHeader imgUrl={imgUrl} />
      <slot>{children}</slot>
      <FooterComp />
    </div>
  );
};

export default LayoutComp;
