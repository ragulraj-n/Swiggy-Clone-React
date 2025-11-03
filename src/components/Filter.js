import { useState } from "react";


const Filter = ({restaurant,setFilteredList}) =>{

    const [searchValue,setSearchValue] = useState("");

    return (
        <div  className="filter-bar">
            <div className="search-bar">
                <input className="search-input" 
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

                    console.log(filteredList2);
                    const filteredList = [...filteredList1,...filteredList2];
                    
                    const uniqueRestaurants = Array.from(
                    new Map(filteredList.map((res) => [res.info.id, res])).values()
                    );

                    setFilteredList(uniqueRestaurants);
                }} />
            </div>
         <div className="sort-elements">
            <button className="top-rated-btn" onClick={()=>{
            let filteredList = restaurant.filter((res)=>{
                return  res.info.avgRating > 4.2;
            })
                console.log("Top Rated Button Clicked");
                setFilteredList(filteredList);
            }}>Top Rated Restaurants</button>

            <button className="reset-btn" onClick={()=>{
                setFilteredList(restaurant);
                console.log("Reset Button Clicked");
            }}>Reset Filters</button>
        </div>
        </div>
    )
}

export default Filter;