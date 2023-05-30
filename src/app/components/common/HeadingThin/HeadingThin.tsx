import React from "react";
import headingThinStyle from "./HeadingThin.module.css";
const HeadingThin = ({ children }: any) => {
  return <h3 className={headingThinStyle.thin}>{children}</h3>;
};

export { HeadingThin };
