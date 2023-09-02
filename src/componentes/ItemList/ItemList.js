import Item from "../Item/Item";

function ItemList( { productos } )
{
    return (
        <div className="tile is-ancestor">
            <div  className="tile is-vertical is-4">
                    {productos.map(prod => <Item key={prod.id}  producto = {prod} /> ) }
           </div>
        </div>
    )
}

export default ItemList