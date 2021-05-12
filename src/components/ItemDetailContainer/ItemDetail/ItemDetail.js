import React, {useContext} from 'react';
import './ItemDetail.css';
import {CarritoContext} from './../../../context/CarritoContext'

export default function ItemDetail({libro}) {
    let img=Object.keys(libro.imagen);

    const [onAgregar] = useContext(CarritoContext)

    return(
        <div className='ItemDetail'>
            <img src={libro.imagen[img]} />
            <div className='detalles'>
                <p className='titulo'>{libro.titulo}</p>
                <p className='autor'>Autor: {libro.autor}</p>
                <p className='descripcion'>{libro.descripcion}</p>
                <form id='ItemDetailForm'>
                    <select name='formatoLibro' id='formatoLibro'>
                        <option value='tapaDura'>Tapa dura ${libro.precio[0]}</option>
                        <option value='tapaBlanda'>Tapa blanda ${libro.precio[1]}</option>
                        <option value='ebook'>Ebook ${libro.precio[2]}</option>
                    </select>
                    <input type='button' onClick={()=>onAgregar(libro)} value='Agregar al Carrito'  />
                </form>
            </div>
        </div>
    )
}