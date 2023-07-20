import React from "react";
import "./GridLayout.css"; // Create this CSS file to style the grid layout.

const GridLayout = () => {
  return (
    <div className="grid-container">
      {/* Content for the first row */}
      <div className="grid-item">Item 1</div>
      <div className="grid-item">Item 2</div>
      <div className="grid-item">Item 3</div>
      <div className="grid-item">Item 4</div>

      {/* Content for the second row */}
      <div className="grid-item">Item 5</div>
      <div className="grid-item">Item 6</div>
      <div className="grid-item">Item 7</div>
      <div className="grid-item">Item 8</div>
    </div>
  );
};

export default GridLayout;
