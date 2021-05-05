import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import Catalogo from '../../Catalogo';
import loadingGIF from '../../multimedia/loading.gif'
import loadingGIF2 from '../../multimedia/loading2.gif'

export default function ItemListContainer () {
    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    useEffect(()=>{
        const task = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(Catalogo())
            }, 2000)
        });

        task.then(resolved => {
            if(category===undefined){
                setProductos(resolved)
            } else{
                const categoryFilter = resolved.filter(libro=>libro.categoria === category);
                setProductos(categoryFilter)
            }
        });
        
    }, [category])

    return (
        <div className='ItemListContainer'>
             {productos.length>0 ? <React.Fragment>
            <div id='ItemListContainerFiltros'>
                <p>Filtros:</p>
                <ul>
                    <li><Link to={'/categories/ficcion'} style={{color: 'black', textDecoration: 'none'}}>Ficción</Link></li>
                    <li><Link to={'/categories/ensayos'} style={{color: 'black', textDecoration: 'none'}}>Ensayos</Link></li>
                </ul>
            </div>
            <div id='ItemListContainerProductos'>
                <ItemList props={productos} />
            </div>
            </React.Fragment>  : <img className='loadingGIF' src={loadingGIF} />}
        </div>
    )

    
}
