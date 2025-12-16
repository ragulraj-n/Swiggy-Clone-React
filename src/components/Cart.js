import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import ItemCart from "./ItemCart";
import ClearCart from "./ClearCart";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    if(cartItems.length == 0) return <EmptyCart />

    return (
        <div className="mt-20 m-auto w-[50%]">
        <div className="flex ml-[30%] justify-evenly font-bold text-md">
            <h1>Item Name</h1>
            <h1>Quantity</h1>
            <h1 className="ml-6">Price</h1>
        </div>
        <div className="my-2 border-b border-gray-700"></div>
    {
        cartItems.map((item)=>{
            return <ItemCart key={item.id} itemData={item} />
        })
    }

    <ClearCart />
    </div>
    )
}

export default Cart;