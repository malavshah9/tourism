import React from "react";
import buttonStyle from "./Button.module.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "outlined" | "contained";
};

const getClassByVariant: {
  [t in ButtonProps["variant"]]: string;
} = {
  contained: buttonStyle.contained,
  outlined: buttonStyle.outlined,
};

const Button = ({
  children,
  variant = "contained",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={buttonStyle.btn + " " + getClassByVariant[variant]}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "contained",
};

export { Button };
