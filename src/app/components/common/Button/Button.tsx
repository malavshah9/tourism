import React from "react";
import buttonStyle from "./Button.module.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "outlined" | "contained" | "icon";
};

const getClassByVariant: {
  [t in ButtonProps["variant"]]: string;
} = {
  contained: buttonStyle.contained,
  outlined: buttonStyle.outlined,
  icon: buttonStyle.iconButton,
};

const Button = ({
  children,
  variant = "contained",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={
        buttonStyle.btn +
        " " +
        getClassByVariant[variant] +
        (otherProps.className ? ` ${otherProps.className}` : "")
      }
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "contained",
};

export { Button };
