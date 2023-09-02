import { useState } from "react";
import "bulma/css/bulma.css"

function ItemCount({stock, initial, onAdd})
{
    const [quantity,  setQuantity] = useState(initial);

    function increment()
    {
        if (quantity < stock)
            setQuantity(quantity + 1);
    }

    function decrement(){
        if (quantity > 1 )
        setQuantity(quantity-1);
    }

    return (
            <div className ="container is-max-desktop">
                <div>
                    <button className="button is-danger" onClick={decrement}>-</button>
                    <span className="tag is-primary is-medium">{quantity}</span>
                    <button className="button is-primary" onClick={increment}>+</button>
                </div>
                <button className="button is-success" onClick={onAdd(quantity)} disabled = {!stock}>Agregar al carrito</button>
            </div>
    );       
}

export default ItemCount