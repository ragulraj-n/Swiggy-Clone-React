import { useState } from "react";


const Filter = ({restaurant,setFilteredList}) =>{

    const [searchValue,setSearchValue] = useState("");


    return (
        <div  className="flex justify-around m-2.5  p-2.5 bg-[#f0f0f0] rounded-xl">
                <input className="flex m-auto bg-white w-[20%] h-[40] px-5 py-2 rounded-md border-2 outline-none cursor-pointer border-orange-600" 
                placeholder="Search Restaurants"
                value={searchValue}
                onChange={(e)=>{
                    const value = (e.target.value);
                    setSearchValue(value);
                    const filteredList1 = restaurant.filter((res)=>{
                    return  res.info.name.toLowerCase().includes(value.toLowerCase());
                     })
                    
                    const filteredList2 = restaurant.filter((res)=>{
                        return res.info.cuisines.some((cusisine)=>{
                            return cusisine.toLowerCase().includes(value.toLowerCase());
                        })
                    })

                    const filteredList = [...filteredList1,...filteredList2]; 
                    const uniqueRestaurants = Array.from(
                    new Map(filteredList.map((res) => [res.info.id, res])).values()
                    );

                    setFilteredList(uniqueRestaurants);
                }} />

         <div className="sort-elements">
            <button className=" m-auto bg-[orangered] p-[9] rounded-[25] mr-[20] cursor-pointer text-white" onClick={()=>{
            let filteredList = restaurant.filter((res)=>{
                return  res.info.avgRating > 4.5;
            })
                console.log("Top Rated Button Clicked");
                setFilteredList(filteredList);
            }}>Top Rated Restaurants</button>

            <button className="m-auto bg-[orangered] p-[9] rounded-[25] mr-[20] cursor-pointer text-white" onClick={()=>{
                setFilteredList(restaurant);
                console.log("Reset Button Clicked");
            }}>Reset Filters</button>
        </div>
        </div>
    )
}

export default Filter;