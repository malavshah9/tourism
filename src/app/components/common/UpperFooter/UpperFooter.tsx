import React from "react";
import footerStyle from "./UpperFooter.module.css";
import { HeadingThin } from "../HeadingThin/HeadingThin";
import CategoryCard from "../CategoryCard/CategoryCard";
import TravelGuideCard from "../TravelGuideCard/TravelGuideCard";
import { useCategories } from "@/app/queries/hooks/useCategories";

const travellers = [
  {
    name: "Hadwin Malone",
    subtitle: "Guide since 2012",
  },
];

const UpperFooter = () => {
  const { data, isError, isLoading } = useCategories();
  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.mainSection}>
        <div className={footerStyle.section}>
          <HeadingThin>Categories</HeadingThin>
          {data?.map((cat) => (
            <CategoryCard
              categoryId={cat.name}
              categoryName={cat.name}
              key={cat.name}
            />
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
