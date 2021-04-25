import React from 'react';
import './Item.css';

export default function Item({id, imagen, titulo, autor}) {
    console.log(id)
    return (
        <div className='Item'>
            <img src={imagen} />
            <div key={id}>
                <p className='Item-titulo'>{titulo}</p>
                <p className='Item-autor'>{autor}</p>
            </div>
        </div>
    )
}