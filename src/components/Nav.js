import React, { useState } from 'react';
import logo from '../images/logo.png';

const Nav = () => {

    const [menuOpen, setMenuOpen] =useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    }

return (
<>
<nav className={`desktop-navbar ${menuOpen ? "Open" : ""}`}>

<a className='logo' href='/'>
<img
src={logo}
width='150'
alt='logo'
/>
</a>

{/* Mobile navbar */}

<div className='burger-icon' onClick={toggleMenu}>
<div className='burger-bar'></div>
<div className='burger-bar'></div>
<div className='burger-bar'></div>
</div>

{/* Destop navbar */}
<ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
<li> 
    <a href='/'>Home</a>
    </li>
<li>
    <a href='#'>About</a>
    </li>
<li>
    <a href='#'>Services</a>
    </li>
<li>
    <a href='#'>Menu</a>
    </li>
<li>
    <a href='#'>Reservations</a>
    </li>
<li>
    <a href='#'>Order online</a>
    </li>
<li>
    <a href='#'>Login</a>
    </li>
</ul>
</nav>

</>

)
}

export default Nav;