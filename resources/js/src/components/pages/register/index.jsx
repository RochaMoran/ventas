import React from 'react';
import Button from '../../button'
import GoogleIcon from '../../../assets/icons/google-icon.png'
import RegisterImage from '../../../assets/register-image-2.svg'
import { useNavigate   } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useUser } from '../../hooks/index'
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../../helpers/validates/auth'
import MessageError from '../../messageError';

export default function Register() {
  const navigate = useNavigate ();
  const {login} = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    login();
    navigate('/')
  };

  return (
    <div className='auth'>
      <div className='auth-container'>
        <div className="auth-container__image">
          <img className='auth-image' src={RegisterImage} alt="register" />
          <p className='auth-paragraph'>¿Ya tienes una cuenta?</p>
          <Button onClick={() => navigate('/login')} className="btn-auth" text="Iniciar Sesión" />
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
            <input className='input input-auth' placeholder="Ingrese su contraseña" {...register("password")} />
          </div>
          <MessageError error={errors?.password?.message} />
          <Button type="submit" className="btn btn-primary" text="Registrarse" />
          <Button onClick={() => navigate('/login')} className="btn btn-secondary btn-auth__secondary" text="Iniciar Sesión" />
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
