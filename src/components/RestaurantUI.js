import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import ItemsCard from "./ItemsCard";
const RestaurantUI = () =>{

const [resMenu,setResMenu] = useState(null);
useEffect(()=>{
    fetchMenu();
},[setResMenu])

const fetchMenu = async () =>{
    const fetchedData = await  fetch("https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/demo.json")
    const jsonData = await fetchedData.json();
    const data = jsonData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    setResMenu(data);
    };

    if(resMenu === null) return <Shimmer />

            const item = resMenu[0]?.card?.info;
    return (
        <div>
            <ItemsCard itemData={item} />
        </div>
    )
}

export default RestaurantUI;