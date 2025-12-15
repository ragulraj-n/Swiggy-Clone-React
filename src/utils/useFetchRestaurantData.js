import {useState , useEffect} from "react"
import { API_URL } from "./constant";
const useFetchRestuarantData = () =>{

    const [restaurantInfo,setRestaurantInfo] = useState([]);
    
          useEffect(()=>{
            fetchData();
        },[]);

        const fetchData = async ()=>{
            const apiData = await fetch(API_URL);
            const jsonData = await apiData.json();
            const data = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantInfo(data);
        }
        return restaurantInfo;
}

export default useFetchRestuarantData;