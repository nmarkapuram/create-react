import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        console.log("dispatch");
        dispatch(clearCart());
    }

    return (
        <div>
        <div>Cart page</div>
        <button className="border bg-amber-400 rounded-b-lg p-2 cursor-pointer" onClick={handleClearCart}>Clear cart</button>
        <ItemList items={cartItems} />
        </div>)

}

export default Cart;