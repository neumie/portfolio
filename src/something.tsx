import React, { useRef, useState, useEffect } from "react";
import styles from "./something.module.css";

type SomethingProps = {
  bottom: boolean;
};

export const Something = ({ bottom }: SomethingProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const horizontalScroll = (event: any) => {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 200;
  };

  const disableScroll = () => {
    document.body.classList.add("disable-scroll");
  };

  const enableScroll = () => {
    document.body.classList.remove("disable-scroll");
  };

  const handleWheel = (event: any) => {
    if (bottom) {
      if (ref.current!.scrollLeft <= 0) {
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
      className={`${styles.wrapper}`}
      ref={ref}
      onWheel={(e) => handleWheel(e)}
    >
      <div className={`${styles.corner}`}>
        <div className={`${styles.connector}`}>connector</div>
        <div className={`${styles.something}`}>something</div>
      </div>
      <div className={`${styles.projects}`}>projects</div>
    </div>
  );
};
