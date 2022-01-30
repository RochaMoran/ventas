import React from 'react';
import ControlInput from '../../controlInput'
import Button from '../../button'
import GoogleIcon from '../../../assets/icons/google-icon.png'
import RegisterImage from '../../../assets/register-image.svg'
import { useNavigate   } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className='auth'>
      <div className='auth-container'>
        <form className='auth-form'>
          <h3 className='auth-title'>Iniciar Sesión</h3>
          <div className='auth-controlInput'>
            <label>Correo Eléctronico</label>
            <ControlInput placeholder="Ingrese su email" />
          </div>
          <div className='auth-controlInput'>
            <label>Contraseña</label>
            <ControlInput placeholder="Ingrese su contraseña" />
          </div>
          <Button className="btn btn-primary" text="Iniciar Sesión" />
          <Button onClick={() => navigate('/register')} className="btn btn-secondary btn-auth__secondary" text="Registrarse" />
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
