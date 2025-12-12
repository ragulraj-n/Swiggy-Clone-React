import ResCard, { withDiscountInfo } from "./ResCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import Filter from "./Filter";  
import { API_URL } from "../utils/constant";


const Body = ()=>{
    const RestaurantWithDIscount = withDiscountInfo(ResCard);
    const [restaurant,setRestaurant] = useState([]);
    const [listRes,setListRes] = useState(restaurant);
    const setFilteredList = (lr)=> {
        setListRes(lr);
    }
    useEffect(()=>{
        fetchData();
    },[setRestaurant]);
   
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
        <div className="grid grid-cols-2 gap-20 my-15 mx-20 md:grid-cols-4 md:gap-15 lg:grid-cols-5 lg:gap-10">
            {  
             listRes.map(
                (data)=>{
                    const {aggregatedDiscountInfoV3} = data?.info;
                     return( 
                        <div key={data.info.id}> { aggregatedDiscountInfoV3 ? <RestaurantWithDIscount key={data.info.id} resData={data} /> : <ResCard  key={data.info.id} resData={data}/> }
                    </div>
                     )
                }
            ) }
        </div>

     </div>
    )
}

export default Body;