import ResCard from "./ResCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import Filter from "./Filter";   

const Body = ()=>{

    
    const [restaurant,setRestaurant] = useState([]);
    const [listRes,setListRes] = useState(restaurant);
    const setFilteredList = (lr)=> {
        setListRes(lr);
    }
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
        <Filter restaurant={restaurant} setFilteredList={setFilteredList}/>
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