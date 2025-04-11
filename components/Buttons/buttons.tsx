"use client";

import { Button } from "@mantine/core";
import classes from "./ButtonComponent.module.css";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: ()=> void;
};

const ButtonComponent = ({ variant, children,onClick }: ButtonProps) => {

  const getClassNames = () => {
    return `${classes.button} ${classes[variant]}`;
  };

  return (
    <Button variant="outline" size="md" className={getClassNames()} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
