import React from 'react';
import './style.css'

export default function ItemListContainer ({text}) {
    return(
    <div className='ItemListContainer'>
        <h1>
            {text}
        </h1>
    </div>
    )
}