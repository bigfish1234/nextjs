const MOBILE_REG =
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;

export function isMobileDevice() {
  // return (
  //   !!navigator.userAgent.match(MOBILE_REG) ||
  //   window.matchMedia("only screen and (max-width: 500px)").matches
  // );
  return false;
}
