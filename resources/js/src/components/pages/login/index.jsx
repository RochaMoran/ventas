import React from 'react';
import Button from '../../button'
import GoogleIcon from '../../../assets/icons/google-icon.png'
import RegisterImage from '../../../assets/register-image.svg'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/index'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../../../helpers/validates/auth'
import MessageError from '../../messageError';

export default function Login() {
  const navigate = useNavigate();
  const {login} = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    login();
    navigate('/')
  };

  return (
    <div className='auth'>
      <div className='auth-container'>
        <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='auth-title'>Iniciar Sesión</h3>
          <div className='auth-controlInput'>
            <label>Correo Eléctronico</label>
            <input className='input input-auth' placeholder="Ingrese su email" {...register("email")} />
          </div>
          <MessageError error={errors?.email?.message} />
          <div className='auth-controlInput'>
            <label>Contraseña</label>
            <input className='input input-auth't placeholder="Ingrese su contraseña" {...register("password")} />
          </div>
          <MessageError error={errors?.password?.message} />
          <Button className="btn btn-primary" text="Iniciar Sesión" />
          <Button type="submit" className="btn btn-secondary btn-auth__secondary" text="Registrarse" />
          <div className='auth-or__container'>
            <p>or</p>
            <button className='btn'>
              <img src={GoogleIcon} alt="register-or-google" />
            </button>
          </div>
        </form>
        <div className="auth-container__image">
          <img className='auth-image auth-image__secondary' src={RegisterImage} alt="register" />
          <p className='auth-paragraph'>¿Aún no te registras?</p>
          <Button onClick={() => navigate('/register')} className="btn-auth" text="Registrarse" />
        </div>
      </div>
    </div>
  )
}
