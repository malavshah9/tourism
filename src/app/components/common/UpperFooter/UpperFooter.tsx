import React from "react";
import { HeadingThin } from "../HeadingThin/HeadingThin";
import CategoryCard from "../CategoryCard/CategoryCard";
import TravelGuideCard from "../TravelGuideCard/TravelGuideCard";
import { useCategories } from "@/app/queries/hooks/useCategories";
import { Loader } from "../Loader";
import { COPY_TEXT } from "@/app/util/constant";
import footerStyle from "./UpperFooter.module.css";

const UpperFooter = () => {
  const { data, isError, isLoading } = useCategories();
  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.mainSection}>
        <div className={footerStyle.section}>
          <HeadingThin>Categories</HeadingThin>
          {isLoading ? (
            <Loader />
          ) : (
            data?.map((cat) => (
              <CategoryCard
                categoryId={cat.name}
                categoryName={cat.name}
                key={cat.name}
              />
            ))
          )}
        </div>
        <div className={footerStyle.section}>
          <HeadingThin>Travel Guide</HeadingThin>
          {COPY_TEXT.TRAVELLERS.map((cat) => (
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
