import React from 'react';
import ControlInput from '../../controlInput'
import Button from '../../button'
import GoogleIcon from '../../../assets/icons/google-icon.png'

export default function Register() {
  return (
    <div className='auth'>
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
        <Button className="btn btn-secondary" text="Iniciar Sesión" />
        <div className='auth-or__container'>
          <p>or</p>
          <button className='btn'>
            <img src={GoogleIcon} alt="register-or-google" />
          </button>
        </div>
      </form>
    </div>
  )
}
