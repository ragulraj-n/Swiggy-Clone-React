import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () =>{
    return(
        <div className='nav-bar'>
        <div>
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div>
        </div>
        <div>
            <ul className="nav-elements">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/order" className="nav-link">Order</Link></li>
                <li>Cart</li>
                <li>Profile</li>
            </ul> 
        </div>
        </div>
    );
}

export default Header;
