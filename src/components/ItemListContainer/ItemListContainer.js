import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import Catalogo from '../../Catalogo';
import loadingGIF from '../../multimedia/loading.gif'

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
                console.log('me ejecuté')
            } else if(category==='ficcion'){
                const ficcionCategory = resolved.filter(libro => libro.categoria==='ficcion');
                setProductos(ficcionCategory)
            } else if(category==='ensayos'){
                const ensayoCategory = resolved.filter(libro => libro.categoria==='ensayo');
                setProductos(ensayoCategory)
            }
        });
        
    }, [category])

    return (
        <div className='ItemListContainer'>
             {productos.length>0 ? <React.Fragment>
            <div id='ItemListContainerFiltros'>
                <ul>
                    <li><Link to={'categories/ficcion'} style={{color: 'black', textDecoration: 'none'}}>Ficción</Link></li>
                    <li><Link to={'categories/ensayos'} style={{color: 'black', textDecoration: 'none'}}>Ensayos</Link></li>
                </ul>
            </div>
            <div id='ItemListContainerProductos'>
                <ItemList props={productos} />
            </div>
            </React.Fragment>  : <img className='loadingGIF' src={loadingGIF} />}
        </div>
    )

    
}
