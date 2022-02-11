import { Link, useLocation } from 'react-router-dom'
import { HiDocumentText, HiShoppingCart } from 'react-icons/hi'
import { TiGroup } from 'react-icons/ti'
import { MdCategory, MdPayment } from 'react-icons/md'
import { FaPeopleArrows } from 'react-icons/fa'

export default function NavBar() {
  const location = useLocation();

  return (
    <div className='navbar'>
      <Link to="/home">
        <img className='navbar-logo' src="https://ventopobox.com/wp-content/uploads/2020/11/logo-home.png"/>
      </Link>
      <ul className='navbar-items'>
        <li className={location.pathname === '/facture' ? 'navbar-item navbar-item__active' : 'navbar-item'}>
          <Link className="navbar-item__ancla" to="/facture">
            <HiDocumentText className='navbar-item__icon'/>
            <p className='navbar-item__name'>Facturar</p>
          </Link>
        </li>
        <li className={location.pathname === '/payment' ? 'navbar-item navbar-item__active' : 'navbar-item'}>
          <Link className="navbar-item__ancla" to="/payment">
            <MdPayment className='navbar-item__icon'/>
            <p className='navbar-item__name'>Tipo de pagos</p>
          </Link>
        </li>
        <li className={location.pathname === '/clients' ? 'navbar-item navbar-item__active' : 'navbar-item'}>
          <Link className="navbar-item__ancla" to="/clients">
            <TiGroup className='navbar-item__icon'/>
            <p className='navbar-item__name'>Clientes</p>
          </Link>
        </li>
        <li className={location.pathname === '/products' ? 'navbar-item navbar-item__active' : 'navbar-item'}>
          <Link className="navbar-item__ancla" to="/products">
            <HiShoppingCart className='navbar-item__icon'/>
            <p className='navbar-item__name'>Productos</p>
          </Link>
        </li>
        <li className={location.pathname === '/category' ? 'navbar-item navbar-item__active' : 'navbar-item'}>
          <Link className="navbar-item__ancla" to="/category">
            <MdCategory className='navbar-item__icon'/>
            <p className='navbar-item__name'>Categorias</p>
          </Link>
        </li>
        <li className={location.pathname === '/providers' ? 'navbar-item navbar-item__active' : 'navbar-item'}>
          <Link className="navbar-item__ancla" to="/providers">
            <FaPeopleArrows className='navbar-item__icon'/>
            <p className='navbar-item__name'>Proveedores</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
