import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const ResCard = ({resData}) =>{
    
    const {id,name,cloudinaryImageId,locality,areaName,cuisines,avgRating} = resData?.info;
    const deliveryTime = resData?.info?.sla?.deliveryTime;

    return (
        <Link to={`/restaurant/${id}`}>
           <div className="res-card">
            <img className="res-image" src={IMAGE_URL + cloudinaryImageId}></img>
            <div className="res-card-text">
            <h3>{name}</h3>
            <h4>{avgRating} ⭐ • {deliveryTime} mins</h4>
            <h5>{cuisines?.join(", ")}</h5>
            <h5>{locality}, {areaName}</h5>
      </div>
      </div>
   </Link>
    )
}

export default ResCard;