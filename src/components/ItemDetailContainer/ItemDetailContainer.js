import React, {useState, useEffect} from 'react';
import Catalogo from '../../Catalogo'
import ItemDetail from './ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'
import loadingGIF from '../../multimedia/loading.gif'

export default function ItemDetailContainer(){
    const [libro, setLibro] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const task = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(Catalogo())
            }, 2000)
        })

        task. then(resolved => setLibro(resolved[id]))
    }, []);

    console.log('me rendericé')

    return (
        <div className='ItemDetailContainer'>
            {Object.keys(libro).length!==0 ? <ItemDetail libro={libro}/> : <img className='loadingGIF' src={loadingGIF} />}
        </div>
    )

}