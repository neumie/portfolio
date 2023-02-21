import React from "react";
import styles from "./project.module.css";

type ProjectProps = {
  name: string;
  image: string;
};

export const Project = ({ name, image }: ProjectProps) => {
  return (
    <div className={`${styles.project}`}>
      <img src={image}></img>
      <h3>{name}</h3>
    </div>
  );
};
