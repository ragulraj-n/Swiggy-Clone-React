import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import ItemsCard from "./ItemsCard";
import { useParams } from "react-router-dom";
import ResInfoCard from "./ResInfoCard";
import ResMenuCategory from "./ResMenuCategory";
const RestaurantUI = () =>{
const { resId } = useParams();
const [resData,setResData] = useState(null);
const [resInfo,setResInfo] = useState(null);

useEffect(()=>{
    fetchMenu();
},[])

const fetchDemoMenu = async () =>{
        const fetchedData = await fetch(`https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/demo.json`);
        const jsonData = await fetchedData.json();
        const info = jsonData?.data?.cards[2]?.card?.card?.info;
        const data = jsonData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setResData(data);
        setResInfo(info);
}

const fetchMenu = async () =>{
    try{
        const fetchedData = await  fetch(`https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/${resId}.json`);
        const jsonData = await fetchedData.json();
        const info = jsonData?.data?.cards[2]?.card?.card?.info;
        const data = jsonData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
        setResData(data);
        setResInfo(info);
    }catch(err){
        console.log("Not Found Demo Data Used");
        fetchDemoMenu();
    }
};
    
    if(resData === null) return <Shimmer />

    const itemCategory = resData.filter((data)=>{
        return (data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    });

    return (
        <div>
           <ResInfoCard resInfo={resInfo}/>
           <div className=" flex w-[60%] h-3 rounded-2xl my-5 mx-auto bg-gray-300"></div>
           {
           itemCategory.map((item)=>{
                    return <ResMenuCategory key={item?.card?.card?.categoryId} menuCategory={item?.card?.card} />
                }
            )
           }
             </div>
    )
}

export default RestaurantUI;