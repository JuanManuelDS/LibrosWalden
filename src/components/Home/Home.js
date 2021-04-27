import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
import Item from '../ItemListContainer/ItemList/Item/Item';
import Catalogo from '../../Catalogo';

export default function Home(){
    
    return (
        <main>
            <div className='bgDiv'>
                <p className='tituloHome'>LA BÚSQUEDA DE TU NUEVA LIBRERÍA PREFERIDA TERMINA ACÁ. <br/>LIBROS WALDEN</p>
                <div className='favoritos'>
                    <p className='favoritos-titulo'>Más vendidos del mes</p>
                    <div className='row container-fluid'>
                        <div className='col masLeido'><Item libro={Catalogo()[2]} /></div>
                        <div className='col masLeido'><Item libro={Catalogo()[7]} /></div>
                        <div className='col masLeido'><Item libro={Catalogo()[5]} /></div>
                    </div>
                    <p className='linkCatalogo'><Link to={'/libros'} style={{color: 'black'}}>Ver catálogo completo</Link></p>
                </div>
            </div>  
        </main>
    )
}