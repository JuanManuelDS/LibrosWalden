import React from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import WaldenImg from '../../multimedia/Walden-HenryThoreau.jfif';
import HaciaUnFuturoVeganoImg from '../../multimedia/Hacia-un-futuro-vegano.jfif';
import UnMundoFelizImg from '../../multimedia/Un-mundo-feliz.jfif';
import HippieImg from '../../multimedia/Hippie.jpg';

export default function ItemListContainer () {

    const productos = [
        {
            id: 1,
            imagen: WaldenImg,
            titulo: 'Walden',
            autor: 'Henry David Thoreau' 
        },
        {
            id: 2,
            imagen: HaciaUnFuturoVeganoImg,
            titulo: 'Hacia un futuro vegano',
            autor: 'Tobias Leenaert'
        },
        {
            id: 3,
            imagen: UnMundoFelizImg,
            titulo: 'Un mundo feliz',
            autor: 'Aldous Huxley',
        },
        {
            id: 4,
            imagen: HippieImg,
            titulo: 'Hippie',
            autor: 'Paulo Coelho'
        }
    ];

    const [arrayItems, setArrayItems] = useState([])

    const promiseProductos = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    });

    promiseProductos.then(()=>{
        
    }).catch()

    return(
    <div className='ItemListContainer'>
        <ItemList />
    </div>
    )
}
