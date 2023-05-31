import React from "react";
import travelStyle from "./TravelGuideCard.module.css";
import Image from "next/image";
import { Button } from "../Button";

const TravelGuideCard = ({
  name,
  subtitle,
}: {
  name: string;
  subtitle: string;
}) => {
  return (
    <div className={travelStyle.container}>
      <div className={travelStyle.nameContact}>
        <div className={travelStyle.nameSubtitleContainer}>
          <div className={travelStyle.name}>{name}</div>
          <div className={travelStyle.subtitle}>{subtitle}</div>
        </div>
        <Button>Contact</Button>
      </div>
      <Image
        src="/Image.jpg"
        height="128"
        width="128"
        alt="user-image"
        className={travelStyle.img}
      />
    </div>
  );
};

export default TravelGuideCard;
