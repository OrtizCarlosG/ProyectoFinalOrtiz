import { Link } from 'react-router-dom';
import {CartContext} from '../CartContext/CartContext';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';




const Cart = () => {
    const { cart, totalQuantity, totalPrice, clearCart } = useContext(CartContext);


    if (totalQuantity === 0) {
        return (
            <div>
                <h1 className='title is-1'> No hay Productos en el carrito </h1>
                <Link to='/' className='button is-link'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-circle"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>  </Link>
            </div>
        )
    }

    return (
        <div>
            {
                cart.map(products => <CartItem key={products.id} products={products} />)
            }
            <div>
                <p className='subtitle is-4'>
                    Total: {totalPrice}
                </p>
                <div >
                    
                    <div>

                    <Link to='/checkout' className='button is-success'> Finalizar Compra </Link>

                    </div>
                    <div >
                    <button className='button is-danger' onClick={() => clearCart()}> Vaciar carrito </button>

                    </div>
            
                </div>
                
            </div>
            

        </div>
    )




}

export default Cart;