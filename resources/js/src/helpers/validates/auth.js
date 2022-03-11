import * as yup from "yup";
import axios from 'axios'

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
    password_confirmation: yup
    .string()
    .required("El campo confirmar contraseña es requerido")
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
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

export const registerAuth = async (body, type) => {
  const url = type === "register" ? '/api/register' : '/api/login';
  const peticion = await axios.post(url, body);
  const {data} = peticion;

  return data;
}