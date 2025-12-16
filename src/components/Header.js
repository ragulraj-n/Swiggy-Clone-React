import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const Header = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className='w-[99%] m-2 p-3 border flex justify-between align-center items-center'>
            <div className="w-100 h-10">
           <Link to="/order"> <img  className="w-[150px]" src={LOGO_URL}/> </Link>
            </div>
            <div className="flex flex-row gap-10 mx-10 text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/order" >Order</Link>
                 <Link to="/cart">Cart ({cartItems.length})</Link>
                 <p>Profile</p>
            </div>
        </div>
    );
}

export default Header;
