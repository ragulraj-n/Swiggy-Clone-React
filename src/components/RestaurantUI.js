import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import ItemsCard from "./ItemsCard";
import { useParams } from "react-router-dom";

const RestaurantUI = () =>{
const { resId } = useParams();
const [resMenu,setResMenu] = useState(null);

useEffect(()=>{
    fetchMenu();
},[])

const fetchMenu = async () =>{
    const url = `https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/${resId}.json`;
    const fetchedData = await  fetch(url);
    const jsonData = await fetchedData.json();
    const data = jsonData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
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