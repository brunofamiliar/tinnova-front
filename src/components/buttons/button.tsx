import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import style from "../../../styles/components/button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  startContent?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const Button = ({
  children,
  startContent,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(style.button, {
        [style["button-disabled"]]: disabled,
      })}
      disabled={disabled}
      data-testid="button-element"
    >
      <div data-testid="start-content-button">{startContent}</div>
      {children}
    </button>
  );
};
