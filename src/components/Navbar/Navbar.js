import React from 'react';
import './Navbar.scss'

function Navbar() {
    return (
        <header id='home'>
            <nav className='d-flex flex-row p-3'>
                <a href='#home' id='logo'>
                    <img src='../images/logo.png' alt="Volko's food logo"/>
                </a>
                <ul className='d-flex w-100 justify-content-around pt-2' id='menu'>
                    <li class='menu-item active'>
                        <a href='#home'>Inicio</a>
                    </li>
                    <li class='menu-item'>
                        <a href='#'>Mi Inventario</a>
                    </li>
                    <li class='menu-item'>
                        <a href='#'>Mis Recetas</a>
                    </li>
                    <li class='menu-item'>
                        <a href='#'>Mis Comidas</a>
                    </li>
                    <li class='menu-item'>
                        <a href='#'>Mis Historial</a>
                    </li>
                    <li class='menu-item'>
                        <a href='#'>Mi Usuarix</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export { Navbar };
  