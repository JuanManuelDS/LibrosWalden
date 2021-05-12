import React, {useState, useEffect} from 'react'

export const CarritoContext = React.createContext([]);

export const CarritoFunctions = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const onAgregar = libro =>{
        setCarrito([...carrito, libro])
        console.log(carrito)
    }

    return(
        <CarritoContext.Provider value={[onAgregar]}>
            {children}
        </CarritoContext.Provider>
    )

}