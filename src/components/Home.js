import { Link } from "react-router-dom";
const Home = () =>{
    return (
        <div className="outer-cover">
            <div className="home-lft-img">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            </div>
            {/* Search Input Bar  */}
            <Link to="/order">           <div className="home-offer-card">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png">
                </img>
            </div>
            </Link>
            <div className="home-rgt-img">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            </div>
        </div>
    )
}

export default Home;
