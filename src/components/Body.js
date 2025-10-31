import ResCard from "./ResCard";
import restaurants from "../utils/resData"
import {useState} from "react";
    

const Body = ()=>{
    const [listRes,setListRes] = useState(restaurants);
    
    return (
     <div>
        <div className="btn-bar">
            <button className="top-rated-btn" onClick={()=>{
            let filteredList = restaurants.filter((res)=>{
                return  res.info.avgRating > 4.5;
            })
                setListRes(filteredList);
            }}>Top Rated Restaurants</button>

            <button className="reset-btn" onClick={()=>{
                setListRes(restaurants);
            }}>Reset Filters</button>
        </div>
            
        <div className="res-container">
            {   listRes.map(
                (data)=>{
                    return <ResCard  key={data.info.id} resData={data}/>
                }
            ) }
        </div>

     </div>
    )
}

export default Body;