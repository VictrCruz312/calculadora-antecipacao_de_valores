import React from "react";
import Title from "../Title";
import { StyledForm } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import toast from "react-hot-toast";

import Input, { moneyFormat } from "../Input/input";
import Description from "../Description";
import api from "../../services/api";
import { IResponse } from "../../App";

interface IPropsForm {
  setResponse: React.Dispatch<React.SetStateAction<IResponse | undefined>>;
}

const Form: React.FC<IPropsForm> = ({ setResponse }) => {
  const schema = yup.object().shape({
    amount: moneyFormat.required("valor é requerido"),
    installments: yup
      .number()
      .typeError("parcela deve ser um número*")
      .required("parcelas é requerido")
      .max(12, "maximo 12* ")
      .min(1, "minimo 1*"),
    mdr: yup
      .number()
      .typeError("Porcentagem deve ser neste formato: 0.0*")
      .required("numero de 0 a 100")
      .max(100, "maximo 100* ")
      .min(0, "minimo 0*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    const amountNumber = parseFloat(
      data.amount.replace("R$", "").replace(".", "").replace(",", ".")
    );
    data.amount = amountNumber;

    const response = await toast.promise(api.post("", { ...data }), {
      loading: "Simulando...",
      success: <b>Simulação concluida</b>,
      error: (
        <b>
          Falha ao gerar simulação. Verifique o campo de venda, ele deve ser no
          mínimo 1000.
        </b>
      ),
    });
    setResponse(response.data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Simule sua Antecipação</Title>
      <div>
        <Description>informe o valor da venda*</Description>
        <Input
          register={register}
          placeholder=""
          name="amount"
          error={errors?.amount?.message}
          format="money"
          type="text"
        />
      </div>
      <div>
        <Description>Em quantas parcelas*</Description>
        <Input
          register={register}
          placeholder=""
          name="installments"
          error={errors?.installments?.message}
          type="text"
        />
        <span className="spanForm">Máximo de 12 parcelas</span>
      </div>
      <div>
        <Description>Informe o percentual MDR*</Description>
        <Input
          register={register}
          placeholder=""
          name="mdr"
          error={errors?.mdr?.message}
          type="text"
        />
      </div>
      <button type="submit">calcular</button>
    </StyledForm>
  );
};

export default Form;
