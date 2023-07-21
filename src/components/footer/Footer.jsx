import React from "react";
import GridLayout from "./GridLayout";



const Footer = () => {
    const items = [
      {
        //  photo: Footer1,
        section1: "Small telecast live",
        section2: "Live sales in WeChat",
        
      },
      {
       // photo: Footer2,
        section1: "Mini Program Store",
        section2: "WeChat Mini Program Store",
      },
      {
        // photo: Footer3,
         section1: "Distribution marker",
         section2: "One-click promotion",
       },
       {
        // photo: Footer4,
         section1: "Coupon",
         section2: "Store marketing essentials",
       },
       {
        // photo: Footer5,
         section1: "Store construction",
         section2: "Can be customized",
       },
       {
        // photo: Footer6,
         section1: "Promoting Ads",
         section2: "WeChat billion-level exposure",
       },
       {
        // photo: Footer7,
         section1: "Promotion rebate",
         section2: "Help you sell goods",
       },
       {
        // photo: Footer8,
         section1: "Asset Management",
         section2: "Income and withdrawal",
       },
    ];
  
    return (
      <div>
        <GridLayout items={items} />
      </div>
    )
  };

export { Footer };
