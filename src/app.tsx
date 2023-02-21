import React, { useRef, useState, useEffect, WheelEvent } from "react";
import { Events, scroller } from "react-scroll";

import styles from "./app.module.css";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";

export const App = () => {
  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const updateXScroll = () => setScrollX(horizontalRef.current!.scrollLeft);
  const updateYScroll = () =>
    setScrollY(Math.ceil(window.innerHeight + window.scrollY));

  const [bottom, setBottom] = useState<boolean>(false);
  const horizontalRef = useRef<HTMLDivElement>(null);

  //Scroll event listener
  useEffect(() => {
    horizontalRef.current?.addEventListener("scroll", updateXScroll);
    window.addEventListener("scroll", updateYScroll);

    return () => {
      horizontalRef.current?.removeEventListener("scroll", updateXScroll);
      window.removeEventListener("scroll", updateYScroll);
    };
  }, []);

  //On scroll change
  useEffect(() => {
    const pageHeight = Math.abs(document.documentElement.scrollHeight);
    // const pageWidth =
    //   horizontalRef.current!.scrollWidth - horizontalRef.current!.clientWidth;

    setBottom(scrollY >= pageHeight);

    if (!bottom || (bottom && scrollX == 0)) enableScroll();
    else if (bottom && scrollX > 0) disableScroll();

    !bottom && horizontalRef.current && (horizontalRef.current.scrollLeft = 0);
  }, [scrollY, scrollX]);

  const scrollToHero = () => {
    horizontalRef.current && (horizontalRef.current.scrollLeft = 0);
    setTimeout(() => {
      scroller.scrollTo("hero", { duration: 500, smooth: true, offset: -100 });
    }, 500);
  };

  const scrollToAbout = () => {
    setTimeout(() => {
      horizontalRef.current && (horizontalRef.current.scrollLeft = 0);
      scroller.scrollTo("about", { duration: 500, smooth: true });
    }, 250);
  };

  const scrollToProjects = () => {
    let goToAbout = new Promise<void>((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("about", {
        duration: 250,
        smooth: true,
      });
    });

    goToAbout.then(() => {
      horizontalRef.current && (horizontalRef.current.scrollLeft = 10000);
    });
  };

  // Translates vertical scroll into horizontal scroll
  const horizontalScroll = (event: WheelEvent) =>
    horizontalRef.current!.scrollBy(event.deltaY, 0);

  const disableScroll = () =>
    document.body.classList.add(`${styles.disableScroll}`);

  const enableScroll = () =>
    document.body.classList.remove(`${styles.disableScroll}`);

  //Decides if we should use horizontal or vertical scroll
  const handleWheel = (event: WheelEvent) => bottom && horizontalScroll(event);

  return (
    <div className={`${styles.app}`}>
      <Navbar
        scrollToHero={scrollToHero}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        left
      />
      <Hero />
      <div
        className={`${styles.wrapper}`}
        ref={horizontalRef}
        onWheel={(e: WheelEvent) => handleWheel(e)}
      >
        <About />
        <Projects />
        <Navbar
          scrollToHero={scrollToHero}
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
          right
        />
      </div>
    </div>
  );
};
