import React from 'react';
import './Item.css';

export default function Item({imagen, titulo, autor}) {
    return (
        <div className='Item'>
            <img src={imagen} />
            <div>
                <p className='Item-titulo'>{titulo}</p>
                <p className='Item-autor'>{autor}</p>
            </div>
        </div>
    )
}