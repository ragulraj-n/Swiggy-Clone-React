import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const Header = () =>{
    const cartItems = useSelector((state) => state.cart.items);
    return(
        <div className='w-[99%] m-2 p-3 border flex justify-between align-center items-center'>
            <div className="w-100 h-10">
           <Link to="/order"> <img  className="w-[150px]" src={LOGO_URL}/> </Link>
            </div>
            <div className="flex flex-row gap-10 mx-10 text-lg">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/order" className="nav-link">Order</Link>
                 <p>Cart ({cartItems.length})</p>
                 <p>Profile</p>
            </div>
        </div>
    );
}

export default Header;




        // <div>
        //     <img className="logo" src={LOGO_URL}></img>
        // </div>
        // <div>
        // </div>
        // <div>
        //     <ul className="nav-elements">
        //         <li><Link to="/" className="nav-link">Home</Link></li>
        //         <li><Link to="/order" className="nav-link">Order</Link></li>
        //         <li>Cart</li>
        //         <li>Profile</li>
        //     </ul> 
        // </div>
