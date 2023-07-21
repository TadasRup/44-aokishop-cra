import React from "react";
import "./GridLayout.css";

const GridLayout = ({ items }) => {
    return (
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <div className="item-text">
              <img src={item.photo} alt=""/>
              <p className="section1">{item.section1}</p>
              <p className="section2">{item.section2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default GridLayout;
