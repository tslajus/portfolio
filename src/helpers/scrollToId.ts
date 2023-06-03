function scrollToId(id: string, duration = 750, offset = 0) {
  const element = document.getElementById(id);

  if (!element) {
    console.warn(`Element with id '${id}' not found.`);
    return;
  }

  const start = window.scrollY || window.pageYOffset;
  const target = element.getBoundingClientRect().top + start - offset;
  const startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function scroll() {
    const currentTime =
      "now" in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (currentTime - startTime) / duration);
    const timeFunction = time * (2 - time);
    const newYPosition = Math.ceil(timeFunction * (target - start) + start);

    if (time >= 1) {
      window.scroll(0, target);
      return;
    }

    window.scroll(0, newYPosition);
    requestAnimationFrame(scroll);
  }

  requestAnimationFrame(scroll);
}

export default scrollToId;
