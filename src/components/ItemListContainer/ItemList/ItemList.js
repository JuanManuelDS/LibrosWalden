import React from 'react';
import './ItemList.css';
import Item from './Item/Item';


export default function ItemList ({props}) {
    console.log(props)
    return (
        <div className='ItemList'>
            {props.map(libro => {
                <Item libro={libro} />
                console.log(libro)
            })}
        </div>
    );
}