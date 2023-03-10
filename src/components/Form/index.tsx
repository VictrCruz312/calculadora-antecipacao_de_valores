import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import toast, { Toaster } from "react-hot-toast";

import Title from "../Title";
import Input from "../Input/input";
import Description from "../Description";
import { StyledForm } from "./style";
import api from "../../services/api";
import { antecipationSchema } from "../../schemas/Antecipation";
import { IResponse } from "../../App";

interface IPropsForm {
  setResponse: React.Dispatch<React.SetStateAction<IResponse | undefined>>;
}

const Form: React.FC<IPropsForm> = ({ setResponse }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(antecipationSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const amountNumber = parseFloat(
      data.amount.replace("R$", "").replace(".", "").replace(",", ".")
    );
    data.amount = amountNumber;

    const loadingRequest = toast.loading("simulando...");

    try {
      const response = await api.post("", { ...data });
      setResponse(response.data);
      toast.success("simulação concluida", {
        id: loadingRequest,
      });
    } catch (error: any) {
      if (error.response.status === 500) {
        toast.error("Erro interno do servidor. Tente novamente mais tarde.");
      } else if (error.response.status === 408) {
        toast.error("Tempo de conexão esgotado. Tente novamente mais tarde.");
      } else {
        toast.error("Falha ao gerar simulação.", {
          id: loadingRequest,
        });
        toast.error("Campo venda deve ser no minimo 1000");
        console.log("Error", error.message);
      }
    }
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
      <Toaster
        toastOptions={{
          style: {
            background: "var(--Blue)",
            color: "var(--White)",
          },
        }}
      />
    </StyledForm>
  );
};

export default Form;
