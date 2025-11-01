import ResCard from "./ResCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
    

const Body = ()=>{

    
    const [restaurant,setRestaurant] = useState([]);
    const [listRes,setListRes] = useState(restaurant);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await apiData.json();
        const data = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurant(data);
        setListRes(data);
    }

    if(restaurant.length===0){
        console.log("Shimmer Trigged");
        return  (
        <Shimmer />
        )
    }
    return (
     <div>
        <div className="btn-bar">
            <button className="top-rated-btn" onClick={()=>{
            let filteredList = restaurant.filter((res)=>{
                return  res.info.avgRating > 4.2;
            })
                console.log("Top Rated Button Clicked");
                setListRes(filteredList);
            }}>Top Rated Restaurants</button>

            <button className="reset-btn" onClick={()=>{
                setListRes(restaurant);
                console.log("Reset Button Clicked");
            }}>Reset Filters</button>
        </div>
            
        <div className="res-container">
            {  
             listRes.map(
                (data)=>{
                    return <ResCard  key={data.info.id} resData={data}/>
                }
            ) }
        </div>

     </div>
    )
}

export default Body;