import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
function NavBar()
{
    return (
                <section className="hero is-primary is-medium">
                        <div className="hero-head">
                          <nav className="navbar">
                            <div className="container">
                              <div className="navbar-brand">
                                <Link to="/">
                                  <h1 className="title is-1">Ecomerce pre-entrega1</h1>
                                  </Link>
                                <span className="navbar-burger" data-target="navbarMenuHeroA">
                                </span>
                              </div>
                              <div id="navbarMenuHeroA" className="navbar-menu">
                                <div className="navbar-end">
                                  <Link to ="/category/men clothing" className="navbar-item is-active">
                                    Indumentaria masculina
                                  </Link>
                                  <Link to ="/category/jewelery" className="navbar-item is-active">
                                    Joyeria
                                  </Link>
                                  <Link to ="/category/electronics" className="navbar-item is-active">
                                    Electrodomesticos
                                  </Link>
                                  <Link to ="/category/women clothing" className="navbar-item is-active">
                                    Indumentaria femenina
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </div>
                    <CartWidget/>
                </section>
             );
}

export default NavBar