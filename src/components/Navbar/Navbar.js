import React, { useState } from 'react';
import './NavbarStyles.scss';
import { navItems } from '../../helpers/helpers';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='d-flex flex-row p-3'>
      <a href='#home' className='logo'>
        <img
          src='../images/logo.png'
          alt="Volko's food logo: orange and green open menu"
        />
      </a>
      <ul
        className={`nav-items w-100 justify-content-around pt-2 ${
          menuOpen ? 'show' : ''
        }`}
      >
        {navItems.map((item, index) => (
          <li key={index} className={item.active ? 'active' : ''}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <button
        className={`burger-menu ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
