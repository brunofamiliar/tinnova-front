import { ReactNode } from "react";
import style from "../../../styles/components/button.module.scss";

type ButtonProps = {
  children: ReactNode;
  startContent?: ReactNode;
};

export const Button = ({ children, startContent }: ButtonProps) => {
  return (
    <button className={style.button}>
      {startContent}
      {children}
    </button>
  );
};
