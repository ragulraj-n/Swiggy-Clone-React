import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";


const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
  
    if(cartItems.length == 0) return <EmptyCart />
}

export default Cart;