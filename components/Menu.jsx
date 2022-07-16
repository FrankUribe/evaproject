import React, { useEffect, useState } from 'react'
import navlogo from '../src/assets/navlogo.png'
import { IoPersonCircleOutline } from "react-icons/io5";
export default function Menu() {
  const [location, setlocation] = useState()
  useEffect(() => {
    setlocation(window.location.href.split('/')[3])
  }, [])
  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <img src={navlogo} alt="EVA" />
        </div>
        <div className="nav-menu">
          <a href="/inicio" className={location === 'inicio' || location === '' ? 'menu-item active':'menu-item'}>Inicio</a>
          <a href="/servicio-al-ciudadano" className={location === 'servicio-al-ciudadano' ? 'menu-item active':'menu-item' }>Servicio al ciudadano</a>
          <button>Cuenta cliente <IoPersonCircleOutline/> </button>
        </div>
      </div>
    </nav>
  )
}
