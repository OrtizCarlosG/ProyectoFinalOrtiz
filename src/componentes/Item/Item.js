import "bulma/css/bulma.css"
import { Link } from "react-router-dom"

function Item({producto})
{
    return (
        <div className="tile">
            <div className="tile is-parent">
                <article className="tile is-child">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">{producto.nombre}</p>
                        </header>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={producto.imagen} alt={producto.nombre}/>
                            </figure>
                         </div>
                        <div className="card-content">
                        <div className="content">
                            ${producto.precio}
                        </div>
                    </div>
                    <footer className="card-footer">
                        <Link to={`/item/${producto.id}`} className="button is-info card-footer-item">Mas detalles</Link>
                    </footer>
                </div>
                </article>
            </div>
        </div>
    )
}

export default Item