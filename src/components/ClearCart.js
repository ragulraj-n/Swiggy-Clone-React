import { useDispatch } from "react-redux"
import { clearItems } from "../utils/cartSlice";

const ClearCart = () =>{
    const dispatch = useDispatch();

    const handleClick = () =>{
        console.log("Button Clicked")
        dispatch(clearItems());
    }

    return (
        <div >
            <button className="border w-[15%] mt-2.5  ml-[45%] cursor-pointer bg-[orangered] text-white font-semibold text-lg rounded-lg" onClick={handleClick}>Clear Cart</button>
        </div>
    )
}

export default ClearCart;