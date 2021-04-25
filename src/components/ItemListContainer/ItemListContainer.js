import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import WaldenImg from '../../multimedia/Walden-HenryThoreau.jfif';
import HaciaUnFuturoVeganoImg from '../../multimedia/Hacia-un-futuro-vegano.jfif';
import UnMundoFelizImg from '../../multimedia/Un-mundo-feliz.jfif';
import HippieImg from '../../multimedia/Hippie.jpg';

export default function ItemListContainer () {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const task = new Promise((resolve, reject) => {
        const catalogo = [
                {
                    id: 1,
                    titulo: 'Walden',
                    autor: 'Henry Thoreau',
                    imagen: {WaldenImg}
                },
                {
                    id: 2,
                    titulo: 'Hacia un futuro vegano',
                    autor: 'Tobias Leenaert',
                    imagen: {HaciaUnFuturoVeganoImg}
                },
                {
                    id: 3,
                    titulo: 'Un mundo feliz',
                    autor: 'Aldous Huxley',
                    imagen: {UnMundoFelizImg}
                },
                {
                    id: 4,
                    titulo: 'Hippie',
                    autor: 'Paulo Coelho',
                    imagen: {HippieImg}
                }
            ];
            setTimeout(()=>{
                resolve(catalogo)
            }, 3000)
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
