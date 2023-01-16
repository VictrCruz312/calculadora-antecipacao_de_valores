import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import Input, { moneyFormat } from "./components/Input/input";

function App() {
  const schema = yup.object().shape({
    money: moneyFormat.required("valor é requerido"),
    parcelas: yup
      .number()
      .required("parcelas é requerido")
      .max(12, "parcelas máximas são 12")
      .min(1, "parcelas minimas são 1"),
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
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          placeholder="teste"
          name="money"
          error={errors?.money?.message}
          format="money"
          type="text"
        />
        <Input
          register={register}
          placeholder="teste"
          name="parcelas"
          error={errors?.parcelas?.message}
          type="text"
        />
        <Input
          register={register}
          placeholder="teste"
          name="percent"
          error={errors?.percent?.message}
          type="text"
        />
        <button type="submit">click me</button>
      </form>
    </div>
  );
}

export default App;
