import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import  {getDoc, doc} from "firebase/firestore"
import { db } from '../../config/firebase'

function ItemDetailContainer()
{


    const {itemId} = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect (() => {
       setLoading(true)

       const docRef = doc(db, 'productos', itemId)

       getDoc(docRef).then( response => {
        const data = response.data()
        const productoAdapted = {id: response.id, ...data}
        setProducto(productoAdapted)
       }) .catch (error => {
        console.log(error)
       })
       .finally(()=> {
        setLoading(false)
       })
    }, [itemId])
    
    return (
        <div className="ItemDetailContainer">
           <ItemDetail {...producto}/>
        </div>
    );
}

export default ItemDetailContainer

