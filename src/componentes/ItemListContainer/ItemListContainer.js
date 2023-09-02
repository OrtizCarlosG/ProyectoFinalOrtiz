import "bulma/css/bulma.css"
import  {useState, useEffect}  from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
 import { db } from '../../config/firebase'

function ItemListContainer( { greeting } )
{
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
        ?  query(collection(db, 'productos'), where ('category', '==', categoryId))
        : collection(db, 'productos')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data ()
                return {id: doc.id, ...data}
            })
            setProductos(productsAdapted)
        }) .catch( error => {
            console.log(error);
        })
        .finally (()=> {
            setLoading(false)
        })
    },[categoryId])

    return (
        <div>
        <div className="hero-body">
            <div className="container has-text-centered">
                 <h1 className="title is-1">{greeting}</h1>
            </div>
            <ItemList productos={productos}/>
        </div>
        </div>
    );
}

export default ItemListContainer