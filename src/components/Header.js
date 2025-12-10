import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () =>{
    return(
        <div className='w-[99%] m-2 p-3 border flex justify-between border-1 align-center items-center'>
            <div className="w-100 h-10">
            <img  className="w-[150px]" src={LOGO_URL}/>
            </div>
            <div className="flex flex-row gap-10 mx-10">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/order" className="nav-link">Order</Link>
                 <p>Cart</p>
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
