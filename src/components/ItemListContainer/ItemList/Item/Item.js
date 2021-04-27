import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom'

export default function Item({libro}) {
    let img=Object.keys(libro.imagen);
    return (
        <div  key={libro.id} className='Item'><Link style={{textDecoration: 'none'}}to={`/detail/${libro.id}`}>
            <img src={libro.imagen[img]} />
            <div>
                <p className='Item-titulo'>{libro.titulo}</p>
                <p className='Item-autor'>{libro.autor}</p>
            </div>
        </Link>
        </div>
    ) 
}