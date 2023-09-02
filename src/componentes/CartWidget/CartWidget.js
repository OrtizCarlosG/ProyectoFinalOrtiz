import { useContext } from "react";
import CartImg from "../../imgs/cart.png";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

function CartWidget(){
    const {totalQuantity} = useContext(CartContext)

    return (
    <Link to="/cart" >
        <img src={CartImg} alt="Cart-Widget"/>
        {totalQuantity}
    </Link>
    );
}
export default CartWidget