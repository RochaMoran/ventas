import React from 'react';
import ControlInput from '../../controlInput'
import Button from '../../button'
import GoogleIcon from '../../../assets/icons/google-icon.png'
import RegisterImage from '../../../assets/register-image-2.svg'
import { useNavigate   } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate ();

  return (
    <div className='auth'>
      <div className='auth-container'>
        <div className="auth-container__image">
          <img className='auth-image' src={RegisterImage} alt="register" />
          <p className='auth-paragraph'>¿Ya tienes una cuenta?</p>
          <Button onClick={() => navigate('/login')} className="btn-auth" text="Iniciar Sesión" />
        </div>
        <form className='auth-form'>
          <h3 className='auth-title'>Registrarse</h3>
          <div className='auth-controlInput'>
            <label>Nombre</label>
            <ControlInput placeholder="Ingrese su nombre de usuario" />
          </div>
          <div className='auth-controlInput'>
            <label>Correo Eléctronico</label>
            <ControlInput placeholder="Ingrese su email" />
          </div>
          <div className='auth-controlInput'>
            <label>Contraseña</label>
            <ControlInput placeholder="Ingrese su contraseña" />
          </div>
          <Button className="btn btn-primary" text="Registrarse" />
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
