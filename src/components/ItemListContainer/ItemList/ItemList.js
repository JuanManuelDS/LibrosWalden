import React from 'react';
import './ItemList.css';
import Item from './Item/Item';


export default function ItemList (productos) {
   

    return (
        <div className='ItemList'>
            <Item prod={productos} />
        </div>
    );
}