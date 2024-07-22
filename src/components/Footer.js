import React from "react";
import logoSmall from '../images/smallLogo.png'

const Footer = () => {

return (
<footer>
    <section>
    <div>
   <img src={logoSmall} alt="logo" className="small-logo" />
   <p>Little Lemon is a family-owned Mediterranean restaurant, focused on
   traditional recipes served with a modern twist.</p>
   </div>

<div>
    <h3>Contacts</h3>
    <ul>
        <li>Adress: 873 Downtown</li>
        <li> Phone: +0123 777 333</li>
        <li> E-mail: little-lemon@gmail.com</li>      
    </ul>
</div>

<div>
    <h3>Social links</h3>
    <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>   
    </ul>
</div>

    </section>
</footer>   

);
};

export default Footer;