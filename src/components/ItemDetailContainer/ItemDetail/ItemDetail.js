import React from 'react';
import './ItemDetail.css'

export default function ItemDetail({libro}) {
    let img=Object.keys(libro.imagen);
    return(
        <div className='ItemDetail'>
            <img src={libro.imagen[img]} />
            <div className='descripcion'>
                <p className='titulo'>{libro.titulo}</p>
                <p className='autor'>{libro.autor}</p>
                <p className='descripcion'>{libro.descripcion}</p>
                <p className='precio'>${libro.precio}</p>
            </div>
        </div>
    )
}