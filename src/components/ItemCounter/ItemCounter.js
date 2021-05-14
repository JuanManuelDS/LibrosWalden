import React, {useContext} from 'react';
import './ItemCounter.css';
import {CarritoContext} from '../../context/CarritoContext'

export default function ItemCounter (){
    
    const {count, setCount} = useContext(CarritoContext)

    const onAdd = ()=>{
        setCount(count+1);
    }

    const onSubstract = ()=>{
        if(count>0) setCount(count-1)
    }
    
    return(
        <div>
        <button onClick={onAdd} className='ItemCounterButton'>+</button><span id='ItemCountSpan'>{count}</span><button onClick={onSubstract} className='ItemCounterButton'>-</button>
        </div>
    )
}
