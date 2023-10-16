import style from "../../../../styles/components/text-field.module.scss";
import { Control, Controller, Path } from "react-hook-form";
import { z } from "zod";
import { formClientSchema } from "@/templates/manager-client/manager-client.schema";
import classNames from "classnames";

type FormClientData = z.infer<typeof formClientSchema>;

type TextFieldProps = {
  name: Path<FormClientData>;
  label: string;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  control: Control<FormClientData>;
  maxLength?: number;
  mask?: string;
  maskChar?: string;
};

export const TextField = ({
  label,
  name,
  required = true,
  invalid,
  errorMessage,
  control,
  maxLength,
  mask,
  maskChar,
}: TextFieldProps) => {
  const inputComponent = (field) => (
    <div className={style.input}>
      <label
        className={classNames(style["input-underlined"], {
          [style["input-danger"]]: invalid,
        })}
      >
        <input {...field} required={required} max={maxLength} />

        <span className={style["input-label"]}>{label}</span>
        {invalid && (
          <span className={style["input-helper"]}>{errorMessage}</span>
        )}
      </label>
    </div>
  );

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => inputComponent(field)}
    />
  );
};
