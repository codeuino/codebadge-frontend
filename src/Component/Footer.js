import React from 'react';
import footerLogo from './../images/footer-logo.svg'
import './Footer.css'
var frontend = window.location.origin;
const Footer = () => {
    if(window.location.href!==`${frontend}/` || window.location.href!==`${frontend}/login` || window.location.href!==`${frontend}/register`){
        return (
            <>
            <div class="footer">
                <div class="footer-logo">
                    <img src={footerLogo} alt="footer logo"/>
                    <p class="logo-text">Track all your projects at one place.</p>
                    
                </div>
            </div>
            {/* <img src={footerRight} class="footer-right"/> */}
            {/* <img src={footerRight} class="footer-right"/> */}
            </>
        );
    }
    else{
        return (
            <>
            </>
        );
    }
}

export default Footer;
