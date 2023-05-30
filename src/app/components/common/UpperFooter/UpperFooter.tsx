import React from "react";
import footerStyle from "./UpperFooter.module.css";
import { HeadingThin } from "../HeadingThin/HeadingThin";
import CategoryCard from "../CategoryCard/CategoryCard";

const categories = [
  "Adventure",
  "Culinary",
  "Adventure",
  "Culinary",
  "Adventure",
  "Culinary",
];

const UpperFooter = () => {
  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.section}>
        <HeadingThin>Categories</HeadingThin>
        {categories.map((cat) => (
          <CategoryCard categoryId={cat} categoryName={cat} key={cat} />
        ))}
      </div>
    </div>
  );
};

export { UpperFooter };
