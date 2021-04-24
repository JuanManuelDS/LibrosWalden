import React from 'react';
import './Item.css';

export default function Item(catalogo) {
    return (
        <React.Fragment>
        {catalogo.map(producto => {
            <div className='Item'>
            <img src={producto.imagen} />
            <div>
                <p className='Item-titulo'>{producto.titulo}</p>
                <p className='Item-autor'>{producto.autor}</p>
            </div>
        </div>
        })   
        }
        </React.Fragment>
    )
}