import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import ItemsCard from "./ItemsCard";
import { useParams } from "react-router-dom";
import ResInfoCard from "./ResInfoCard";

const RestaurantUI = () =>{
const { resId } = useParams();
const [resMenu,setResMenu] = useState(null);
const [resInfo,setResInfo] = useState(null);

useEffect(()=>{
    fetchMenu();
},[])

const fetchDemoMenu = async () =>{
        const fetchedData = await fetch(`https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/demo.json`);
        const jsonData = await fetchedData.json();
        const info = jsonData?.data?.cards[2]?.card?.card?.info;
        const data = jsonData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setResMenu(data);
        setResInfo(info);
}

const fetchMenu = async () =>{
    try{
        const fetchedData = await  fetch(`https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/${resId}.json`);
        const jsonData = await fetchedData.json();
        const info = jsonData?.data?.cards[2]?.card?.card?.info;
        const data = jsonData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setResMenu(data);
        setResInfo(info);
    }catch(err){
        console.log("Not Found Demo Data Used");
        fetchDemoMenu();
    }
};

    if(resMenu === null) return <Shimmer />
  //  const item = resMenu[0]?.card?.info;
    return (
        <div>
           <ResInfoCard resInfo={resInfo}/>
           <div className="w-[60%] h-3 rounded-2xl my-5 mx-auto bg-gray-300"></div>
           {
           resMenu.map((item)=>{
                    return <ItemsCard key={item?.card?.info?.id} itemData={item?.card?.info} />
                }
            )
           }
             </div>
    )
}

export default RestaurantUI;