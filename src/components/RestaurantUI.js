import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import ItemsCard from "./ItemsCard";
import { useParams } from "react-router-dom";
import ResInfoCard from "./ResInfoCard";
import ResMenuCategory from "./ResMenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantUI = () =>{
const { resId } = useParams();
const restaurantMenu = useRestaurantMenu(resId);
 const resInfo = restaurantMenu?.data?.cards[2]?.card?.card?.info;
 const resData = restaurantMenu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;

const [showItemsIndex , setShowItemsIndex] = useState(null);

const onShowItems = (index) =>{
    (index === showItemsIndex) ? setShowItemsIndex(null) : setShowItemsIndex(index);  
}

    
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
                    return <ResMenuCategory key={item?.card?.card?.categoryId}
                    isShowItems={showItemsIndex === item?.card?.card?.categoryId}
                    menuCategory={item?.card?.card}
                    showItems={() => {
                        onShowItems(item?.card?.card?.categoryId)
                    }
                    }/>
                }
            )
           }
             </div>
    )
}

export default RestaurantUI;