import React from 'react';
import './NavBar.css';
import Carrito from '../Carrito/Carrito'
import {Link} from 'react-router-dom'

export default function NavBar ({padding}) {
    return (
        <nav>
            <div>
            <Carrito /> 
                <ul>
                    <li><Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
                    <li> <Link to={'/libros'} style={{color: 'white', textDecoration: 'none'}}>Libros</Link></li>
                </ul>
                
                <span>
                    <Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>Walden Libros</Link>
                </span>
            </div>
        </nav>
    )
}