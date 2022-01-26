import React from 'react';
import Home from '../../assets/icons/home.png';
import Facture from '../../assets/icons/factura.png';
import Clients from '../../assets/icons/clients.png';
import Products from '../../assets/icons/products.png';
import Categories from '../../assets/icons/categories.png';
import Providers from '../../assets/icons/providers.png';
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar'>
      <img className='navbar-logo' src="https://ventopobox.com/wp-content/uploads/2020/11/logo-home.png"/>
      <ul className='navbar-items'>
        <li className='navbar-item navbar-'>
          <Link className="navbar-item__ancla" to="/">
            <img className='navbar-item__icon' src={Home}/>
            <p className='navbar-item__name'>Inicio</p>
          </Link>
        </li>
        <li className='navbar-item navbar-'>
          <Link className="navbar-item__ancla" to="/">
            <img className='navbar-item__icon' src={Facture}/>
            <p className='navbar-item__name'>Facturar</p>
          </Link>
        </li>
        <li className='navbar-item navbar-'>
          <Link className="navbar-item__ancla" to="/">
            <img className='navbar-item__icon' src={Clients}/>
            <p className='navbar-item__name'>Clientes</p>
          </Link>
        </li>
        <li className='navbar-item navbar-'>
          <Link className="navbar-item__ancla" to="/">
            <img className='navbar-item__icon' src={Products}/>
            <p className='navbar-item__name'>Productos</p>
          </Link>
        </li>
        <li className='navbar-item navbar-'>
          <Link className="navbar-item__ancla" to="/">
            <img className='navbar-item__icon' src={Categories}/>
            <p className='navbar-item__name'>Categorias</p>
          </Link>
        </li>
        <li className='navbar-item navbar-'>
          <Link className="navbar-item__ancla" to="/">
            <img className='navbar-item__icon' src={Providers}/>
            <p className='navbar-item__name'>Proveedores</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
