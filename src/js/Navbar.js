import React from 'react';

function Navbar() {
    return (
        <header id="home">
            <nav>
                <a href="#home" id="site-logo">
                    <img src="img/logo.svg" alt="Logo"/>
                </a>
                <ul id="main-menu">
                    <li class="menu-item active">
                        <a href="#home">Home</a>
                    </li>
                    <li class="menu-item">
                        <a href="#about">About</a>
                    </li>
                    <li class="menu-item">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class="menu-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export { Navbar };
  