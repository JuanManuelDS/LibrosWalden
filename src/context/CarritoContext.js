import React, {useState, useEffect} from 'react'

export const CarritoContext = React.createContext([]);

export const CarritoFunctions = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (e,libro) => {
        e.preventDefault();
        //Me devuelve el formato del libro seleccionado
        const bookFormat = e.target.parentElement.querySelector('#formatoLibro').value;
        
        const isInCartIndex = isInCart(libro, bookFormat);
        //Busco el precio del formato elegido
        let precio = searchPrice(libro, bookFormat);

        //Si es -1 significa que ya está en el carrito
        if(isInCartIndex !== -1){
            let newCart = [...cart];
            newCart[isInCartIndex].quantity++;
            //ERROR: necesito saber el precio del item y después multiplicarlo por la cantidad
            newCart[isInCartIndex].price = precio * newCart[isInCartIndex].quantity;
            setTotal(total+precio)
            setCart([...newCart])
           
        } else {
            
            let newItem = {
                item: libro,
                format: bookFormat,
                price: precio,
                quantity: 1
            }
            setTotal(total+precio)
            setCart([...cart, newItem]);
        }
        
    }

    const deleteItem = (e, libro)=>{
        const bookFormat = e.target.parentElement.querySelector('#formatoLibro').value;
        const itemToDelete = isInCart(libro, bookFormat);
        let newCart = [...cart];
        const amountToDelete = newCart[itemToDelete].price * newCart[itemToDelete].quantity
        newCart.splice(itemToDelete, 1);
        setTotal(total - amountToDelete);
        setCart([...newCart])
    }

    const cleanCart = ()=>{
        setCart([]);
        setTotal(0)
    };

    const isInCart = (libro, bookFormat) => {
        //Checkea si algun el id del libro y el formato de algún item del carrito coincide con el nuevo item
      
        let index = -1;

        cart.forEach((lib, ind) => {
            if(lib.format === bookFormat && lib.item.id === libro.id){
                index = ind
            }
        })
        return index;
    }

    //Busca el precio correcto del item seleccionado
    const searchPrice=(libro, formatoLibro)=>{
        let price = 0
        
        switch(formatoLibro){
            case 'tapaDura':
                price=libro.precio[0]
                break;
            case 'tapaBlanda':
                price=libro.precio[1]
                break;
            case 'ebook':
                price=libro.precio[2]
                break;
        }
        return price;
    }
    

    return(
        <CarritoContext.Provider value={{addItem}}>
            {children}
        </CarritoContext.Provider>
    )

}