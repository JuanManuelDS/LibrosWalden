import React from 'react';
import './Footer.css';
import logoImg from '../../multimedia/Logo.png'
import fbLogo from '../../multimedia/facebook.png'
import twLogo from '../../multimedia/twitter.png';
import igLogo from '../../multimedia/instagram.png';
import emailLogo from '../../multimedia/email.png';
import leafLogo from '../../multimedia/leaf.png';
import teleLogo from '../../multimedia/phone-call.png';

export default function Footer(){
    
    return(
        <div className='footer'>
            <div className='row'>
                <div className='col'>
                    <p className='direccion'><img src={logoImg}/><br/>Av. Siempre Viva 742<br/>Springfield, EEUU</p>          
                </div>
                <div className='col redes'>
                    <p>Seguinos en redes</p>
                    <div><img src={fbLogo} /><img src={twLogo} /><img src={igLogo} /></div>
                </div>
                <div className='col contacto' >
                    <p>
                        <img src={emailLogo} alt="email logo" />walden@ejemplo.com
                    </p>
                    <p>
                        <img src={teleLogo} alt="teléfono" />+54 9 11555-4444
                    </p>
                    <p>
                        <img src={leafLogo} alt="hojas" />Contactanos
                    </p>
                </div>
                <div className='col-12 copyright'>&copy; 2021 Walden Libros </div>
            </div>
        </div>
    )
}