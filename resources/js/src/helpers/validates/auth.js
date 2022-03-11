import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup
      .string()
      .required("Favor, ingrese su nombre")
      .min(3, "Su nombre debe tener un minimo de 3 caracteres")
      .max(255, "Su nombre debe tener un maximo de 255 caracteres"),
    email: yup
      .string()
      .required("Tu correo es requerido")
      .email("Ingresa una direccion de correo valida"),
    password: yup
      .string()
      .required("Se requiere tu contraseña")
      .min(7, "Su contraseña debe tener un minimo de 7 caracteres")
      .max(255, "Su contraseña debe tener un maximo de 255 caracteres"),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Tu correo es requerido")
      .email("Ingresa una direccion de correo valida"),
    password: yup
      .string()
      .required("Se requiere tu contraseña")
      .min(7, "Su contraseña debe tener un minimo de 7 caracteres")
      .max(255, "Su contraseña debe tener un maximo de 255 caracteres"),
  })
  .required();
