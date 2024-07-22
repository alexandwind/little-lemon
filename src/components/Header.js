import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../images/hero-banner.jpg';

const Header = () => {

return (
<>

<header className='header'>
<section>
<div className='hero'>
    
<h1>Little Lemon</h1>

<p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on
traditional recipes served with a modern twist.</p>

<Link to="/booking">
<button aria-label='On Click'>Reserve Table</button>
</Link>

</div>

<div className='hero-img'>
<img
src={heroImg}
alt='banner'
/>
</div>

</section>
</header>
</>
)
}

export default Header;