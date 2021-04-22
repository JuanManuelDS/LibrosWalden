import React from 'react';
import './NavBar.css';
import Carrito from '../Carrito/Carrito'

export default function NavBar ({padding}) {
    return (
        <nav>
            <ul>
                <li style={{padding}}>Home</li>
                <li style={{padding}}>Nosotros</li>
                <li style={{padding}}>Libros</li>
            </ul>
            <Carrito />
            <span>
                Walden Libros
            </span>
        </nav>
    )
}