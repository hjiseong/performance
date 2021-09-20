interface Props {
  ref: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  cursorRef: React.RefObject<HTMLDivElement>;
  setLeft: (left: number) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useDragScroll({
  ref,
  containerRef,
  cursorRef,
  setLeft
}: Props) {
  let position = {
    left: 0,
    x: 0
  };

  const mouseDownHandler = function (e: any) {
    if (ref.current && cursorRef.current) {
      position = {
        left: ref.current.scrollLeft,
        x: e.clientX
      };
      ref.current.addEventListener("mousemove", mouseMoveHandler);
      ref.current.addEventListener("mouseup", mouseUpHandler);
      cursorRef.current?.classList.add("mousedown");
      cursorRef.current.style.top = `${e.clientY - 140 - 65}px`;
      cursorRef.current.style.left = `${e.clientX - 55}px`;
    }
  };

  let offset = 0;
  const mouseMoveHandler = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    const dx = e.clientX - position.x;
    if (ref.current && containerRef.current && cursorRef.current) {
      offset = position.left - dx;
      setLeft(offset * 0.4);
      cursorRef.current.style.top = `${e.clientY - 140 - 65}px`;
      cursorRef.current.style.left = `${e.clientX - 55}px`;
    }
  };

  const mouseUpHandler = function (e: any) {
    ref.current?.removeEventListener("mousemove", mouseMoveHandler);
    cursorRef.current?.classList.remove("mousedown");
  };

  return {
    container: ref.current,
    mouseDownHandler
  };
}
