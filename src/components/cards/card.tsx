import { ReactNode } from "react";
import style from "../../../styles/components/card.module.scss";

type CardProps = {
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Card = ({ children, onMouseEnter, onMouseLeave }: CardProps) => {
  return (
    <aside
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={style["card-container"]}
    >
      {children}
    </aside>
  );
};
