import React from 'react';
import './NavBar.css';
import Carrito from '../Carrito/Carrito'
import {Link} from 'react-router-dom'

export default function NavBar ({padding}) {
    return (
        <nav>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Libros</li>
                </ul>
                <Carrito />
                <span>
                    <Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>Walden Libros</Link>
                </span>
            </div>
        </nav>
    )
}