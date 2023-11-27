import spzn_banner from "/public/pc/about/about-banner.png";
import spzn_banner_mb from "/public/mobile/about/sp.png";

const useAboutEvent = () => {
  const aboutSlideList = {
    pc: [spzn_banner],
    mb: [spzn_banner_mb],
  };

  const sliding = (type: string) => {
    const dom = document.getElementById("slide");
    const flag = window.matchMedia(
      "only screen and (max-width: 1440px)"
    ).matches;

    const len = flag ? 350 : 500;
    if (dom) {
      if (type == "left") {
        dom.scrollBy({
          left: -len,
          behavior: "smooth",
        });
      } else {
        dom.scrollBy({
          left: len,
          behavior: "smooth",
        });
      }
    }
  };

  const btnOverEvent = (type: string, value: number) => {
    const btnDom = document.getElementById(type);
    if (btnDom) {
      !value
        ? (btnDom.style.boxShadow = "0px 3px 8px 0px rgba(0, 0, 0, 0.12)")
        : (btnDom.style.boxShadow = "");
    }
  };
  return { aboutSlideList, sliding, btnOverEvent };
};

export default useAboutEvent;
