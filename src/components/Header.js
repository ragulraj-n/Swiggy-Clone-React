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
                <li>Home</li>
                <li>Food</li>
                <li>Cart</li>
                <li>Profile</li>
            </ul> 
        </div>
        </div>
    );
}

export default Header;
