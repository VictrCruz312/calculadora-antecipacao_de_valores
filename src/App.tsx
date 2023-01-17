import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import Input, { moneyFormat } from "./components/Input/input";
import Description from "./components/Description";
import Title from "./components/Title";
import { ContainerApp, StyledContainerResult } from "./style";

function App() {
  const schema = yup.object().shape({
    money: moneyFormat.required("valor é requerido"),
    parcelas: yup
      .number()
      .typeError("Porcentagem deve ser um número*")
      .required("parcelas é requerido")
      .max(12, "maximo 12* ")
      .min(1, "minimo 1*"),
    percent: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <ContainerApp className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Simule sua Antecipação</Title>
        <div>
          <Description>informe o valor da venda*</Description>
          <Input
            register={register}
            placeholder=""
            name="money"
            error={errors?.money?.message}
            format="money"
            type="text"
          />
        </div>
        <div>
          <Description>Em quantas parcelas*</Description>
          <Input
            register={register}
            placeholder=""
            name="parcelas"
            error={errors?.parcelas?.message}
            type="text"
          />
          <span>Máximo de 12 parcelas</span>
        </div>
        <div>
          <Description>Informe o percentual MDR*</Description>
          <Input
            register={register}
            placeholder=""
            name="percent"
            error={errors?.percent?.message}
            type="text"
          />
        </div>
        <button type="submit">calcular</button>
      </form>
      <StyledContainerResult>
        <h2>Você receberá:</h2>
        <Description colorText="#0030b4" fontSize="17px">
          Amanhã: <span>R$ 0,00</span>
        </Description>
        <Description colorText="#0030b4" fontSize="17px">
          Em 15 dias: <span>R$ 0,00</span>
        </Description>
        <Description colorText="#0030b4" fontSize="17px">
          Em 30 dias: <span>R$ 0,00</span>
        </Description>
        <Description colorText="#0030b4" fontSize="17px">
          Em 90 dias: <span>R$ 0,00</span>
        </Description>
      </StyledContainerResult>
    </ContainerApp>
  );
}

export default App;
