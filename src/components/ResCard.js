import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const ResCard = ({resData}) =>{
    const {id,name,cloudinaryImageId,locality,areaName,cuisines,avgRating} = resData?.info;
    const deliveryTime = resData?.info?.sla?.deliveryTime;
    return (
        <Link to={`/restaurant/${id}`}>
           <div className="col-span-1 border border-0.5 p-4 rounded-2xl min-h-[500] duration-50 hover:border-orange-500 hover:shadow-xl md:min-h-[450] lg:min-h-[360]">
            <img className="h-[150] w-[300] rounded-2xl" src={IMAGE_URL + cloudinaryImageId}></img>
            <div className="res-card-text mt-5">
            <h3 className=" text-xl font-semibold">{name}</h3>
            <h4>{avgRating} ⭐ • {deliveryTime} mins</h4>
            <h5>{cuisines?.join(", ")}</h5>
            <h5>{locality}, {areaName}</h5>
      </div>
      </div>
   </Link>
    )
}

export const withDiscountInfo = (ResCard) =>{
    return (resData)=>{
        const {header , subHeader} = resData.resData.info.aggregatedDiscountInfoV3;
        console.log(header +" "+ subHeader);
        return (
        <div>
             <label className=" absolute text-white font-bold text-lg ml-6 mt-35 pb-2 pr-1">{header +" "+subHeader}</label>
             <ResCard {...resData}/>
        </div>
    )
}
} 

export default ResCard;