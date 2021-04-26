import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import Catalogo from '../../Catalogo'

export default function ItemListContainer () {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const task = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(Catalogo())
            }, 2000)
        });

        task.then(resolved => {
            setProductos(resolved)
        });
    }, [])
    
    

    return (
        <div className='ItemListContainer'>
            {productos.length>0 ? <ItemList props={productos} /> : <h1>Cargando catálogo...</h1>}
        </div>
    )

    
}
