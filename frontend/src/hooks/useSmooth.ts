import React from "react";

interface Props {
  wrapper: React.RefObject<HTMLElement> | null;
}

export default function useSmooth({ wrapper }: Props): any {
  const speed = 0.04;
  let height = 0;
  let offset = 0;

  const root = document.body;

  const scrollWrap = wrapper?.current;
  if (scrollWrap) {
    height = scrollWrap.getBoundingClientRect().height - 1;
  }
  root.style.height = Math.floor(height) + "px";

  function smoothScroll() {
    const move = Math.floor((window.pageYOffset - offset) * speed);
    offset += move;

    const scroll = "translateY(-" + offset + "px) translateZ(0)";
    if (scrollWrap) {
      // console.log(offset, height);
      scrollWrap.style.transform = scroll;
    }

    requestAnimationFrame(smoothScroll);
  }

  return {
    smoothScroll
  };
}
