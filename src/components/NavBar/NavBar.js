import React from 'react';
import './style.css';
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
                WaldenLibros
            </span>
        </nav>
    )
}