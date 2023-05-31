import React from "react";
import footerStyle from "./UpperFooter.module.css";
import { HeadingThin } from "../HeadingThin/HeadingThin";
import CategoryCard from "../CategoryCard/CategoryCard";
import TravelGuideCard from "../TravelGuideCard/TravelGuideCard";

const categories = [
  "Adventure",
  "Culinary",
  "Adventure",
  "Culinary",
  "Adventure",
  "Culinary",
];

const travellers = [
  {
    name: "Hadwin Malone",
    subtitle: "Guide since 2012",
  },
];

const UpperFooter = () => {
  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.mainSection}>
        <div className={footerStyle.section}>
          <HeadingThin>Categories</HeadingThin>
          {categories.map((cat) => (
            <CategoryCard categoryId={cat} categoryName={cat} key={cat} />
          ))}
        </div>
        <div className={footerStyle.section}>
          <HeadingThin>Travel Guide</HeadingThin>
          {travellers.map((cat) => (
            <TravelGuideCard
              name={cat.name}
              subtitle={cat.subtitle}
              key={cat.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { UpperFooter };
