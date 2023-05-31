import React from "react";
import { RightArrowWithoutBg } from "../../../icons";
import categoryStyle from "./CategoryCard.module.css";

const CategoryCard = ({
  categoryName,
  categoryId,
}: {
  categoryName: string;
  categoryId: string;
}) => {
  return (
    <div className={categoryStyle.category}>
      <div className={categoryStyle.nameIconContainer}>
        <div>{categoryName}</div>
        <div>
          <RightArrowWithoutBg />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
