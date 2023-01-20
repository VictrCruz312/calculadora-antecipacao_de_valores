import * as yup from "yup";

const moneyFormat = yup
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

export const moneyFormatSchema = yup.object().shape({
  money: moneyFormat.required(),
});

export const antecipationSchema = yup.object().shape({
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
