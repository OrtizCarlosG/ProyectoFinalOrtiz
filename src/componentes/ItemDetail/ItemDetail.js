import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"

function ItemDetail({id, nombre, precio, stock, descripcion, categoria, imagen})
{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    function handleAdded(quantity)
    {
        setQuantityAdded(quantity)
         const item = {
            id, nombre, precio, imagen}
            console.log(quantity)
        addItem(item, quantity)
    }

    return (
        <div>
             <article>
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">{nombre}</p>
                        </header>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={imagen} alt={nombre}/>
                            </figure>
                         </div>
                        <div className="card-content">
                        <div className="content">
                        <h6 className="subtitle is-6">{descripcion}</h6>
                            ${precio}
                        </div>
                    </div>
                    <footer className="card-footer">
                        {
                               quantityAdded > 0 ? (
                               <Link to="/cart" className="button is-primary">Terminar Compra</Link>
                           ) : (
                           <ItemCount initial={0} stock={stock} onAdd={ (quantity) =>handleAdded(quantity)}/>
                           )
                        }
                    </footer>
                </div>
                </article>
        </div>
    )
}

export default ItemDetail