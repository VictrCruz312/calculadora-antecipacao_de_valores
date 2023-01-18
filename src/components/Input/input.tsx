import React, { useState } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form/dist/types";
import * as yup from "yup";
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

export const moneyFormat = yup
  .string()
  .transform((value) => {
    if (value) {
      return (
        "R$" +
        value
          .replace(/\D/g, "")
          .replace(/(\d{2})$/, ",$1")
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
    }
    return value;
  })
  .default(null);

const Input: React.FC<IProps> = ({
  register,
  name,
  placeholder,
  error,
  format,
  type,
}) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const schemaMoneyFormat = yup.object().shape({
    money: moneyFormat.required(),
  });

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    return schemaMoneyFormat
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
          onChange={handleValue}
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
