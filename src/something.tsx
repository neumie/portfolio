import React, { useRef, useState, useEffect } from "react";
import styles from "./something.module.css";

type SomethingProps = {
  bottom: boolean;
};

export const Something = ({ bottom }: SomethingProps) => {
  const [leftPos, setLeftPos] = useState<number>(0);

  const ref = useRef<HTMLInputElement>(null);

  const horizontalScroll = (event: any) => {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 10;
  };

  const disableScroll = () => {
    document.body.classList.add("disable-scroll");
  };

  const enableScroll = () => {
    document.body.classList.remove("disable-scroll");
  };

  const handleWheel = (event: any) => {
    ref.current && setLeftPos(ref.current.scrollLeft);

    if (bottom) {
      if (!leftPos) {
        enableScroll();
        if (event.nativeEvent.wheelDelta <= 0) {
          horizontalScroll(event);
        }
      } else {
        disableScroll();
        horizontalScroll(event);
      }
    } else enableScroll();
  };

  return (
    <div
      className={`${styles.something}`}
      ref={ref}
      onWheel={(e) => handleWheel(e)}
    >
      Something
      LongTextttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
    </div>
  );
};
