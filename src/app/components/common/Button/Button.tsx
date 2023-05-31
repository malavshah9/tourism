import React from "react";
import buttonStyle from "./Button.module.css";

const Button = ({ children }: any) => {
  return <button className={buttonStyle.btn}>{children}</button>;
};

export { Button };
