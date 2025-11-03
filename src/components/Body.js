import ResCard from "./ResCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import Filter from "./Filter";  
import { API_URL } from "../utils/constant";

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
        const apiData = await fetch(API_URL);

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