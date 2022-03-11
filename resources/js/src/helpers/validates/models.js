import * as yup from "yup";

export const categorySchema = yup
  .object({
    name_category: yup
      .string()
      .required("Favor, ingrese su nombre")
      .min(3, "Su nombre debe tener un minimo de 3 caracteres")
      .max(255, "Su nombre debe tener un maximo de 255 caracteres"),
  })
  .required();