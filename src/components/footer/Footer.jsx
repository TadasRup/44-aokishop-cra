import style from './Footer.module.css';
import React from "react";
import GridLayout from "./GridLayout";

const Footer = () => {
    return (
      <div className={style.grid}>
        <GridLayout />
      </div>
    );
  };

  export { Footer };