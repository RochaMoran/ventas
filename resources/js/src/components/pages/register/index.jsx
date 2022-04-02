import React from 'react';
import Button from '../../button'
import GoogleIcon from '../../../assets/icons/google-icon.png'
import RegisterImage from '../../../assets/register-image-2.svg'
import { useForm } from "react-hook-form";
import { useAuth } from '../../hooks/index'
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../../helpers/validates/auth'
import { useNavigate   } from 'react-router-dom'
import MessageError from '../../messageError';

export default function Register() {
  const navigate = useNavigate ();
  const { onSubmit, error } = useAuth("register")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <div className='auth'>
      <div className='auth-container'>
        <div className="auth-container__image">
          <img className='auth-image' src={RegisterImage} alt="register" />
          <p className='auth-paragraph'>¿Ya tienes una cuenta?</p>
          <Button onClick={() => navigate('/')} className="btn-auth" text="Iniciar Sesión" />
        </div>
        <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='auth-title'>Registrarse</h3>
          <div className='auth-controlInput'>
            <label>Nombre</label>
            <input className='input input-auth' placeholder="Ingrese su nombre de usuario" {...register("name")} />
          </div>
          <MessageError error={errors?.name?.message} />
          <div className='auth-controlInput'>
            <label>Correo Eléctronico</label>
            <input className='input input-auth' placeholder="Ingrese su email" {...register("email")} />
          </div>
          <MessageError error={errors?.email?.message} />
          <div className='auth-controlInput'>
            <label>Contraseña</label>
            <input className='input input-auth' type="password" placeholder="Ingrese su contraseña" {...register("password")} />
          </div>
          <MessageError error={errors?.password?.message} />
          <div className='auth-controlInput'>
            <label>Confirmar Contraseña</label>
            <input className='input input-auth' type="password" placeholder="Ingrese su contraseña nuevamente" {...register("password_confirmation")} />
          </div>
          <MessageError error={errors?.password_confirmation?.message} />
          <Button type="submit" className="btn btn-primary" text="Registrarse" />
          <Button onClick={() => navigate('/')} className="btn btn-secondary btn-auth__secondary" text="Iniciar Sesión" />
          {error && <MessageError error={error} />}
          <div className='auth-or__container'>
            <p>or</p>
            <button className='btn'>
              <img src={GoogleIcon} alt="register-or-google" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
