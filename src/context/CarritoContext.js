import React, {useState, useEffect} from 'react'

export const CarritoContext = React.createContext([]);

export const CarritoFunctions = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (e,libro) => {
        e.preventDefault();
        //Me devuelve el formato del libro seleccionado
        const bookFormat = e.target.parentElement.querySelector('#formatoLibro').value;
        
        const isInCartIndex = isInCart(libro, bookFormat);

        //Si es -1 significa que ya está en el carrito
        if(isInCartIndex !== -1){
            let newCart = [...cart];
            newCart[isInCartIndex].quantity++;
            newCart[isInCartIndex].price += newCart[isInCartIndex].price
            setCart([...newCart])
           
        } else {

            let precio = () => {
                switch (bookFormat) {
                    case 'tapaDura':
                        precio = libro.precio[0]
                        break;
                    case 'tapaBlanda':
                        price = libro.precio[1]
                        break;
                    case 'eBook':
                        price = libro.precio[2]
                        break;
                }
            }

            console.log(precio)

            let newItem = {
                item: libro,
                format: bookFormat,
                price: precio,
                quantity: 1
            }
            setCart([...cart, newItem]);
        }
        console.log(cart)
    } 

    const isInCart = (libro, bookFormat) => {
        //Checkea si algun el id del libro y el formato de algún item del carrito coincide con el nuevo item
        
        let index = -1;

        cart.forEach((lib, ind) => {
            if(lib.format === bookFormat && lib.item.id === libro.id){
                index = ind
            }
        })

        console.log('index of isIncart: ', index)
    
        return index;
    }
    

    return(
        <CarritoContext.Provider value={{addItem}}>
            {children}
        </CarritoContext.Provider>
    )

}