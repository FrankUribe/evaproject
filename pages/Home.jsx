import React from 'react'
import Menu from '../components/menu'
import imglogo from '../src/assets/navlogo.png'
import recicle from '../src/assets/reciclaje.png'
import { IoArrowDownCircleOutline } from "react-icons/io5"
export default function Home() {
  return (
    <>
    <Menu/>
    <div className="banner">
      <div className="container">
        <img src={imglogo} alt="EVA" />
        <h2 style={{fontWeight:'500'}}>Juntos por una ciudad limpia</h2>
        <div className="scrolldown">
          <small>¿Quiénes somos?</small>
          <IoArrowDownCircleOutline/>
        </div>
      </div>
    </div>
    <section className="about-us">
      <div className="about container">
        <div className='content'>
          <p>Somos una empresa dedicada la gestión
          integral de los residuos sólidos peligrosos y no
          peligrosos, nuestro propósito es impactar
          positivamente en la sociedad, minimizando de
          forma progresiva la contaminación en la región
          Ica, generada por una gestión inadecuada e
          informal de los residuos sólidos.
          </p>
          <br />
          <h4>Servicios</h4>
          <div className='services'>
            <button>Mapeo de contenedores</button>
            <button>Recolección</button>
            <button>Capacitación</button>
            <button>Informa y gana</button>
          </div>
        </div>
        <div className='image'>
          <img src={recicle} alt="Reciclaje" />
        </div>
      </div>
    </section>
    <center className="copyright">
      <small className="container">
        <p>©{new Date().getFullYear()} Derechos reservado</p>
        <p>Centro de Capacitación e Investigación Profesional</p>
      </small>
    </center>
    </>
  )
}
