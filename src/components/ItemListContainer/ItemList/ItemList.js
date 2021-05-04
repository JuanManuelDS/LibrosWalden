import React from 'react';
import './ItemList.css';
import Item from './Item/Item';


export default function ItemList ({props}) {

    return (
        <div id='ItemListLibros'>
            {props.map(libro => <Item libro={libro} />)}
        </div>
    );
}