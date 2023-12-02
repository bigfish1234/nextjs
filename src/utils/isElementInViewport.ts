export function isElementInViewport(id: string) {
  const dom = document.getElementById(id);
  if (dom) {
    const rect = dom.getBoundingClientRect();
    const elementCenterX = (rect.left + rect.right) / 2;
    const elementCenterY = (rect.top + rect.bottom) / 2;
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return (
      elementCenterX >= 0 &&
      elementCenterX <= viewportWidth &&
      elementCenterY >= 0 &&
      elementCenterY <= viewportHeight
    );

    // const rect = dom.getBoundingClientRect();

    // return (
    //   rect.top < window.innerHeight &&
    //   rect.bottom > 0 &&
    //   rect.left < window.innerWidth &&
    //   rect.right > 0 &&
    //   rect.top < (rect.top)
    // );
  }
}
