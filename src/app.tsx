import React, { useRef, useState, useEffect } from "react";
import "./app.css";

import { Hero } from "./hero";
import { Something } from "./something";

export const App = () => {
  const [bottom, setBottom] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleWheel = () => {
    setBottom(
      Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight
    );
  };

  return (
    <div className="App" ref={ref} onWheel={handleWheel}>
      <Hero />
      <Something bottom={bottom} />
    </div>
  );
};
