import style from "../../../styles/avatar.module.scss";

type AvatarProps = {
  label: string;
};

export const Avatar = ({ label }: AvatarProps) => {
  const labelIsEmpty = label?.trim() === "";

  return (
    <div className={style["container-avatar"]}>
      <span data-testid="avatar-element" className={style["text-label"]}>
        {labelIsEmpty ? "X" : label?.trim()?.substring(0, 3).toUpperCase()}
      </span>
    </div>
  );
};
