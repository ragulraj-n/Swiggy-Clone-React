import { useState , useEffect } from "react";

const useRestaurantMenu = (resId) =>{

    const [restaurantMenu , setRestaurantMenu] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])


    const fetchDemoMenu = async () =>{
        const fetchedData = await fetch(`https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/demo.json`);
        const jsonData = await fetchedData.json();
        setRestaurantMenu(jsonData.data);
}

const fetchMenu = async () =>{
    try{
        const fetchedData = await  fetch(`https://raw.githubusercontent.com/ragulraj-n/swiggy_api/main/menu/${resId}.json`);
        const jsonData = await fetchedData.json();
        setRestaurantMenu(jsonData.data);
    }catch(err){
        console.log("Not Found Demo Data Used");
        fetchDemoMenu();
    }
};
return restaurantMenu;
}

export default useRestaurantMenu;