import React, { useState } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form/dist/types";
import { moneyFormatSchema } from "../../schemas/Antecipation";
import { InputStyled } from "./style";

interface IProps {
  register: any;
  name: string;
  placeholder: string;
  type: string;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  format?: string;
}

const Input: React.FC<IProps> = ({
  register,
  name,
  placeholder,
  error,
  format,
  type,
}) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleValueMoneyFormat = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    return moneyFormatSchema
      .validate({ money: event.target.value })
      .then((data) => setValue(data.money));
  };

  return (
    <InputStyled>
      {format === "money" ? (
        <input
          placeholder={placeholder}
          type={type}
          {...register(name)}
          onChange={handleValueMoneyFormat}
          value={value}
        />
      ) : (
        <input placeholder={placeholder} type={type} {...register(name)} />
      )}

      {typeof error === "string" ? <span>{error}</span> : null}
    </InputStyled>
  );
};

export default Input;
