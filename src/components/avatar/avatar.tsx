import style from "../../../styles/avatar.module.scss";

type AvatarProps = {
  label: string;
};

export const Avatar = ({ label }: AvatarProps) => {
  return (
    <div className={style["container-avatar"]}>
      <span className={style["text-label"]}>
        {label?.trim()?.substring(0, 3).toUpperCase()}
      </span>
    </div>
  );
};
