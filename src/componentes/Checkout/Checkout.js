import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import {Timestamp, getDocs, addDoc, collection, writeBatch, query, where, documentId} from 'firebase/firestore'
import {db} from '../../config/firebase'

import CheckoutForm from '../CheckoutForm/CheckoutForm'

function Checkout() {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

      async function createOrder({name, phone, email})
      {
        setLoading(true)
        try {
            const objectOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'productos')

            const productosAddedFromFireBase = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const {docs} = productosAddedFromFireBase

            docs.array.forEach(doc => {
                const dataDoc = doc.Data();
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productsAddedToCart?.quantity

                if (stockDb >= productQuantity)
                {
                    batch.update(doc.ref, {stock: stockDb - productQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            });

                if (outOfStock.length === 0)
                {
                    await batch.commit()
                    
                    const orderRef = collection(db,  'orders')

                    const ordersAdded = await addDoc(orderRef, objectOrder)

                    setOrderId(ordersAdded.id)
                    clearCart()
                } else {
                    console.log("Hay productos que estan fuera de stock")
                }
            }catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        } 

    if (loading)
    {
        return <h1>Se esta generando su orden de compra</h1>
    }

    if (orderId)
    {
        return <h1>El id de su orden de compra es: {orderId}</h1>
    }

    return ( 
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm= {createOrder}/>
        </div>
    );
}

export default Checkout