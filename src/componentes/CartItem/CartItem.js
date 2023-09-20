import {CartContext} from '../CartContext/CartContext';
import React from 'react';
import { useContext } from 'react';




const CartItem = ({ products }) => {
    const { removeItem} = useContext(CartContext)


    return (
        <div className='container'>
            <picture>

                <img src={products.imagen} alt={products.nombre} className="imgContainer"/>

            </picture>
            <div className='productsCategorie'>
                <h2>
                    {products.nombre}
                </h2>
                <p>
                    Cantidad: {products.quantity}
                </p>
                <p>
                    Subtotal: {products.quantity * products.precio}
                </p>
                <button className='button is-warning' onClick={() => removeItem(products.id)}>Eliminar</button>
                
            </div>
        </div>

    )
};

export default CartItem;
