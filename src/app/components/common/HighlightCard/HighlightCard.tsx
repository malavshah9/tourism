import { ROUTES } from "@/app/util/constant";
import { useRouter } from "next/navigation";
import React from "react";
import { RightArrow } from "../../../icons";
import highlightStyle from "./Highlight.module.css";

const HighlightCard = ({
  imgUrl,
  subtitle,
  title,
}: {
  title: string;
  subtitle: string;
  imgUrl: string;
}) => {
  const router = useRouter();
  const onCardClick = () => {
    const href = `${ROUTES.HIGHLIGHTS}/${title}`;
    router.push(href);
  };
  return (
    <div onClick={onCardClick} className={highlightStyle.highlight}>
      <img
        src={imgUrl}
        width={100}
        height={170}
        className={highlightStyle.img}
        alt="img"
      />
      <div className={highlightStyle.details}>
        <div className={highlightStyle.text}>
          <div className={highlightStyle.title}>{title}</div>
          <div className={highlightStyle.subtitle}>{subtitle}</div>
        </div>
        <div className={highlightStyle.right}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
